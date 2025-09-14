import { Prisma, prisma } from "@/models/prisma";

export interface ChapterInfo {
  name: string;
  description: string;
  long_description: string;
  image: string;
  href: string;
}

export async function getSiteChapters(): Promise<ChapterInfo[]> {
  const chapters = await prisma.chapter.findMany();

  return chapters.map((chapter) => ({
    name: chapter.name,
    description: chapter.description,
    long_description: chapter.long_description,
    image: chapter.image,
    href: `/chapters/${chapter.short_name}`,
  }));
}

export async function getChapterInfo(name: string): Promise<ChapterInfo | null> {
  const chapter = await prisma.chapter.findFirst({
    where: { short_name: name },
  });

  if (!chapter) {
    return null;
  }

  return {
    name: chapter.name,
    description: chapter.description,
    long_description: chapter.long_description,
    image: chapter.image,
    href: `/chapters/${chapter.short_name}`,
  };
}