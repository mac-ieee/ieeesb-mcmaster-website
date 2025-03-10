import { getUserFromCredentials } from "@/models/api/credentials";
import { credentialsSchema } from "@/models/data/credentials";
import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";

const providers = [
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
]

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers,
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
    pages: {
        signIn: "/auth/signin",
        signOut: "/auth/signout",
    }
})


export const providerMap = providers
    .map((provider) => {
        if (typeof provider === "function") {
            const providerData = (provider as Function)()
            return { id: providerData.id, name: providerData.name }
        } else {
            return { id: provider.id, name: provider.name }
        }
    })
    .filter((provider) => provider.id !== "credentials")
