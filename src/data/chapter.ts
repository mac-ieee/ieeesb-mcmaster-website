
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
            "The Computer Chapter develops software and hardware technical workshops, providing opportunities for its members to learn and develop new skills, including working with Arduinos, Raspberry Pis, Python, JavaScript, C, APIs, Computer Vision, Web Development and more!",
        icon: "💻",
    },
    {
        name: "Power and Energy Society",
        title: "PES Chapter",
        description:
            "The Power and Energy Society is a hub for students interested in the bulk electric system, energy generation, bulk equipment, power electronics, etc. We organize workshops aimed towards these interests and hope to network and create a social community!",
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
