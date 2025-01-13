function CaloriesCard({data} : any) {

  return (
    <div className="h-[140px] w-[140px] bg-[--secondary] flex flex-col p-3 gap-2 relative overflow-hidden rounded-tl-xl rounded-tr-xl rounded-bl-xl">
      <div className="flex items-end gap-1">
        <img src="/icons/Calorie.svg" alt="cal" className="scale-[0.7]"/>
        <h1 className="text-[18px]">Calories</h1>
      </div>
      <h1 className="text-[15px]"><span className="text-[25px]">{data}</span>  Kcal</h1>
      <h1 className="text-[15px]">Today</h1>
      <div className="absolute h-[120px] w-[120px] bg-white rounded-full left-[70px] top-[70px]"></div>
    </div>
  )
}

export default CaloriesCard