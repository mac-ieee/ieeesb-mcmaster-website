import { PrismaClient, Prisma } from "@prisma/client";
import { withAccelerate } from '@prisma/extension-accelerate'

const prisma = new PrismaClient().$extends(withAccelerate());



export async function main() {

}

main();