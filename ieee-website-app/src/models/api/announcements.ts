import { ChapterInfo } from "@/config/site.chapters";
import prisma from "@/models/lib/prisma"

export async function getAnnouncements() {
    const announcements = await prisma.announcements.findMany()

    return announcements
}

export async function getAnnouncementsByChapter(chapter: ChapterInfo) {
    const announcements = await prisma.announcements.findMany({
        where: {
            chapter: chapter.name
        }
    })

    return announcements
}