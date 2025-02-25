import NextAuth from "next-auth"
import authConfig from "@/auth.config"
import {PrismaAdapter} from "@auth/prisma-adapter"
import {db} from "@/lib/db"
import { getUserById } from "@/data/user"
 
export const { handlers: { GET, POST}, 
signIn, 
signOut,
 auth 
} = NextAuth({
    callbacks: {
        async session({session, token}){
            console.log({sessionToken: token})
            if (token.sub && session.user){
                session.user.id = token.sub;

            }
            if (token.role && session.user){
                session.user.role = token.role;
            }
            console.log({sessionToken: token})
            
            if(session.user){
                session.user.customField = token.customField;
            }

            return session;
        },

        async jwt({token}){
            if (!token.sub) return token;
            const existingUser = await getUserById(token.sub);
            console.log("exisiting user",existingUser);
            if (!existingUser) return token;
            token.role = existingUser.role;

            return token;
        }
    },
    adapter: PrismaAdapter(db),
    session: {strategy: "jwt"},
  ...authConfig,
})