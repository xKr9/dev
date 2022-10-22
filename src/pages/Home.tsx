import React from 'react'
import Underline from '../components/Underline'
import PageTransition from '../components/Transitions/PageTransition'
import { Link } from 'react-router-dom'
import developerSVG from '../assets/images/developer.svg'
import waveSVG from '../assets/images/wave.svg'

export default function Home() {
  return (
    <div className="w-full">
    <div className="max-w-fit">
        <h1 className='lg:text-5xl text-4xl  text-left font-bold mb-5'>Hello there 👋 </h1>
        <h2 className='lg:text-3xl text-2xl text-left font-bold'></h2>
        <Underline />
    </div>
  <PageTransition>
    <div className="mt-40 flex justify-center mx-auto text-left flex-col max-w-[1280px] items-center gap-y-5">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center">
        <div className="flex flex-col gap-y-5">
          <h2 className='font-bold text-6xl'>
            I'm Dom
          </h2>
          <h3 className=''>Software engineer looking to build cool stuff!</h3>
          <h3>Check out my projects 👉 <Link className='text-primary font-bold underline' to={'/dev/projects'}>here</Link></h3>
        </div>
        <img src={developerSVG} className='w-1/2 h-1/4' alt="" />
      </div>
    </div>
  </PageTransition>
</div>
  )
}
