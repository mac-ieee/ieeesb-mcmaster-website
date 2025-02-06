

import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import { ServiceInfo, siteServices } from "@/config/site.services";


function Header() {
    return (
        <header className="flex flex-row">
            <h1 className="text-2xl flex-1 font-bold py-3">
                Services
            </h1>
        </header>
    )
}


function ServiceDetails({ service }: { service: ServiceInfo }) {
    return (
        <section className="flex flex-col gap-4">
            <h2 className="text-xl flex-1 font-bold py-3">
                {service.name}
            </h2>

            <div className="w-full flex flex-row">
                <img src={service.image} alt={service.name} className="flex-1 border" />
            </div>

            <div>
                {service.description}
            </div>

            <div className="flex flex-row-reverse">
                <Button
                    showAnchorIcon
                    as={Link}
                    color="primary"
                    href={service.href}
                    variant="solid"
                >
                    View for more information
                </Button>
            </div>

        </section>
    )
}

export default function Services() {
    return (
        <section className="flex flex-col gap-4 md:px-20">
            <Header />
            {
                siteServices.map((service, index) => (
                    <ServiceDetails service={service} key={index} />
                ))
            }
        </section>
    )
}