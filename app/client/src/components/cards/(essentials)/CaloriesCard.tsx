import { Flame } from "lucide-react"

function CaloriesCard() {

  const calories = 856;



  return (
    <div className="h-[120px] w-[120px] bg-[--secondary] flex flex-col p-3 gap-2 relative overflow-hidden rounded-tl-xl rounded-tr-xl rounded-bl-xl">
      <div className="flex items-end gap-1">
        <img src="/icons/Calorie.svg" alt="cal" className="scale-[0.7]"/>
        <h1 className="text-[15px]">Calories</h1>
      </div>
      <h1 className="text-[10px]"><span className="text-[18px]">{calories}</span>  Kcal</h1>
      <h1 className="text-[13px]">Today</h1>
      <div className="absolute h-[80px] w-[80px] bg-white rounded-full left-[60px] top-[60px]"></div>
    </div>
  )
}

export default CaloriesCard