import { Card, CardHeader, CardIcon, CardTitle, CardDescription } from "@/components/ui/card";
import { SectionHeader, Badge } from "@/components/ui/badge";
import { chapters } from "@/data/chapter";

export function Chapters() {
    return (
        <section id="chapters" className="py-24 px-8 bg-[#F8FAFB] max-w-full">
            <div className="max-w-7xl mx-auto">
                <div className="fade-in">
                    <SectionHeader
                        label="Technical Communities"
                        title="Our Chapters"
                        subtitle="Focused technical communities within IEEE McMaster, each dedicated to advancing specific engineering disciplines."
                    />
                </div>

                <div className="grid grid-cols-[repeat(auto-fit,minmax(340px,1fr))] gap-6">
                    {chapters.map((chapter) => (
                        <Card key={chapter.title} variant="chapter" className="fade-in">
                            <CardHeader>
                                <CardIcon>{chapter.icon}</CardIcon>
                                <div>
                                    <CardTitle>{chapter.title}</CardTitle>
                                    <Badge variant="role" size="sm" className="text-[0.8125rem]">
                                        {chapter.name}
                                    </Badge>
                                </div>
                            </CardHeader>
                            <CardDescription>{chapter.description}</CardDescription>
                        </Card>
                    ))}
                </div>

                <div className="bg-linear-to-br from-[#4752C4] via-[#5865F2] to-[#7289DA] rounded-[20px] p-16 text-center mt-12 shadow-[0_20px_60px_rgba(71,82,196,0.4)] relative overflow-hidden border border-white/15 fade-in before:absolute before:inset-0 before:bg-[radial-gradient(circle,rgba(255,255,255,0.2)_0%,transparent_60%)] before:animate-[rotateGlow_15s_linear_infinite] after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_15%_25%,rgba(114,137,218,0.3)_0%,transparent_50%),radial-gradient(circle_at_85%_75%,rgba(88,101,242,0.3)_0%,transparent_50%),radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05)_0%,transparent_70%)] after:pointer-events-none after:animate-[pulse_8s_ease-in-out_infinite]">
                    <div className="relative z-10">
                        <h3 className="text-4xl text-white mb-4 font-extrabold text-shadow-[0_2px_20px_rgba(0,0,0,0.2)] font-['Space_Grotesk']">
                            Ready to Get Involved?
                        </h3>
                        <p className="text-white/95 text-lg mb-8 max-w-170 mx-auto leading-[1.8] text-shadow-[0_1px_10px_rgba(0,0,0,0.1)]">
                            Join our Discord community to connect with fellow members, access technical workshops, work on hands-on projects, and network with industry professionals to advance your engineering career.
                        </p>
                        <a
                            href="https://discord.com/channels/871533024133644299/1277755119684947988"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-10 py-4 bg-white text-[#4752C4] no-underline rounded-xl font-bold text-[1.0625rem] transition-all duration-300 ease-in-out shadow-[0_8px_24px_rgba(0,0,0,0.25)] border-2 border-white animate-[buttonFloat_3s_ease-in-out_infinite] hover:-translate-y-1.5 hover:scale-[1.02] hover:shadow-[0_12px_32px_rgba(0,0,0,0.35)] hover:bg-white/95 hover:animate-none"
                        >
                            <span className="text-2xl animate-[emojiPulse_2s_ease-in-out_infinite]">💬</span>
                            <span>Join Our Discord Server</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}