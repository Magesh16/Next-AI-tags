"use client"

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/router"
import Profile from "@components/Profile"

const MyProfile = () => {
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
    const handleEdit = ()=>{

    }
    const handleDelete = () =>{

    }
  return (
    <Profile
        name ="Magesh"
        desc ="Welcome to your personalized profile"
        data ={posts}
        handleEdit ={handleEdit}
        handleDelete ={handleDelete}
    />
  )
}

export default MyProfile