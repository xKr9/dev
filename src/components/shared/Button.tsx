import React from 'react'

interface Props {
    text: String
}

const Button = ( { text }: Props) => {
  return (
    <button className='pulse-btn border text-xs py-3 rounded-lg min-w-[200px] w-1/2 border-red-crimson'>{text}</button>
  )
}

export default Button