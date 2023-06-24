import React from 'react'
import Feed from '@components/Feed'

const page = () => {
  return (
    <section className='w-full flex-center flex-col'>
        <h1 className='head_text text-center'>
            Explore & Blast
            <br className='max-md:hidden' />
        </h1>
        <h3 className='violet_gradient main_text text-center'>Next-AI Powered </h3>
        <p className='desc text-center'> 
            This AI will provide you the prompt of searched tags and this is next generative AI tool
            for all techies.
        </p>
        <Feed/>
    </section>
  )
}

export default page