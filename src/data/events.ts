

export interface Event {
    image: string;
    title: string;
    description: string;
    date: string;
    location: string;
    time?: string;
}

export const events: Event[] = [
    {
        image: "❤️",
        date: "Feb 2–3, 2026",
        title: "WIE × IEEE Heart Soldering Workshop",
        description:
            "A Valentine's Day–themed introductory soldering workshop featuring a heart-shaped PCB. Perfect for beginners with no prior experience required.",
        location: "Thode Makerspace",
        time: "Feb 2: 5:15–8:00 PM | Feb 3: 6:15–7:30 PM",
    },
    {
        image: "🔌",
        date: "Feb 27, 2026",
        title: "Buck Converter Design Workshop",
        description:
            "A hands-on workshop introducing DC–DC buck converter design and implementation. Learn the fundamentals of power electronics.",
        location: "ITB 141 (IEEE Lab)",
        time: "6:00–8:00 PM",
    },
    {
        image: "🎯",
        date: "Coming Soon",
        title: "More Events Coming Soon",
        description:
            "Additional workshops, speaker sessions, and technical events will be announced throughout the semester. Follow us on Discord for updates.",
        location: "Various Locations",
    },
]
