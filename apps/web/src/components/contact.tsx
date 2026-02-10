import { Card, CardIcon } from "@repo/ui/card";
import { SectionHeader } from "@repo/ui/badge";
import { Button } from "@repo/ui/button";

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

            <div className="grid grid-cols-2 gap-12 items-start max-lg:grid-cols-1">
                <Card className="fade-in p-10">
                    <form>
                        <div className="mb-6">
                            <label htmlFor="name" className="block mb-2 font-semibold text-[#0F1419] text-[0.9375rem]">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full py-3.5 px-4 bg-[#F8FAFB] border-[1.5px] border-[#E7ECF0] rounded-lg text-[#0F1419] font-['Inter'] text-[0.9375rem] transition-all duration-200 focus:outline-none focus:border-[#00629B] focus:bg-white focus:shadow-[0_0_0_3px_rgba(0,98,155,0.1)]"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="email" className="block mb-2 font-semibold text-[#0F1419] text-[0.9375rem]">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full py-3.5 px-4 bg-[#F8FAFB] border-[1.5px] border-[#E7ECF0] rounded-lg text-[#0F1419] font-['Inter'] text-[0.9375rem] transition-all duration-200 focus:outline-none focus:border-[#00629B] focus:bg-white focus:shadow-[0_0_0_3px_rgba(0,98,155,0.1)]"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="block mb-2 font-semibold text-[#0F1419] text-[0.9375rem]">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                className="w-full py-3.5 px-4 bg-[#F8FAFB] border-[1.5px] border-[#E7ECF0] rounded-lg text-[#0F1419] font-['Inter'] text-[0.9375rem] min-h-35 resize-y transition-all duration-200 focus:outline-none focus:border-[#00629B] focus:bg-white focus:shadow-[0_0_0_3px_rgba(0,98,155,0.1)]"
                            />
                        </div>
                        <Button variant="primary" className="w-full justify-center" type="submit">
                            Send Message
                        </Button>
                    </form>
                </Card>

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