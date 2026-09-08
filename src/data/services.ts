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
            `Every engineer needs a computer these days. That is why the IEEE McMaster Student Branch provides Raspberry Pi 5 and Arduino UNO R4 Wi-Fi for rentals. The rentals are refundable upon succesful return and quality control check of all equipment (including ALL packaging).
The following rental prices are:
- Raspberry Pi 5 + Power Supply + SD Card: $100
- Arduino UNO R4 Wi-Fi + Power Supply: $50`,
    },
    {
        icon: "🔌",
        title: "Soldering Stations",
        description:
            "The IEEE McMaster Student Branch provides the highest quality soldering irons sponsored by HAKKO Corporation. A reflow oven is also available for SMT. Basic tools such as microscopes, solder wicks, isopropanol, and high quality lead-free solder is provided. A soldering haven for your soldering needs!",
    },
    {
        icon: "📦",
        title: "DigiKey Parts",
        description:
            `We provide a plethora of components ready at your disposal in our office and on the house! Just please be reasonable with how much you take... we don't have unlimited funds.

Can't find the part you're looking for? We provide Digikey orders with free shipping! Place an order with us and get 10% off on most components!`,
    },
]
