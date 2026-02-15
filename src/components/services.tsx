import { Card, CardHeader, CardIcon, CardTitle, CardDescription } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/badge";
import { services } from "@/data/services";

export function Services() {
    return (
        <section id="services" className="py-24 px-8 bg-[#F8FAFB] max-w-full">
            <div className="max-w-7xl mx-auto">
                <div className="fade-in">
                    <SectionHeader
                        label="Member Benefits"
                        title="Our Services"
                        subtitle="Resources and tools available to IEEE McMaster members to support your projects and learning."
                    />
                </div>

                <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 max-md:grid-cols-1">
                    {services.map((service) => (
                        <Card key={service.title} variant="chapter" className="fade-in">
                            <CardHeader>
                                <CardIcon>{service.icon}</CardIcon>
                                <CardTitle>{service.title}</CardTitle>
                            </CardHeader>
                            <CardDescription>{service.description}</CardDescription>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
