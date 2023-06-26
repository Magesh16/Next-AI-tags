"use client";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

const PromptCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {

  const [copied, setCopied] = useState();
  const {data:session} = useSession();
  const pathName = usePathname();

  const handleCopy = ()=>{
    setCopied(post.prompt);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(()=> setCopied(""), 3000);
  }
  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div className="flex justify-start flex-1 items-center gap-3 cursor-pointer">
          <Image
            src={post.userId?.image}
            height={40}
            width={40}
            alt="user_image"
            className="rounded-full object-contain"
          />
          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-gray-900">
              {post.userId.email}
            </h3>
            <p className="font-inter text-sm  text-gray-500">{post.tag}</p>
          </div>
        </div>

        <div className="copy_btn" onClick={handleCopy}>
        <Image
           src = {copied == post.prompt
                  ?"assets/icons/tick.svg" :"assets/icons/copy.svg"}
            width={12}
            height={12}
            alt="copy"
        />
        </div>
      </div>
      <p className="my-4 font-satoshi text-sm text-black-600">{post.prompt}</p>
      <p 
      className="font-inter text-sm cursor-pointer text-red-500"
      onClick={handleTagClick && handleTagClick(post.tag)}
      >{post.tag}</p>

      {/*   Only on profile page */ }
      {session?.user.id === post.userId._id &&
        pathName === '/profile' && (
          <div className="mt-5 flex-center gap-5 flex-end pt-3">
            <p className="font-inter text-sm text-blue-600 cursor-pointer" 
            onClick={handleEdit}>Edit</p>

            <p className="font-inter text-sm text-orange-600 cursor-pointer" 
              onClick={handleDelete}>Delete</p>
          </div>
          
        )
      }  
    </div>
  );
};

export default PromptCard;
