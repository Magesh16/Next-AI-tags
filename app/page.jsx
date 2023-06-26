import React from 'react'
import Feed from '@components/Feed'

const page = () => {
  return (
    <section className='w-full flex-center flex-col'>
        <h1 className='head_text text-center'>
            Explore & Learn
            <br className='max-md:hidden' />
        </h1>
        <h3 className='violet_gradient main_text text-center'>Next-AI Powered</h3>
        <p className='desc text-center'> 
            This app will be very informative to gather new technologies and 
            ideas. These prompts can be used later to brief with some AI tool.
        </p>
        <Feed/>
    </section>
  )
}

export default page