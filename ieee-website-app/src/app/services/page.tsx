

import { Link } from "@heroui/link";
import { Button } from "@heroui/button";

const SOLDERING_LOGO = "/images/soldering-logo.png";
const HARDWARE_RENTAL_LOGO = "/images/hardware-rental-logo.png";
const DIGIKEY_LOGO = "/images/digikey-logo.png";

function Header() {
    return (
        <header className="flex flex-row">
            <h1 className="text-2xl flex-1 font-bold py-3">
                Services
            </h1>
        </header>
    )
}

function SolderingService() {
    return (
        <section className="flex flex-col gap-4">
            <h2 className="text-xl flex-1 font-bold py-3">
                Soldering
            </h2>

            <div className="w-full flex flex-row">
                <img src={SOLDERING_LOGO} alt="Soldering Logo" className="flex-1 border" />
            </div>

            <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque justo id ipsum mollis dapibus. Aliquam pretium ex enim, id sagittis quam pulvinar commodo. Etiam convallis vulputate nisl vel tempor. Aliquam ut turpis eu justo ultricies volutpat. Integer a convallis ipsum. Integer id lacus commodo.
            </div>

            <div className="flex flex-row-reverse">
                <Button
                    showAnchorIcon
                    as={Link}
                    color="primary"
                    href="/services/soldering"
                    variant="solid"
                >
                    View for more information
                </Button>
            </div>

        </section>
    )
}

function HRService() {
    return (
        <section className="flex flex-col gap-4">
            <h2 className="text-xl flex-1 font-bold py-3">
                Hardware Rental
            </h2>

            <div className="w-full flex flex-row">
                <img src={HARDWARE_RENTAL_LOGO} alt="Hardware Rental Logo" className="flex-1 border" />
            </div>

            <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque justo id ipsum mollis dapibus. Aliquam pretium ex enim, id sagittis quam pulvinar commodo. Etiam convallis vulputate nisl vel tempor. Aliquam ut turpis eu justo ultricies volutpat. Integer a convallis ipsum. Integer id lacus commodo.
            </div>

            <div className="flex flex-row-reverse">
                <Button
                    showAnchorIcon
                    as={Link}
                    color="primary"
                    href="/services/hardware-rental"
                    variant="solid"
                >
                    View for more information
                </Button>
            </div>
        </section>
    )
}

function DigiKeyService() {
    return (
        <section className="flex flex-col gap-4">
            <h2 className="text-xl flex-1 font-bold py-3">
                DigiKey
            </h2>

            <div className="w-full flex flex-row">
                <img src={DIGIKEY_LOGO} alt="DigiKey Logo" className="flex-1 border" />
            </div>

            <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque justo id ipsum mollis dapibus. Aliquam pretium ex enim, id sagittis quam pulvinar commodo. Etiam convallis vulputate nisl vel tempor. Aliquam ut turpis eu justo ultricies volutpat. Integer a convallis ipsum. Integer id lacus commodo.
            </div>

            <div className="flex flex-row-reverse">
                <Button
                    showAnchorIcon
                    as={Link}
                    color="primary"
                    href="/services/digikey"
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
            <SolderingService />
            <HRService />
            <DigiKeyService />
        </section>
    )
}