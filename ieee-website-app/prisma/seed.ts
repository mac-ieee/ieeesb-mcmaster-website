/* eslint-disable */

import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();


async function createRoles(): Promise<Prisma.RoleCreateInput[]> {
    return [
        {
            name: "Admin",
            access: "all",
        },
        {
            name: "PES Executive",
            access: "pes"
        },
        {
            name: "EMBS Executive",
            access: "embs"
        },
        {
            name: "Computer Chapter Executive",
            access: "computer"
        },
        {
            name: "Member",
            access: "view"
        }
    ];
}

async function createChapters(): Promise<Prisma.ChapterCreateInput[]> {
    return [
        {
            name: "Computer Chapter",
        },
        {
            name: "Power and Energy Society"
        },
        {
            name: "Engineering In Medicine and Biology Society"
        }
    ];
}

async function createStudents(): Promise<Prisma.StudentCreateInput[]> {
    return [
        {
            name: "McMaster IEEE Administrator",
            email: "ieee@mcmaster.ca",
            StudentRole: {
                create: {
                    assigned: new Date(Date.now()),
                    role_id: await prisma.role.findFirst({ where: { name: "Admin" } }).then(role => role?.id) || 1
                }
            },
            ChapterMember: {
                createMany: {
                    data: [
                        {
                            chapter_id: await prisma.chapter.findFirst({ where: { name: "Computer Chapter" } }).then(chapter => chapter?.id) || 1
                        },
                        {
                            chapter_id: await prisma.chapter.findFirst({ where: { name: "Power and Energy Society" } }).then(chapter => chapter?.id) || 2
                        },
                        {
                            chapter_id: await prisma.chapter.findFirst({ where: { name: "Engineering In Medicine and Biology Society" } }).then(chapter => chapter?.id) || 3
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
                    role_id: await prisma.role.findFirst({ where: { name: "Member" } }).then(role => role?.id) || 1
                }
            },
            ChapterMember: {
                create: {
                    chapter_id: await prisma.chapter.findFirst({ where: { name: "Computer Chapter" } }).then(chapter => chapter?.id) || 1
                }
            }
        },
        {
            name: "Some Electrical Enthusiast",
            email: "electrical.enthusiast@mcmaster.ca",
            StudentRole: {
                create: {
                    assigned: new Date(Date.now()),
                    role_id: await prisma.role.findFirst({ where: { name: "Member" } }).then(role => role?.id) || 1
                }
            },
            ChapterMember: {
                create: {
                    chapter_id: await prisma.chapter.findFirst({ where: { name: "Power and Energy Society" } }).then(chapter => chapter?.id) || 1
                }
            }
        },
        {
            name: "Some Bio Enthusiast",
            email: "bio.enthusiast@mcmaster.ca",
            StudentRole: {
                create: {
                    assigned: new Date(Date.now()),
                    role_id: await prisma.role.findFirst({ where: { name: "Member" } }).then(role => role?.id) || 1
                }
            },
            ChapterMember: {
                create: {
                    chapter_id: await prisma.chapter.findFirst({ where: { name: "Engineering In Medicine and Biology Society" } }).then(chapter => chapter?.id) || 1
                }
            }
        }
    ];
}

async function createBlogPosts(): Promise<Prisma.BlogPostCreateInput[]> {
    return [
        {
            title: "Welcome to the Computer Chapter of McMaster IEEE!",
            description: "We are excited to have you here. Stay tuned for upcoming events and news.",
            Student: {
                connect: {
                    id: await prisma.student.findFirst({ where: { email: "ieee@mcmaster.ca" } }).then(student => student?.id) || 1
                }
            },
            Chapter: {
                connect: {
                    id: await prisma.chapter.findFirst({ where: { name: "Computer Chapter" } }).then(chapter => chapter?.id) || 1
                }
            }
        },
        {
            title: "Welcome to the Power and Energy Society of McMaster IEEE!",
            description: "We are excited to have you here. Stay tuned for upcoming events and news.",
            Student: {
                connect: {
                    id: await prisma.student.findFirst({ where: { email: "ieee@mcmaster.ca" } }).then(student => student?.id) || 1
                }
            },
            Chapter: {
                connect: {
                    id: await prisma.chapter.findFirst({ where: { name: "Power and Energy Society" } }).then(chapter => chapter?.id) || 1
                }
            }
        },
        {
            title: "Welcome to the Engineering In Medicine and Biology Society of McMaster IEEE!",
            description: "We are excited to have you here. Stay tuned for upcoming events and news.",
            Student: {
                connect: {
                    id: await prisma.student.findFirst({ where: { email: "ieee@mcmaster.ca" } }).then(student => student?.id) || 1
                }
            },
            Chapter: {
                connect: {
                    id: await prisma.chapter.findFirst({ where: { name: "Engineering In Medicine and Biology Society" } }).then(chapter => chapter?.id) || 1
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
                    id: await prisma.chapter.findFirst({ where: { name: "Computer Chapter" } }).then(chapter => chapter?.id) || 1
                }
            }
        },
        {
            name: "Welcome to IEEE McMaster!",
            description: "Join us for an exciting event to kick off the year! Meet fellow members, learn about upcoming activities, and get involved in our vibrant community.",
            date: new Date(new Date().setMonth(new Date().getMonth() + 1)), // Set the event date to one month from now
            Chapter: {
                connect: {
                    id: await prisma.chapter.findFirst({ where: { name: "Power and Energy Society" } }).then(chapter => chapter?.id) || 1
                }
            }
        },
        {
            name: "Welcome to IEEE McMaster!",
            description: "Join us for an exciting event to kick off the year! Meet fellow members, learn about upcoming activities, and get involved in our vibrant community.",
            date: new Date(new Date().setMonth(new Date().getMonth() + 1)), // Set the event date to one month from now
            Chapter: {
                connect: {
                    id: await prisma.chapter.findFirst({ where: { name: "Engineering In Medicine and Biology Society" } }).then(chapter => chapter?.id) || 1
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
