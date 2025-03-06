import { ChapterInfo, getChapterInfoByRoute } from "@/config/site.chapters";
import { getAnnouncementsByChapter } from "@/models/api/announcements";
import { notFound } from "next/navigation";

async function AnnouncementsComponent({ chapter }: { chapter: ChapterInfo }) {
    const announcements = await getAnnouncementsByChapter(chapter);


    return (
        <section className="flex flex-col gap-4">
            {announcements.map((announcement) => <div>
                <div>{announcement.title}</div>
                <div>{announcement.descriptionContent}</div>
            </div>)}
        </section>
    );
}

export default async function ChapterPage({
    params
}: {
    params: Promise<{ chapter: string }>
}) {
    const chapterParams = await params;

    const chapter = getChapterInfoByRoute(chapterParams.chapter);

    if (!chapter) {
        notFound();
    }

    return (
        <section className="flex flex-col gap-4 md:px-20">

            <header className="flex flex-row">
                <h1 className="text-2xl flex-1 font-bold py-3">{chapter.name}</h1>
            </header>

            <div className="w-full flex flex-row">
                <img alt={chapter.name} className="flex-1 border" src={chapter.image} />
            </div>

            <div>{chapter.description}</div>

            <AnnouncementsComponent chapter={chapter} />
        </section>
    );
}