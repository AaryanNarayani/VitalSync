import CaloriesCard from '../components/cards/(essentials)/CaloriesCard'
import StepsCard from '../components/cards/(essentials)/StepsCard'
import O2LevelCard from '../components/cards/(essentials)/O2LevelCard'
import HydrationCard from '../components/cards/(essentials)/HydrationCard'
import WeightCard from '../components/cards/(vitalstats)/WeightCard'
import HeightCard from '../components/cards/(vitalstats)/HeightCard'
import BloodPressureCard from '../components/cards/(vitalstats)/BloodPressureCard'
import BMICard from '../components/cards/(vitalstats)/BMICard'
import SunnyCard from '../components/cards/(weather)/SunnyCard'
import AirQualityCard from '../components/cards/(weather)/AirQualityCard'
import UVcard from '../components/cards/(weather)/UVcard'
import AIsuggestionCard from '../components/cards/(others)/AIsuggestionCard'
import { Activity, Brain, ChartPie, CloudMoon, MoonStar, Star } from 'lucide-react'


function DashBoard() {
  return (
    <div className='h-[100vh] w-[100vw] p-10 flex gap-5'>
      <div className='grid grid-cols-[1fr_1fr_1fr_1.3fr] grid-rows-[0.6fr_3fr_2fr] gap-5'>
         
         <h1 className='text-[45px] row-start-1 col-span-3'>Dashboard</h1>
         
         <div className='bg-[--card-background] p-4 pt-1 rounded-xl row-start-2'>
            <h1 className='text-[25px] w-full text-center p-3 flex gap-3 items-center justify-center'>Vital Stats<Activity size={20} /></h1>
            <div className='flex flex-wrap justify-center gap-x-6 gap-y-4  '>
               <WeightCard/>
               <HeightCard/>
               <BloodPressureCard/>
               <BMICard/>
            </div>
         </div>
   

         <div className='row-start-2 col-span-2 bg-[--card-background] p-4' >
            <h1 className='w-full text-[23px] text-center flex gap-3 items-center justify-center'>Analytics<ChartPie size={20} /></h1>
            
         </div>


         <div className='row-start-1 row-span-2 col-start-4 bg-[--card-background] p-4 rounded-xl'>
            <h1 className='text-[25px] w-full text-center p-3 pt-1 flex gap-3 items-center justify-center '>Essentials<Star size={20}/></h1>
            <div className='flex flex-wrap justify-center items-center gap-4 gap-x-11' >
               <CaloriesCard/>
               <HydrationCard/>
               <StepsCard/>
               <O2LevelCard/>
            </div>
         </div>

         <div className='bg-[--card-background] col-span-2 rounded-xl w-full text-center flex flex-col items-center p-4 pt-1 pl-6 relative'>
            <h1 className='text-[25px] p-3 flex gap-3 items-center justify-center'>AI Suggestion<Brain size={20} /></h1>
            <img src="/icons/Morph.svg" 
             alt=""
             className='absolute scale-[0.06] top-[-250px] left-[-300px]'/>
            <AIsuggestionCard/>
         </div>

         <div className='bg-[--card-background] rounded-xl'>
         <h1 className='text-[25px] w-full text-center p-3 flex gap-3 items-center justify-center'>Sleep<MoonStar size={20} /></h1>
         </div>

         <div className='bg-[--card-background] rounded-xl p-1 pl-6 pb-6'>
            <h1 className='text-[25px] w-full text-center p-1 flex gap-3 items-center justify-center'>Weather<CloudMoon size={20} /></h1>
            <div className='flex gap-3'>
            <SunnyCard/>
            <div className='flex flex-col gap-3'>
               <AirQualityCard/>
               <UVcard/>
            </div>
            </div>

         </div>

      </div>
    </div>
  )
}

export default DashBoard