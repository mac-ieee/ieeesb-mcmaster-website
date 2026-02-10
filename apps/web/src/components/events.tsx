import { Card, CardDescription, CardTitle } from "@repo/ui/card";
import { SectionHeader, Badge } from "@repo/ui/badge";

const events = [
    {
        emoji: "❤️",
        date: "Feb 2–3, 2026",
        title: "WIE × IEEE Heart Soldering Workshop",
        description: "A Valentine's Day–themed introductory soldering workshop featuring a heart-shaped PCB. Perfect for beginners with no prior experience required.",
        location: "Thode Makerspace",
        time: "Feb 2: 5:15–8:00 PM | Feb 3: 6:15–7:30 PM",
    },
    {
        emoji: "🔌",
        date: "Feb 27, 2026",
        title: "Buck Converter Design Workshop",
        description: "A hands-on workshop introducing DC–DC buck converter design and implementation. Learn the fundamentals of power electronics.",
        location: "ITB 141 (IEEE Lab)",
        time: "6:00–8:00 PM",
    },
    {
        emoji: "🎯",
        date: "Coming Soon",
        title: "More Events Coming Soon",
        description: "Additional workshops, speaker sessions, and technical events will be announced throughout the semester. Follow us on Discord for updates.",
        location: "Various Locations",
    },
];

export function Events() {
    return (
        <section id="events" className="py-24 px-8 max-w-7xl mx-auto">
            <div className="fade-in">
                <SectionHeader
                    label="What's Happening"
                    title="Upcoming Events"
                    subtitle="Technical workshops and hands-on learning opportunities for IEEE McMaster members."
                />
            </div>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(340px,1fr))] gap-6 max-md:grid-cols-1">
                {events.map((event) => (
                    <Card key={event.title} variant="event" className="fade-in">
                        <div className="w-full h-45 bg-linear-to-br from-[#00629B] to-[#00A3E0] flex items-center justify-center text-[3.5rem] relative overflow-hidden before:absolute before:-top-1/2 before:-left-1/2 before:w-[200%] before:h-[200%] before:bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,transparent_70%)]">
                            {event.emoji}
                        </div>
                        <div className="p-7">
                            <Badge variant="date" size="sm" className="mb-4">
                                {event.date}
                            </Badge>
                            <CardTitle size="lg" className="mb-3 leading-[1.3]">{event.title}</CardTitle>
                            <CardDescription className="mb-4">{event.description}</CardDescription>
                            <div className="flex flex-col gap-2 pt-4 border-t border-[#E7ECF0]">
                                <div className="flex items-center gap-2 text-[#536471] text-sm font-medium">
                                    <span>📍</span>
                                    <span>{event.location}</span>
                                </div>
                                {event.time && (
                                    <div className="flex items-center gap-2 text-[#536471] text-sm font-medium">
                                        <span>🕐</span>
                                        <span>{event.time}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    );
}