import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface SimulationActivityProps {
  name: string
  effects: {
    heartRate: number
    calories: number
    hydration: number
    spo2?: number
    steps?: number
    sleepCycle?: number
    bp?: string
    weather?: string
  }
  devices: string[]
  onStart: () => void
}

export default function SimulationActivity({ name, effects, devices, onStart }: SimulationActivityProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="bg-card-background rounded-lg shadow-lg p-6 cursor-pointer bg-white"
      whileHover={{ scale: 1.05 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <h3 className="text-xl font-semibold mb-4 text-primary">{name}</h3>
      {isHovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-sm text-graytext mb-4"
        >
          <p>Heart Rate: {effects.heartRate > 0 ? '+' : ''}{effects.heartRate} bpm</p>
          <p>Calories: {effects.calories > 0 ? '+' : ''}{effects.calories}</p>
          <p>Hydration: {effects.hydration} ml</p>
          {effects.spo2 && <p>SpO2: {effects.spo2 > 0 ? '+' : ''}{effects.spo2}%</p>}
          {effects.steps && <p>Steps: +{effects.steps}</p>}
          {effects.sleepCycle && <p>Sleep Cycle: +{effects.sleepCycle} hours</p>}
          {effects.bp && <p>Blood Pressure: {effects.bp}</p>}
          {effects.weather && <p>Weather: {effects.weather}</p>}
        </motion.div>
      )}
      <div className="flex flex-wrap gap-2 mb-4">
        {devices.map((device) => (
          <span key={device} className="bg-secondary text-primary text-xs font-semibold px-2.5 py-0.5 rounded">
            {device}
          </span>
        ))}
      </div>
      <Button onClick={onStart} className="w-full bg-gradient-to-r from-[--primary] to-[--secondary] hover:bg-primary-dark text-black">
        Start Simulation
      </Button>
    </motion.div>
  )
}

