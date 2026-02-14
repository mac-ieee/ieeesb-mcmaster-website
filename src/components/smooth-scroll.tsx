'use client';

import { useEffect } from 'react';

export function SmoothScroll() {
    useEffect(() => {
        // Smooth scrolling for anchor links
        const handleClick = (e: MouseEvent) => {
            const target = (e.target as HTMLElement).closest('a[href^="#"]');
            if (!target) return;

            const href = target.getAttribute('href');
            if (!href) return;

            e.preventDefault();
            const element = document.querySelector(href);

            if (element) {
                const headerOffset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth',
                });
            }
        };

        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    }, []);

    useEffect(() => {
        // Intersection Observer for fade-in animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px',
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in').forEach((el) => {
            observer.observe(el);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return null;
}
