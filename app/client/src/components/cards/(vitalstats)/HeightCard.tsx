function HeightCard({height} : any) {

  return (
    <div className="h-[120px] w-[120px] bg-[--ternary-background] relative overflow-hidden rounded-xl">
    <div className="h-[110px] w-[110px] bg-white absolute top-[-60px] left-[50px] rounded-full" />
    <div className="relative z-10 h-full w-full flex flex-col items-center justify-between line-clamp-1 p-3 space-y-1">
      <h1 className="text-[16px]">Heigth</h1> 
      <p className="text-[28px]">{height}</p>
      <h1 className="text-[18px]">cm</h1>
    </div>
  </div>
  )
}

export default HeightCard