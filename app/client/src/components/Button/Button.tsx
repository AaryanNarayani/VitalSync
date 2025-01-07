import React from 'react'

const Button = ({children}:any) => {
  return (
    <button className=" py-2 w-[80%] mx-auto rounded-xl px-2 text-lg bg-gradient-to-r from-[--secondary] to-[--primary] text-black transition duration-300 ease-in-out hover:brightness-90" >{children}</button>
  )
}

export default Button