'use client';

import { useScrollSpy, useHeaderScroll } from "@/hooks/useScrollSpy";

export function Header() {
    const activeSection = useScrollSpy(['about', 'chapters', 'events', 'team', 'contact'], 100);
    const isScrolled = useHeaderScroll(50);

    const navLinkClass = (section: string) => {
        const baseClass = "text-[#536471] no-underline font-medium text-[0.9375rem] px-4 py-2 rounded-lg transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] relative";
        const activeClass = activeSection === section
            ? "text-[#00629B] bg-[#F8FAFB]"
            : "hover:text-[#00629B] hover:bg-[#F8FAFB]";
        return `${baseClass} ${activeClass}`;
    };

    return (
        <header
            id="header"
            className={`fixed top-0 w-full p-0 bg-white/85 backdrop-blur-[20px] backdrop-saturate-180 border-b border-[#E7ECF0] z-1000 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-white/95 shadow-[0_1px_3px_rgba(0,0,0,0.05)]' : ''}`}
        >
            <nav className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
                <a href="#" className="flex items-center gap-3.5 no-underline">
                    <img src="ieee-mcmaster-logo-.png" alt="IEEE McMaster" className="w-auto h-12 object-contain" />
                    <div className="flex flex-col gap-0.5">
                        <span className="font-['Space_Grotesk'] text-lg font-bold text-[#00629B] tracking-[-0.01em]">
                            IEEE McMaster
                        </span>
                        <span className="font-['Inter'] text-[0.6875rem] font-medium text-[#536471] uppercase tracking-[0.08em]">
                            Student Branch
                        </span>
                    </div>
                </a>
                <ul className="flex gap-1 list-none items-center">
                    <li><a href="#about" className={navLinkClass('about')}>About</a></li>
                    <li><a href="#chapters" className={navLinkClass('chapters')}>Chapters</a></li>
                    <li><a href="#events" className={navLinkClass('events')}>Events</a></li>
                    <li><a href="#team" className={navLinkClass('team')}>Team</a></li>
                    <li><a href="#contact" className={navLinkClass('contact')}>Contact</a></li>
                    <li>
                        <a
                            href="https://discord.com/channels/871533024133644299/1277755119684947988"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-linear-to-br from-[#4A90E2] to-[#357ABD] text-white ml-2 px-5 py-2 shadow-[0_2px_8px_rgba(74,144,226,0.3)] rounded-lg no-underline font-medium text-[0.9375rem] transition-all duration-200 ease-in-out hover:from-[#357ABD] hover:to-[#2868A8] hover:-translate-y-px hover:shadow-[0_4px_12px_rgba(74,144,226,0.4)]"
                        >
                            Join Discord
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}