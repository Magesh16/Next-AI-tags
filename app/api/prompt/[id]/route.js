import { connectToDb } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (req,{params}) => {
    try {
        await connectToDb()
        const prompts = await Prompt.findById(params.id).populate("userId")
        if(!prompt) return new Response("Post not found", { status: 500 })
        return new Response(JSON.stringify(prompts), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all prompts", { status: 500 })
    }
}

export const PATCH = async (req,{params})=>{
    const {prompt, tag} = await req.json();
    try{
        await connectToDb();
        const existingPrompt = await Prompt.findById(params.id);
        if(!existingPrompt) {
            return new Response("Post Not found", { status: 404 })
        }
        existingPrompt.prompt = prompt;
        existingPrompt.tag = tag;
        await existingPrompt.save();
        return new Response(JSON.stringify(existingPrompt), { status: 200 })
        
    }catch(err){
        return new Response("Failed to update the post", { status: 500 })

    }
}