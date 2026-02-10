import { Button } from "@repo/ui/button";

export function Hero() {
    return (
        <section className="min-h-screen flex items-center py-32 px-8 pb-16 bg-linear-to-b from-white to-[#F8FAFB] relative overflow-hidden before:absolute before:inset-0 before:bg-[linear-gradient(90deg,rgba(0,98,155,0.03)_1px,transparent_1px),linear-gradient(rgba(0,98,155,0.03)_1px,transparent_1px)] before:bg-size-[50px_50px] before:pointer-events-none">
            <div className="max-w-7xl w-full mx-auto grid grid-cols-[1.1fr_0.9fr] gap-16 items-center relative z-1 max-lg:grid-cols-1 max-lg:text-center">
                <div>
                    <h1 className="text-[4rem] font-extrabold leading-[1.1] mb-6 text-[#0F1419] tracking-[-0.03em] font-['Space_Grotesk'] max-md:text-[2.5rem]">
                        Innovate. <span className="bg-linear-to-br from-[#00629B] to-[#00A3E0] bg-clip-text text-transparent">Connect.</span> Lead.
                    </h1>
                    <p className="text-xl leading-[1.7] text-[#536471] mb-10 font-normal max-w-135 max-lg:max-w-full max-md:text-[1.0625rem]">
                        The IEEE McMaster Student Branch brings together students interested in engineering, technology, and innovation through hands-on learning, professional development, and interdisciplinary collaboration.
                    </p>

                    <div className="flex gap-4 items-center max-lg:justify-center max-md:flex-col max-md:w-full">
                        <Button
                            variant="primary"
                            href="https://discord.com/channels/871533024133644299/1277755119684947988"
                            target="_blank"
                            className="max-md:w-full max-md:justify-center"
                        >
                            <span>Join Discord</span>
                            <span>→</span>
                        </Button>
                        <Button
                            variant="secondary"
                            href="#events"
                            className="max-md:w-full max-md:justify-center"
                        >
                            View Events
                        </Button>
                    </div>
                </div>
                <div className="relative h-125 flex items-center justify-center max-lg:h-100">
                    <div className="relative w-full h-full flex items-center justify-center">
                        <div className="absolute rounded-full border-2 border-solid border-[#00629B] opacity-10 w-100 h-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[circleFloat1_6s_ease-in-out_infinite]"></div>
                        <div className="absolute rounded-full border-2 border-dashed border-[#00629B] opacity-[0.08] w-130 h-130 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[circleFloat2_6s_ease-in-out_infinite]"></div>
                        <img
                            src="ieee-mcmaster-logo-.png"
                            alt="IEEE McMaster"
                            className="w-95 h-auto max-w-[90%] drop-shadow-[0_20px_40px_rgba(0,98,155,0.15)] animate-[float_6s_ease-in-out_infinite] relative z-2 ml-26.25"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}