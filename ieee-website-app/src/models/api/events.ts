import { prisma } from "@/models/prisma";
import { Event } from "@prisma/client";

export async function getSiteEvents(): Promise<Event[]> {
    return await prisma.event.findMany();
}