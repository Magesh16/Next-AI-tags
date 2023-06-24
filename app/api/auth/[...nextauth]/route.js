import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';


const handler = NextAuth({
    providers :[
        GoogleProvider({
                clientId: process.env.GOOGLE_CLIENTID,
                clientSecret: process.env.GOOGLE_CLIENTSECRET
            })
    ],
    async session({session}){

    },
    async signIn({profile}){

    }
})