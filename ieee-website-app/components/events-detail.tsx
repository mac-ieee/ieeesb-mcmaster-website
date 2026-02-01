import { Event } from "@prisma/client";
import Link from "next/link";

export function EventDetails({ event }: { event: Event }) {
    return (
        <section className="border flex-1 flex flex-col rounded-xl p-2 drop-shadow-md bg-background hover:cursor-pointer hover:scale-105 transition-transform duration-300">
            <h2 className="text-xl flex-1 font-bold py-3">{event.name}</h2>
            <p className="text-md">{event.description}</p>
            <p className="text-md"><strong>Date:</strong> {event.date.toString()}</p>
            <p className="text-md"><strong>IEEE Link:</strong> <Link href={event.ieee_link}>{event.ieee_link}</Link></p>
            {event.registration_link && <p className="text-md"><strong>Registration Link:</strong> <Link href={event.registration_link}>{event.registration_link}</Link></p>}
        </section>
    );
}
