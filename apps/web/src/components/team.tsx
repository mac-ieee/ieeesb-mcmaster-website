import { Card } from "@repo/ui/card";
import { SectionHeader, Badge } from "@repo/ui/badge";

const members = [
    { initials: "JD", name: "Jane Doe", role: "Chair", bio: "4th year Electrical Engineering student passionate about embedded systems and IoT development." },
    { initials: "JS", name: "John Smith", role: "Vice Chair", bio: "Computer Engineering student specializing in AI, machine learning, and robotics." },
    { initials: "AL", name: "Alex Lee", role: "Treasurer", bio: "Software Engineering student with focus on financial technology and blockchain applications." },
    { initials: "SK", name: "Sarah Khan", role: "Events Coordinator", bio: "Engineering Physics student interested in quantum computing and photonics research." },
];

export function Team() {
    return (
        <section id="team" className="py-24 px-8 bg-[#F8FAFB] max-w-full">
            <div className="max-w-7xl mx-auto">
                <div className="fade-in">
                    <SectionHeader
                        label="Leadership"
                        title="Our Team"
                        subtitle="Meet the student leaders driving IEEE McMaster's initiatives and events."
                    />
                </div>

                <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6 max-md:grid-cols-1">
                    {members.map((member) => (
                        <Card key={member.name} variant="team" className="fade-in">
                            <div className="w-24 h-24 bg-linear-to-br from-[#00629B] to-[#00A3E0] rounded-full mx-auto mb-5 flex items-center justify-center font-['Space_Grotesk'] text-[2rem] font-bold text-white">
                                {member.initials}
                            </div>
                            <h3 className="text-lg font-bold mb-1.5 text-[#0F1419] font-['Space_Grotesk']">{member.name}</h3>
                            <Badge variant="role" size="sm" className="mb-4">
                                {member.role}
                            </Badge>
                            <p className="text-[#536471] text-sm leading-relaxed">{member.bio}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}