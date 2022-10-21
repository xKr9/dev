import React from 'react'

interface Props{
    text: String
}

export default function Pill({text}:Props) {
  return (
    <div className='px-5 py-3 rounded-full min-w-[125px] max-w-fit text-center border'>
        {text}
    </div>
  )
}
