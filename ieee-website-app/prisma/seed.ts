import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const ADMIN = "admin";
const PES = "pes";
const EMBS = "embs";
const COMPUTER = "computer";
const MEMBER = "member";

export async function createRoles(): Promise<Prisma.RoleCreateInput[]> {
    return [
        {
            name: "Admin",
            access: ADMIN,
        },
        {
            name: "PES Executive",
            access: PES
        },
        {
            name: "EMBS Executive",
            access: EMBS
        },
        {
            name: "Computer Chapter Executive",
            access: COMPUTER
        },
        {
            name: "Member",
            access: MEMBER
        }
    ];
}

export async function createChapters(): Promise<Prisma.ChapterCreateInput[]> {
    return [
        {
            name: "Computer Chapter",
            short_name: COMPUTER,
            description: "The Computer Chapter focuses on the advancement of computer science and technology.",
            long_description: "The Computer Chapter is dedicated to fostering innovation and collaboration in the field of computer science. We organize events, workshops, and seminars to keep our members updated with the latest trends and technologies in computing.",
            image: "/images/chapters/computer_chapter.jpg"
        },
        {
            name: "Power and Energy Society",
            short_name: PES,
            description: "The Power and Energy Society (PES) is dedicated to the advancement of electric power and energy.",
            long_description: "The Power and Energy Society (PES) focuses on the generation, transmission, distribution, and utilization of electric power. We provide a platform for professionals and students to exchange knowledge, network, and collaborate on projects related to power and energy systems.",
            image: "/images/chapters/power_and_energy_society.jpg"
        },
        {
            name: "Engineering In Medicine and Biology Society",
            short_name: EMBS,
            description: "The Engineering In Medicine and Biology Society (EMBS) is dedicated to the application of engineering principles to medicine and biology.",
            long_description: "The Engineering In Medicine and Biology Society (EMBS) aims to promote the integration of engineering with medical and biological sciences. We organize events, workshops, and seminars to facilitate knowledge sharing and collaboration among students and professionals interested in biomedical engineering.",
            image: "/images/chapters/embs.jpg"
        }
    ];
}

async function getRoleIdByAccess(access: string): Promise<number | bigint> {
    const role = await prisma.role.findFirst({
        where: { access }
    });
    if (!role) {
        throw new Error(`Role with access ${access} not found`);
    }
    return role.id;
}

async function getChapterIdByShortName(short_name: string): Promise<number | bigint> {
    const chapter = await prisma.chapter.findFirst({
        where: { short_name }
    });
    if (!chapter) {
        throw new Error(`Chapter with short name ${short_name} not found`);
    }
    return chapter.id;
}

export async function createStudents(): Promise<Prisma.StudentCreateInput[]> {
    return [
        {
            name: "McMaster IEEE Administrator",
            email: "ieee@mcmaster.ca",
            StudentRole: {
                create: {
                    assigned: new Date(Date.now()),
                    role_id: await getRoleIdByAccess(ADMIN)
                }
            },
            ChapterMember: {
                createMany: {
                    data: [
                        {
                            chapter_id: await getChapterIdByShortName(COMPUTER)
                        },
                        {
                            chapter_id: await getChapterIdByShortName(PES)
                        },
                        {
                            chapter_id: await getChapterIdByShortName(EMBS)
                        }
                    ]
                }
            }
        },
        {
            name: "Some Computer Enthusiast",
            email: "computer.enthusiast@mcmaster.ca",
            StudentRole: {
                create: {
                    assigned: new Date(Date.now()),
                    role_id: await getRoleIdByAccess(MEMBER)
                }
            },
            ChapterMember: {
                create: {
                    chapter_id: await getChapterIdByShortName(COMPUTER)
                }
            }
        },
        {
            name: "Some Electrical Enthusiast",
            email: "electrical.enthusiast@mcmaster.ca",
            StudentRole: {
                create: {
                    assigned: new Date(Date.now()),
                    role_id: await getRoleIdByAccess(MEMBER)
                }
            },
            ChapterMember: {
                create: {
                    chapter_id: await getChapterIdByShortName(PES)
                }
            }
        },
        {
            name: "Some Bio Enthusiast",
            email: "bio.enthusiast@mcmaster.ca",
            StudentRole: {
                create: {
                    assigned: new Date(Date.now()),
                    role_id: await getRoleIdByAccess(MEMBER)
                }
            },
            ChapterMember: {
                create: {
                    chapter_id: await getChapterIdByShortName(EMBS)
                }
            }
        }
    ];
}

async function getStudentIdByEmail(email: string): Promise<number | bigint> {
    const student = await prisma.student.findFirst({
        where: { email }
    });
    if (!student) {
        throw new Error(`Student with email ${email} not found`);
    }
    return student.id;
}

export async function createBlogPosts(): Promise<Prisma.BlogPostCreateInput[]> {
    return [
        {
            title: "Welcome to the Computer Chapter of McMaster IEEE!",
            description: "We are excited to have you here. Stay tuned for upcoming events and news.",
            Student: {
                connect: {
                    id: await getStudentIdByEmail("ieee@mcmaster.ca")
                }
            },
            Chapter: {
                connect: {
                    id: await getChapterIdByShortName(COMPUTER)
                }
            }
        },
        {
            title: "Welcome to the Power and Energy Society of McMaster IEEE!",
            description: "We are excited to have you here. Stay tuned for upcoming events and news.",
            Student: {
                connect: {
                    id: await getStudentIdByEmail("ieee@mcmaster.ca")
                }
            },
            Chapter: {
                connect: {
                    id: await getChapterIdByShortName(PES)
                }
            }
        },
        {
            title: "Welcome to the Engineering In Medicine and Biology Society of McMaster IEEE!",
            description: "We are excited to have you here. Stay tuned for upcoming events and news.",
            Student: {
                connect: {
                    id: await getStudentIdByEmail("ieee@mcmaster.ca")
                }
            },
            Chapter: {
                connect: {
                    id: await getChapterIdByShortName(EMBS)
                }
            }
        }
    ];
}

async function createEvents(): Promise<Prisma.EventCreateInput[]> {
    return [
        {
            name: "Welcome to IEEE McMaster!",
            description: "Join us for an exciting event to kick off the year! Meet fellow members, learn about upcoming activities, and get involved in our vibrant community.",
            date: new Date(new Date().setMonth(new Date().getMonth() + 1)), // Set the event date to one month from now
            Chapter: {
                connect: {
                    id: await getChapterIdByShortName(COMPUTER)
                }
            }
        },
        {
            name: "Welcome to IEEE McMaster!",
            description: "Join us for an exciting event to kick off the year! Meet fellow members, learn about upcoming activities, and get involved in our vibrant community.",
            date: new Date(new Date().setMonth(new Date().getMonth() + 1)), // Set the event date to one month from now
            Chapter: {
                connect: {
                    id: await getChapterIdByShortName(PES)
                }
            }
        },
        {
            name: "Welcome to IEEE McMaster!",
            description: "Join us for an exciting event to kick off the year! Meet fellow members, learn about upcoming activities, and get involved in our vibrant community.",
            date: new Date(new Date().setMonth(new Date().getMonth() + 1)), // Set the event date to one month from now
            Chapter: {
                connect: {
                    id: await getChapterIdByShortName(EMBS)
                }
            }
        }
    ];
}

export async function main() {
    console.log(`Start seeding ...`);

    const roles = await createRoles();
    for (const role of roles) {
        const roleData = await prisma.role.create({
            data: role,
        });
        console.log(`Created role with id: ${roleData.id}`);
    }

    const chapters = await createChapters();
    for (const chapter of chapters) {
        const chapterData = await prisma.chapter.create({
            data: chapter,
        });
        console.log(`Created chapter with id: ${chapterData.id}`);
    }

    const students = await createStudents();
    for (const student of students) {
        const studentData = await prisma.student.create({
            data: student,
        });
        console.log(`Created student with id: ${studentData.id}`);
    }

    const blogPosts = await createBlogPosts();
    for (const blogPost of blogPosts) {
        const blogPostData = await prisma.blogPost.create({
            data: blogPost,
        });
        console.log(`Created blog post with id: ${blogPostData.id}`);
    }

    const events = await createEvents();
    for (const event of events) {
        const eventData = await prisma.event.create({
            data: event,
        });
        console.log(`Created event with id: ${eventData.id}`);
    }

}
main();
