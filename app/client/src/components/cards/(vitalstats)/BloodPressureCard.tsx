function BloodPressureCard({bp} : any ) {

  return (
    <div className="h-[120px] w-[120px] bg-[--secondary] relative overflow-hidden rounded-xl">
    <div className="h-[110px] w-[110px] bg-white absolute top-[50px] left-[-60px] rounded-full" />
    <div className="relative z-10 h-full w-full flex flex-col items-center justify-start space-y-1 py-3 px-5 text-center gap-0">
      <h1 className="text-[16px]">BP</h1>
      <p className="text-[28px] ">{bp}</p>
    </div>
  </div>
  )
}

export default BloodPressureCard