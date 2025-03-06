import { ChapterInfo, getChapterInfoByRoute } from "@/config/site.chapters";
import { getAnnouncementsByChapter } from "@/models/api/announcements";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Image } from "@heroui/image";
import { Divider } from "@heroui/divider";
import { Link } from "@heroui/link";
import { Announcements } from "@prisma/client";
import { notFound } from "next/navigation";

function Announcement({ announcement }: { announcement: Announcements }) {

    return (
        <Card className="max-w-[400px]">
            <CardHeader className="flex gap-3">
                <Image
                    alt="heroui logo"
                    height={40}
                    radius="sm"
                    src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                    width={40}
                />
                <div className="flex flex-col">
                    <p className="text-md">{announcement.title}</p>
                    <p className="text-small text-default-500">{announcement.authorId || "user"}</p>
                </div>
            </CardHeader>
            <Divider />
            <CardBody>
                <p>{announcement.descriptionContent}</p>
            </CardBody>
            <Divider />
            <CardFooter>
                <Link isExternal showAnchorIcon href="https://github.com/heroui-inc/heroui">
                    Visit source code on GitHub.
                </Link>
            </CardFooter>
        </Card>
    );
}

async function AnnouncementsContent({ chapter }: { chapter: ChapterInfo }) {
    const announcements = await getAnnouncementsByChapter(chapter);

    return (
        <section className="flex flex-wrap gap-4">
            {announcements.map((announcement) => <Announcement key={announcement.id} announcement={announcement} />)}
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

            <AnnouncementsContent chapter={chapter} />
        </section>
    );
}