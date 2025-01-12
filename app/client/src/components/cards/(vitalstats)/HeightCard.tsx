function HeightCard() {

  const height = "5'5"

  return (
    <div className="h-[100px] w-[100px] bg-[--ternary-background] relative overflow-hidden rounded-xl">
    <div className="h-[110px] w-[110px] bg-white absolute top-[-60px] left-[50px] rounded-full" />
    <div className="relative z-10 h-full w-full flex flex-col items-center p-5 pt-1 space-y-1">
      <h1 className="text-[15px]">Heigth</h1>
      <p className="text-[23px]">{height}</p>
      <h1 className="text-[18px]">Ft</h1>
    </div>
  </div>
  )
}

export default HeightCard