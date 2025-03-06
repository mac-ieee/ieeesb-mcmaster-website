import { getUserFromCredentials } from "@/models/api/credentials";
import { credentialsSchema } from "@/models/data/credentials";
import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            authorize: async (credentials) => {

                try {
                    const { email, password } = await credentialsSchema.parseAsync(credentials)

                    // logic to verify if the user exists
                    const user = await getUserFromCredentials(email, password)

                    // return user object with their profile data
                    return user
                } catch (e) {
                    throw new Error("Invalid credentials: " + e)
                }
            },
        }),
        Github
    ],
    //  By default, the `id` property does not exist on `token` or `session`. See the [TypeScript](https://authjs.dev/getting-started/typescript) on how to add it.
    callbacks: {
        jwt({ token, user }) {
            if (user) { // User is available during sign-in
                token.sub = user.id
            }
            return token
        },
        session({ session, token }) {
            if (token && token.sub) {
                session.user.id = token.sub
            }
            return session
        },
    },
})
