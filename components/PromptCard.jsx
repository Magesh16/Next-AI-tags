"use client"
import Image from 'next/image'
import { Session } from 'next-auth'
import { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'

const PromptCard = ({post,handleTagClick, hanleEdit, handleDelete}) => {
  return (
    <div className='prompt_card'>
      <div className='flex justify-between items-start gap-5'>
        <div className='flex justify-start flex-1 items-center gap-3 cursor-pointer'>
          <Image
            src={post.userId?.image}
            height={40}
            width={40}
            alt="user_image"
            className='rounded-full object-contain'
          />
          <h4 className='font-semibold'>{post.prompt}</h4>
        </div>
      </div>
    </div>
  )
}

export default PromptCard