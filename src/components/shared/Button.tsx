import React from 'react'

interface Props {
    text: String
}

const Button = ( { text }: Props) => {
  return (
    <button className='pulse-btn border py-2 rounded-lg max-w-[200px] border-red-crimson'>{text}</button>
  )
}

export default Button