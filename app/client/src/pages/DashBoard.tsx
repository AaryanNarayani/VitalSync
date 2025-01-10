
import CaloriesCard from '../components/cards/(essentials)/CaloriesCard'
import StepsCard from '../components/cards/(essentials)/StepsCard'
import O2LevelCard from '../components/cards/(essentials)/O2LevelCard'
import HydrationCard from '../components/cards/(essentials)/HydrationCard'
import WeightCard from '../components/cards/(vitalstats)/WeightCard'
import HeightCard from '../components/cards/(vitalstats)/HeightCard'
import BloodPressureCard from '../components/cards/(vitalstats)/BloodPressureCard'
import BMICard from '../components/cards/(vitalstats)/BMICard'
import SunnyCard from '../components/cards/(weather)/SunnyCard'
import CloudyCard from '../components/cards/(weather)/CloudyCard'
import AirQualityCard from '../components/cards/(weather)/AirQualityCard'
import UVcard from '../components/cards/(weather)/UVcard'

function DashBoard() {
  return (
    <div className='h-[120vh] w-[120vw] p-10 flex  gap-5 bg-[#F2F2F2]' >
         <div>
         <div className='flex gap-6'>
            <CaloriesCard/>
            <HydrationCard/>
         </div>
         <div className='flex gap-6 items-center'>
            <StepsCard/>
            <O2LevelCard/>
         </div>
         </div>

         <div className='flex flex-col gap-5'>
         <div className='flex gap-6'>
           <WeightCard/>
           <HeightCard/>
         </div>
         <div className='flex gap-6 items-center'>
            <BloodPressureCard/>
            <BMICard/>
         </div>
         </div>

         <div className='flex flex-col gap-5'>
         <div className='flex gap-6'>
            <SunnyCard/>
            <CloudyCard/>
            <div className='flex flex-col gap-3'>
               <AirQualityCard/>
               <UVcard/>
            </div>
         </div>
         </div>

    </div>
  )
}

export default DashBoard