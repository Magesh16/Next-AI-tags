"use client"

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import Profile from "@components/Profile"

const MyProfile = () => {
    const Router = useRouter();
    const {data: session} = useSession();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
          try{
            const response = await fetch(`/api/users/${session?.user.id}/posts`);
            const data = await response.json();
            setPosts(data);
          }catch(err){
            console.log("err"+err);
          }
        };
        if(session?.user.id) fetchPosts();
      }, []);
    const handleEdit = (post)=>{
        console.log(post);
        Router.push(`/update-prompt?id=${post._id}`)
    }
    const handleDelete = async(post) =>{
        // router.push(`/update-prompt?id=${post.id}`)
        const hasConfirm = confirm('Are you sure, you want to delete this post')
        if(hasConfirm){
            try{
                await fetch(`/api/prompt/${post._id.toString()}`,{
                    method:'DELETE',
                })
                const filteredPost = posts.filter((p)=> p._id != post._id)
                setPosts(filteredPost);
            }catch(err){
                console.log(err);
            }
        }
    }
  return (
    <Profile
        name ={session.user.name}
        desc ="Welcome to your personalized profile"
        data ={posts}
        handleEdit ={handleEdit}
        handleDelete ={handleDelete}
    />
  )
}

export default MyProfile