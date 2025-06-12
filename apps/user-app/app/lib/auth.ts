import db from "@repo/db/client";
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt";
import { AuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import { Session } from "next-auth";

declare module "next-auth" {
    interface Session {
        user: {
            id?: string;
            name?: string | null;
            email?: string | null;
            image?: string | null;
        }
    }
}

export const authOptions: AuthOptions = {
    providers: [
      CredentialsProvider({
          name: 'Credentials',
          credentials: {
            phone: { label: "Phone number", type: "text", placeholder: "1231231231", required: true },
            password: { label: "Password", type: "password", required: true }
          },
          async authorize(credentials) {
            if (!credentials?.phone || !credentials?.password) {
              return null;
            }
            
            const existingUser = await db.user.findFirst({
                where: {
                    number: credentials.phone
                }
            });
            if (!existingUser) {
                throw new Error("User does not exist");
              }

            
                const passwordValidation = await bcrypt.compare(credentials.password, existingUser.password);
                if (passwordValidation) {
                    return {
                        id: existingUser.id.toString(),
                        name: existingUser.name || undefined,
                        email: existingUser.number
                    }
                }
                
            


            return null;
          },
        })
    ],
    pages: {
        signIn: '/auth/login',
        newUser: '/auth/signup'
    }
    ,
    secret: process.env.JWT_SECRET || "secret",
    callbacks: {
        async session({ token, session }: { token: JWT; session: Session }) {
            if (session.user) {
                session.user.id = token.sub || '';
            }
            return session;
        }
    }
  }