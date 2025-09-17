import { getChapterInfo } from "@/config/site.chapters";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import Image from "next/image";
import { MemberDetails } from "@/components/member-details";
import { getStudentsByChapter } from "@/models/api/students";

function Header({ name }: { name: string }) {
  return (
    <header className="flex flex-row">
      <h1 className="text-2xl flex-1 font-bold py-3">{name}</h1>
    </header>
  );
}

export default async function Page({
  params
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  const chapter = await getChapterInfo(name);
  if (!chapter) {
    return (<section className="flex flex-col items-center gap-4 md:px-20" >
      <Header name={"404: Chapter Not Found"} />
      <div className="text-md">The chapter you are looking for does not exist. You're probably in the wrong place. Go back to <Button
        showAnchorIcon
        as={Link}
        color="primary"
        href="/chapters"
        variant="solid"
      >
        Chapters Page
      </Button> to see the existing chapters at McMaster IEEE.</div>
    </section>);
  }

  const students = await getStudentsByChapter(name);

  return (<section className="flex flex-col items-center gap-4 md:px-20">
    <Header name={chapter.name} />

    <div className="w-full flex flex-row">
      <Image
        alt={chapter.name}
        className="flex-1 border"
        src={chapter.image}
        width={600}
        height={200}
      />
    </div>

    <div>{chapter.long_description}</div>

    <h2 className="text-xl flex-1 font-bold py-3">Roster</h2>

    <div className="md:flex-row flex-col flex md:space-x-4 md:space-y-0 space-y-2">
      {students.map((member, index) => (
        <MemberDetails key={index} member={member} />
      ))}
    </div>

  </section>);
}
