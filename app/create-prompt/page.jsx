"use client"
import React from 'react'
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import Form from '@components/Form';

const page = () => {
    const router = useRouter();
    const {data: session} = useSession();
    const [submit, setSubmit] = useState(false);
    const [post, setPost] = useState({
        prompt:"",
        tag:""
    });
    const createPrompt = async (e)=>{
        e.preventDefault();
        setSubmit(true);
        try{
            console.log(session?.user.id);
            const response = await fetch('/api/prompt/new', {
                method: 'POST',
                body: JSON.stringify({
                    prompt: post.prompt,
                    tag: post.tag,
                    userId : session?.user.id
                })
            })
            if(response.ok){
                router.push('/');
            }
        
        }catch(err){
            console.log(err);
        }
        finally{
            setSubmit(false)
        }
    }

  return (
    <Form
        type = "Create"
        post = {post}
        setPost = {setPost}
        submit = {submit}
        handleSubmit = {createPrompt}
    />
  )
}

export default page