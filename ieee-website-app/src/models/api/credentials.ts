import { User } from "next-auth";
import prisma from "@/models/lib/prisma"
import { genSalt, hash } from "bcryptjs"
import { credentialsSchema } from "../data/credentials";
import { Role } from "@prisma/client";


// Gets the user from credentials
export async function getUserFromCredentials(email: string, password: string): Promise<User> {

    // Fetches the credentials from the database
    const credentials = await prisma.credentials.findUnique({
        where: {
            email
        }
    })

    // Checks if a user with email exists in the database in the first place
    if (!credentials) {
        throw new Error("Email does not exist in database")
    }

    // hashes the password
    const pwHash = await hash(password, credentials.salt)

    // checks if the passwords are correct
    if (credentials.hash != pwHash) {
        throw new Error("Passwords do not match")
    }

    return credentials;
}

export async function createUserCredentials(name: string, email: string, password: string): Promise<User> {
    var { email, password } = await credentialsSchema.parseAsync({
        email, password
    })

    // Fetches the credentials from the database
    const credentials = await prisma.credentials.findUnique({
        where: {
            email
        }
    })

    // Check if user already exsits
    if (credentials) {
        throw new Error("User already exists");
    }

    // Create the salt and hash
    const salt = await genSalt();
    const pwHash = await hash(password, salt);

    // create the entry in the credentials
    const user = await prisma.credentials.create({
        data: {
            email,
            name,
            salt,
            hash: pwHash
        }
    })

    return user;
}

export async function getRoles(id: string): Promise<Role[]> {
    const user = await prisma.user.findUnique({
        where: {
            id: id
        },
        include: {
            roles: true
        }
    })

    if (!user) {
        throw new Error("User does not exist");
    }

    return user.roles;
}