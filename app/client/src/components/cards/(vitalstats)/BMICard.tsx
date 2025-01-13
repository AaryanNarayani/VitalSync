function BMICard({data} : any) {

  // console.log(bmi)
  return (
    <div className="h-[120px] w-[120px] bg-[#E54335] relative overflow-hidden rounded-xl rounded-tl-none">
      <div className="h-[110px] w-[110px] bg-white absolute top-[-55px] left-[-55px] rounded-full" />
      <div className="relative z-10 h-full w-full flex flex-col items-center p-5 pt-3 space-y-1">
        <h1 className="text-[16px]">BMI</h1>
        <p className="text-[28px]">{data}</p>
      </div>
    </div>
  )
}

export default BMICard