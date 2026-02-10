import { SectionHeader } from "@repo/ui/badge";
import { CardIcon } from "@repo/ui/card";

export function About() {
    return (
        <section id="about" className="py-24 px-8 max-w-7xl mx-auto">
            <div className="fade-in">
                <SectionHeader
                    label="Who We Are"
                    title="About IEEE McMaster"
                    subtitle="Supporting technical and professional growth at McMaster University through hands-on learning and industry engagement."
                />
            </div>

            <div className="grid grid-cols-2 gap-16 items-start max-lg:grid-cols-1 max-lg:gap-12">
                <div className="fade-in">
                    <h3 className="text-2xl text-[#0F1419] mb-4 font-bold font-['Space_Grotesk']">Our Mission</h3>
                    <p className="text-[#536471] text-base leading-[1.8] mb-6">
                        IEEE McMaster is dedicated to advancing technical excellence and leadership among McMaster students. As part of the world's largest professional organization for engineering and technology, we connect academic learning with practical experience through workshops, projects, and industry engagement.
                    </p>
                    <p className="text-[#536471] text-base leading-[1.8] mb-6">
                        Our student-run lab in Information Technology Building (ITB) 141 serves as a collaborative space for technical development and chapter initiatives, providing members with hands-on access to tools and resources.
                    </p>
                </div>

                <div className="grid gap-6 mt-8 fade-in">
                    {[
                        { icon: "💻", title: "Technical Workshops", desc: "Learn hands-on skills in power electronics, embedded systems, PCB design, medical devices, and more through chapter-led workshops." },
                        { icon: "🔬", title: "Research & Innovation", desc: "Work on cutting-edge projects like AI medical devices, wearable health monitors, IoT systems, and renewable energy technologies." },
                        { icon: "🤝", title: "Industry Connections", desc: "Network with industry professionals and professors through seminars, connecting members with internship and career opportunities." },
                        { icon: "📈", title: "Career Development", desc: "Build professional skills and expand your network through technical projects, industry events, and leadership opportunities in our chapters." },
                    ].map((feature) => (
                        <div key={feature.title} className="flex gap-4 items-start">
                            <CardIcon className="w-12 h-12 text-2xl">{feature.icon}</CardIcon>
                            <div>
                                <h4 className="text-[1.0625rem] font-semibold text-[#0F1419] mb-1.5">{feature.title}</h4>
                                <p className="text-[0.9375rem] text-[#536471] leading-relaxed m-0">{feature.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}