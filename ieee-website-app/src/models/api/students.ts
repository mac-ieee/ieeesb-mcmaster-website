import { prisma } from "@/models/prisma";

export type ChapterMember = {
    name: string;
    StudentRole: {
        Role: {
            name: string;
            id: bigint;
            access: string;
        };
    }[];
    id: bigint;
    email: string;
    graduation_year: Date | null;
    entrance_year: Date;
    profile_picture?: string | null;
    major: string;
    minor?: string | null;
    description: string;
};

export async function getStudentsByChapter(chapterName: string): Promise<ChapterMember[]> {
    const chapter = await prisma.chapter.findFirst({
        where: { short_name: chapterName },
    });
    if (!chapter) return [];

    const students = await prisma.student.findMany({
        select: {
            id: true,
            name: true,
            email: true,
            graduation_year: true,
            StudentRole: {
                select: {
                    Role: true
                }
            },
            entrance_year: true,
            profile_picture: true,
            major: true,
            minor: true,
            description: true
        },
        where: {
            ChapterMember: {
                some: {
                    chapter_id: chapter.id
                }
            }
        }
    })

    return students;
}

export async function getAllStudents(): Promise<ChapterMember[]> {
    const students = await prisma.student.findMany({
        select: {
            id: true,
            name: true,
            email: true,
            graduation_year: true,
            StudentRole: {
                select: {
                    Role: true
                }
            },
            entrance_year: true,
            profile_picture: true,
            major: true,
            minor: true,
            description: true
        }
    })

    return students;
}

