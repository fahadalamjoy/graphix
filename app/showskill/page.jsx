'use client'

import React from 'react'
export default function page() {
  return (
    <section className='container  lg:py-12 py-6 lg:h-[90vh] h-[100vh] w-full bg-black relative text-white font-custom items-center'>
        <div className='flex lg:flex-row flex-col gap-12 py-12 relative'>
            <div className='mb-6 absolute lg:top-[-2rem] top-[-8rem] inset-0 left-[2rem] lg:my-0 my-6'><h1 className='text-2xl mb-6'>Branding and Identity Design</h1></div>
            <div className='absolute  inset-0 flex items-center lg:text-start text-center justify-center lg:my-0 my-6'><h1 className='text-2xl'>Illustrations and Infographics</h1></div>
            <div className='absolute lg:top-[-10rem] top-[6rem] right-[2rem] inset-0 flex items-center lg:justify-end justify-center lg:my-0 my-6'><h1 className='text-2xl'>Logo Design</h1></div>
        </div>
        <div className='flex lg:flex-row flex-col items-center justify-around py-12 text-center lg:mt-0 mt-6'>
            <div className=''><h1 className='text-2xl lg:my-0 my-6'>Social Media Graphics</h1></div>
            <div className='items-center justify-center text-center'><h1 className='text-2xl lg:my-0 my-6'>Motion Graphics and Animation</h1></div>
        </div>
        <div className='flex lg:flex-row flex-col gap-12 lg:py-12 py-6 relative mt-6 lg:text-start text-center'>
            <div className='mb-6 absolute top-[4rem] inset-0 left-[2rem] lg:my-0 my-6 '><h1 className='text-2xl '>Packaging Design</h1></div>
            <div className='absolute inset-0 flex items-center justify-center lg:my-0 my-6'><h1 className='text-2xl'>Typography and Layout Design</h1></div>
            <div className='absolute lg:top-[-5rem] top-[-9rem] right-[2rem] inset-0 flex items-center justify-end lg:my-0 my-6'><h1 className='text-2xl'>Video Production and Editing</h1></div>
        </div>
    </section>
  )
}
