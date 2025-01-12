import React from 'react'

function HeightCard() {

  const height = "5'5"

  return (
    <div className="h-[120px] w-[120px] bg-[--ternary-background] relative overflow-hidden rounded-xl">
    <div className="h-[110px] w-[110px] bg-white absolute top-[-50px] left-[55px] rounded-full" />
    <div className="relative z-10 h-full w-full flex flex-col items-center p-5 pt-3 space-y-1">
      <h1 className="text-[15px]">Heigth</h1>
      <p className="text-[30px]">{height}</p>
      <h1 className="text-[18px]">Ft</h1>
    </div>
  </div>
  )
}

export default HeightCard