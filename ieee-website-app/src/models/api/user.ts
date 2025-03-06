import prisma from "@/models/lib/prisma";

export async function getUser(id: string) {
    const userProfile = await prisma.user.findUnique({
        where: {
            id
        }
    })

    return userProfile
}