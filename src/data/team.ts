export interface Member {
    initials: string;
    name: string;
    role: string;
    bio: string;
}

export const members: Member[] = [
    {
        initials: "JD",
        name: "Jane Doe",
        role: "Chair",
        bio: "4th year Electrical Engineering student passionate about embedded systems and IoT development.",
    },
    {
        initials: "JS",
        name: "John Smith",
        role: "Vice Chair",
        bio: "Computer Engineering student specializing in AI, machine learning, and robotics.",
    },
    {
        initials: "AL",
        name: "Alex Lee",
        role: "Treasurer",
        bio: "Software Engineering student with focus on financial technology and blockchain applications.",
    },
    {
        initials: "SK",
        name: "Sarah Khan",
        role: "Events Coordinator",
        bio: "Engineering Physics student interested in quantum computing and photonics research.",
    },
]
