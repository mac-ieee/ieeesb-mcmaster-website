import { prisma } from "@/models/prisma";
import { Event } from "@prisma/client";

export interface ChapterInfo {
  name: string;
  description: string;
  long_description: string;
  image: string;
  href: string;
  Event: Event[];
}

export async function getSiteChapters(): Promise<ChapterInfo[]> {
  const chapters = await prisma.chapter.findMany({
    select: {
      name: true,
      description: true,
      long_description: true,
      image: true,
      short_name: true,
      Event: true
    }
  });

  return chapters.map((chapter) => ({
    name: chapter.name,
    description: chapter.description,
    long_description: chapter.long_description,
    image: chapter.image,
    href: `/chapters/${chapter.short_name}`,
    Event: chapter.Event
  }));
}

export async function getChapterInfo(name: string): Promise<ChapterInfo | null> {
  const chapter = await prisma.chapter.findFirst({
    where: { short_name: name },
    select: {
      name: true,
      description: true,
      long_description: true,
      image: true,
      short_name: true,
      Event: true
    }
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
    Event: chapter.Event
  };
}