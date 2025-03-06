export interface ChapterInfo {
  name: string;
  description: string;
  image: string;
  href: string;
  route: string;
}

export const siteChapters: ChapterInfo[] = [
  {
    name: "Computer Chapter",
    description: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Fusce pellentesque justo id ipsum mollis dapibus.
        Aliquam pretium ex enim, id sagittis quam pulvinar commodo.
        Etiam convallis vulputate nisl vel tempor.
        Aliquam ut turpis eu justo ultricies volutpat.
        Integer a convallis ipsum. Integer id lacus commodo.
        `,
    image: "/images/cc-logo.png",
    href: "/chapters/cc",
    route: "cc"
  },
  {
    name: "Power and Energy Society",
    description: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Fusce pellentesque justo id ipsum mollis dapibus.
        Aliquam pretium ex enim, id sagittis quam pulvinar commodo.
        Etiam convallis vulputate nisl vel tempor.
        Aliquam ut turpis eu justo ultricies volutpat.
        Integer a convallis ipsum. Integer id lacus commodo.
        `,
    image: "/images/pes-logo.png",
    href: "/chapters/pes",
    route: "pes"
  },
  {
    name: "Engineering in Medicine and Biology",
    description: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Fusce pellentesque justo id ipsum mollis dapibus.
        Aliquam pretium ex enim, id sagittis quam pulvinar commodo.
        Etiam convallis vulputate nisl vel tempor.
        Aliquam ut turpis eu justo ultricies volutpat.
        Integer a convallis ipsum. Integer id lacus commodo.
        `,
    image: "/images/embs-logo.png",
    href: "/chapters/embs",
    route: "embs"
  },
];

export function getChapterInfoByName(name: string): ChapterInfo | undefined {
  return siteChapters.find((chapter) => chapter.name === name);
}

export function getChapterInfoByRoute(route: string): ChapterInfo | undefined {
  return siteChapters.find((chapter) => chapter.route === route);
}