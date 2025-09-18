import { EventDetails } from "@/components/events-detail";
import { getSiteEvents } from "@/models/api/events";


function Header() {
    return (
        <header className="flex flex-row">
            <h1 className="text-2xl flex-1 font-bold py-3">Events</h1>
        </header>
    );
}

export default async function Page() {
    const events = await getSiteEvents();

    return (
        <section className="flex flex-col gap-4 md:px-20">
            <Header />
            {events.map((event, index) => (
                <EventDetails key={index} event={event} />
            ))}
        </section>)
}