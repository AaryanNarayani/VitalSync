function CaloriesCard() {
  
  const calories = 856;

  return (
    <div className="h-[160px] w-[160px] bg-[--secondary] flex flex-col p-3 gap-2 relative overflow-hidden rounded-tl-xl rounded-tr-xl rounded-bl-xl">
      <div className="flex items-end gap-1">
        <img src="/icons/Calorie.svg" alt="cal" className="scale-[0.7]"/>
        <h1 className="text-[20px]">Calories</h1>
      </div>
      <h1 className="text-[18px]"><span className="text-[28px]">{calories}</span>  Kcal</h1>
      <h1 className="text-[18px]">Today</h1>
      <div className="absolute h-[120px] w-[120px] bg-white rounded-full left-[80px] top-[80px]"></div>
    </div>
  )
}

export default CaloriesCard