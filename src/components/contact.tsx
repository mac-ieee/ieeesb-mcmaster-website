import { Card, CardIcon } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Contact() {
    return (
        <section id="contact" className="py-24 px-8 max-w-7xl mx-auto">
            <div className="fade-in">
                <SectionHeader
                    label="Get In Touch"
                    title="Contact Us"
                    subtitle="Have questions or want to get involved? We'd love to hear from you."
                />
            </div>

            <div className="grid grid-cols-1 gap-12 items-center max-lg:grid-cols-1">

                <div className="grid gap-6 fade-in">
                    <Card variant="contact">
                        <div className="flex items-center gap-4 mb-3">
                            <CardIcon variant="contact">📧</CardIcon>
                            <span className="font-bold text-[#0F1419] text-base">Email</span>
                        </div>
                        <p className="text-[#536471] text-[0.9375rem] leading-relaxed">ieee@mcmaster.ca</p>
                    </Card>

                    <Card variant="contact">
                        <div className="flex items-center gap-4 mb-3">
                            <CardIcon variant="contact">📍</CardIcon>
                            <span className="font-bold text-[#0F1419] text-base">Location</span>
                        </div>
                        <p className="text-[#536471] text-[0.9375rem] leading-relaxed">
                            ITB 141, McMaster University<br />Hamilton, Ontario, Canada
                        </p>
                    </Card>

                    <Card variant="contact">
                        <div className="flex items-center gap-4 mb-3">
                            <CardIcon variant="contact">💬</CardIcon>
                            <span className="font-bold text-[#0F1419] text-base">Discord</span>
                        </div>
                        <p className="text-[#536471] text-[0.9375rem] leading-relaxed">
                            Join our Discord server for instant updates and community discussions.
                        </p>
                    </Card>
                </div>
            </div>
        </section>
    );
}