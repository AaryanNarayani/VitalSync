function BMICard() {

  const BMI = 22.4;

  return (
    <div className="h-[100px] w-[100px] bg-[#E54335] relative overflow-hidden rounded-xl rounded-tl-none">
      <div className="h-[110px] w-[110px] bg-white absolute top-[-55px] left-[-55px] rounded-full" />
      <div className="relative z-10 h-full w-full flex flex-col items-center p-5 pt-3 space-y-1">
        <h1 className="text-[15px]">BMI</h1>
        <p className="text-[20px]">{BMI}</p>
   
      </div>
    </div>
  )
}

export default BMICard