
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";

const CC_LOGO = "/images/cc-logo.png";
const PES_LOGO = "/images/pes-logo.png";
const EMBS_LOGO = "/images/embs-logo.png";

function Header() {
    return (
        <header className="flex flex-row">
            <h1 className="text-2xl flex-1 font-bold py-3">
                Chapters
            </h1>
        </header>
    )
}

function CCChapter() {
    return (
        <section className="flex flex-col gap-4">
            <h2 className="text-xl flex-1 font-bold py-3">
                Computer Chapter
            </h2>

            <div className="w-full flex flex-row">
                <img src={CC_LOGO} alt="CC Logo" className="flex-1 border" />
            </div>

            <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque justo id ipsum mollis dapibus. Aliquam pretium ex enim, id sagittis quam pulvinar commodo. Etiam convallis vulputate nisl vel tempor. Aliquam ut turpis eu justo ultricies volutpat. Integer a convallis ipsum. Integer id lacus commodo.
            </div>

            <div className="flex flex-row-reverse">
                <Button
                    showAnchorIcon
                    as={Link}
                    color="primary"
                    href="/chapters/cc"
                    variant="solid"
                >
                    View for more information
                </Button>
            </div>

        </section>
    )
}

function PESChapter() {
    return (
        <section className="flex flex-col gap-4">
            <h2 className="text-xl flex-1 font-bold py-3">
                Power and Energy Society
            </h2>

            <div className="w-full flex flex-row">
                <img src={PES_LOGO} alt="PES Logo" className="flex-1 border" />
            </div>

            <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque justo id ipsum mollis dapibus. Aliquam pretium ex enim, id sagittis quam pulvinar commodo. Etiam convallis vulputate nisl vel tempor. Aliquam ut turpis eu justo ultricies volutpat. Integer a convallis ipsum. Integer id lacus commodo.
            </div>

            <div className="flex flex-row-reverse">
                <Button
                    showAnchorIcon
                    as={Link}
                    color="primary"
                    href="/chapters/pes"
                    variant="solid"
                >
                    View for more information
                </Button>
            </div>
        </section>
    )
}

function EMBSChapter() {
    return (
        <section className="flex flex-col gap-4">
            <h2 className="text-xl flex-1 font-bold py-3">
                Engineering Medicine and Biology Society
            </h2>

            <div className="w-full flex flex-row">
                <img src={EMBS_LOGO} alt="EMBS Logo" className="flex-1 border" />
            </div>

            <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque justo id ipsum mollis dapibus. Aliquam pretium ex enim, id sagittis quam pulvinar commodo. Etiam convallis vulputate nisl vel tempor. Aliquam ut turpis eu justo ultricies volutpat. Integer a convallis ipsum. Integer id lacus commodo.
            </div>

            <div className="flex flex-row-reverse">
                <Button
                    showAnchorIcon
                    as={Link}
                    color="primary"
                    href="/chapters/embs"
                    variant="solid"
                >
                    View for more information
                </Button>
            </div>
        </section>
    )
}

export default function Chapters() {
    return (
        <section className="flex flex-col gap-4 md:px-20">
            <Header />
            <CCChapter />
            <PESChapter />
            <EMBSChapter />
        </section>
    )
}