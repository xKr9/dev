import React from 'react'

interface Props {
    text: String,
    classNames?: String
}

const Button = ( { text, classNames }: Props) => {
  return (
    <button className={`${classNames}`}>{text}</button>
  )
}

export default Button