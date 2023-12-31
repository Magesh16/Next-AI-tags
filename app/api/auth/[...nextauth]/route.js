import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';
import { connectToDb } from "../../../../utils/database";
import User from "@models/user";

connectToDb();

const handler = NextAuth({
    providers :[
        GoogleProvider({
                clientId: process.env.GOOGLE_CLIENTID,
                clientSecret: process.env.GOOGLE_CLIENTSECRET
            })
    ],
    callbacks:{
    async session({session}){
        const sessionUser = await User.findOne({email : session.user.email});
        session.user.id = sessionUser._id.toString();
        // console.log(session);
        return session;
    },
    async signIn({profile}){
        // console.log(profile);
        try{
            // await connectToDb();
            const userExist = await User.findOne({email : profile.email})
            if(!userExist){
                await User.create({
                    email : profile.email,
                    username: profile.name.replace(" ","").toLowerCase(),
                    image: profile.picture
                })
            }
            return true
        }catch(err){
            console.log(err);
        }
    }
}
})


export {handler as GET, handler as POST}