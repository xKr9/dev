import React from 'react'
import Button from '../components/shared/Button'

export default function Home() {
  return (
    <div className="flex items-center justify-center h-full">
        <div className="text-left flex flex-col gap-y-2">
            <h1 className='font-bold text-4xl'>Hey, I'm Dom!</h1>
            <h2 className='text-sm'>Software Engineer looking to build cool shit</h2>
            <h3 className='text-xs'>Read more <span>about me </span> or get in <span>contact</span></h3>
            <Button text={'hey'}></Button>
        </div>
    </div>
  )
}
