import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import Image from "next/image";

import { ChapterInfo, siteChapters } from "@/config/site.chapters";

function Header() {
  return (
    <header className="flex flex-row">
      <h1 className="text-2xl flex-1 font-bold py-3">Chapters</h1>
    </header>
  );
}

function ChapterDetails({ chapter }: { chapter: ChapterInfo }) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-xl flex-1 font-bold py-3">{chapter.name}</h2>

      <div className="w-full flex flex-row">
        <Image
          alt={chapter.name}
          className="flex-1 border"
          src={chapter.image}
          width={600}
          height={200}
        />
      </div>

      <div>{chapter.description}</div>

      <div className="flex flex-row-reverse">
        <Button
          showAnchorIcon
          as={Link}
          color="primary"
          href={chapter.href}
          variant="solid"
        >
          View for more information
        </Button>
      </div>
    </section>
  );
}

export default function Chapters() {
  return (
    <section className="flex flex-col gap-4 md:px-20">
      <Header />
      {siteChapters.map((chapter, index) => (
        <ChapterDetails key={index} chapter={chapter} />
      ))}
    </section>
  );
}
