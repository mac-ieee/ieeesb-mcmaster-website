
export interface Chapter {
    name: string;
    title: string;
    description: string;
    icon: string;
}

export const chapters: Chapter[] = [
    {
        name: "IEEE Computer Society",
        title: "Computer Chapter",
        description:
            "The Computer Chapter is all about turning electronics into real-world solutions. Its focus is on embedded software and PCB circuit design. Whether it's crafting with Arduino, innovating with Raspberry Pi, or applying tech across industries, IEEE Computer Society is at the forefront of making electronics work smarter. Members gain hands-on experience through projects that directly apply to industry.",
        icon: "💻",
    },
    {
        name: "Power and Energy Society",
        title: "PES Chapter",
        description:
            "The PES Chapter focuses on power electronics, with topics like energy transmission and conversion. Members explore power generation, electrical infrastructure, renewable energy, and related fields such as radio frequency (RF), control systems, and analog system design through technical discussions and hands-on learning.",
        icon: "⚡",
    },
    {
        name: "Engineering in Medicine & Biology",
        title: "EMBS Chapter",
        description:
            "The EMBS Chapter explores the potential of computer and electrical engineering to fill the gaps in healthcare and medicine. Active research projects include AI medical devices, wearable cuffless blood pressure monitors, and more. Members gain hands-on experience in therapeutics, neural engineering, bioinformatics, and related fields.",
        icon: "🏥",
    },
]