export function Footer() {
    return (
        <footer className="bg-[#0F1419] text-white/80 pt-14 px-8 pb-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-12 max-lg:grid-cols-2 max-lg:gap-8 max-md:grid-cols-1">
                    <div>
                        <h3 className="text-white text-xl mb-3 font-['Space_Grotesk'] font-bold">IEEE McMaster</h3>
                        <p className="text-[0.9375rem] leading-[1.7] mb-6">
                            Official Student Branch of the Institute of Electrical and Electronics Engineers at McMaster University.
                        </p>
                        <div className="flex gap-3">
                            <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white no-underline text-xl transition-all duration-200 hover:bg-ieee-blue hover:-translate-y-0.5" aria-label="Facebook">📘</a>
                            <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white no-underline text-xl transition-all duration-200 hover:bg-ieee-blue hover:-translate-y-0.5" aria-label="Instagram">📷</a>
                            <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white no-underline text-xl transition-all duration-200 hover:bg-ieee-blue hover:-translate-y-0.5" aria-label="LinkedIn">💼</a>
                            <a href="https://discord.com/channels/871533024133644299/1277755119684947988" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white no-underline text-xl transition-all duration-200 hover:bg-ieee-blue hover:-translate-y-0.5" aria-label="Discord">💬</a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white text-sm font-bold uppercase tracking-[0.05em] mb-4 font-['Space_Grotesk']">Quick Links</h4>
                        <ul className="list-none flex flex-col gap-2.5">
                            <li><a href="#about" className="text-white/70 no-underline text-[0.9375rem] transition-colors duration-200 hover:text-white">About Us</a></li>
                            <li><a href="#chapters" className="text-white/70 no-underline text-[0.9375rem] transition-colors duration-200 hover:text-white">Chapters</a></li>
                            <li><a href="#events" className="text-white/70 no-underline text-[0.9375rem] transition-colors duration-200 hover:text-white">Events</a></li>
                            <li><a href="#team" className="text-white/70 no-underline text-[0.9375rem] transition-colors duration-200 hover:text-white">Our Team</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white text-sm font-bold uppercase tracking-[0.05em] mb-4 font-['Space_Grotesk']">Chapters</h4>
                        <ul className="list-none flex flex-col gap-2.5">
                            <li><a href="#chapters" className="text-white/70 no-underline text-[0.9375rem] transition-colors duration-200 hover:text-white">Computer Chapter</a></li>
                            <li><a href="#chapters" className="text-white/70 no-underline text-[0.9375rem] transition-colors duration-200 hover:text-white">PES Chapter</a></li>
                            <li><a href="#chapters" className="text-white/70 no-underline text-[0.9375rem] transition-colors duration-200 hover:text-white">EMBS Chapter</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white text-sm font-bold uppercase tracking-[0.05em] mb-4 font-['Space_Grotesk']">Resources</h4>
                        <ul className="list-none flex flex-col gap-2.5">
                            <li><a href="https://www.ieee.org" target="_blank" rel="noopener noreferrer" className="text-white/70 no-underline text-[0.9375rem] transition-colors duration-200 hover:text-white">IEEE.org</a></li>
                            <li><a href="#contact" className="text-white/70 no-underline text-[0.9375rem] transition-colors duration-200 hover:text-white">Contact</a></li>
                            <li><a href="https://discord.com/channels/871533024133644299/1277755119684947988" target="_blank" rel="noopener noreferrer" className="text-white/70 no-underline text-[0.9375rem] transition-colors duration-200 hover:text-white">Discord</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 text-center">
                    <p className="text-sm text-white/60">
                        &copy; 2026 IEEE McMaster Student Branch. All rights reserved. | IEEE Region 7 (Canada)
                    </p>
                </div>
            </div>
        </footer>
    );
}