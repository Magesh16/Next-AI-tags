import { connectToDb } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (req,{params}) => {
    try {
        await connectToDb()
        const prompts = await Prompt.find({userId: params.id}).populate("userId")
        return new Response(JSON.stringify(prompts), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all prompts", { status: 500 })
    }
} 