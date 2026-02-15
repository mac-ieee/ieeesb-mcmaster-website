export interface Service {
    icon: string;
    title: string;
    description: string;
}

export const services: Service[] = [
    {
        icon: "🔧",
        title: "Hardware Rental",
        description:
            "Borrow development boards, sensors, and other electronics equipment for your projects. Available to all IEEE McMaster members at no extra cost.",
    },
    {
        icon: "🔌",
        title: "Soldering Stations",
        description:
            "Access our fully equipped soldering workstations in the IEEE Lab. Whether you're a beginner or experienced, our tools and guidance are available to help you build.",
    },
    {
        icon: "📦",
        title: "DigiKey Parts",
        description:
            "Need specific electronic components? IEEE McMaster members can request parts through our DigiKey account for academic and club projects.",
    },
]
