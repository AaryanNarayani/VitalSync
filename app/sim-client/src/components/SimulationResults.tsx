import { motion } from "framer-motion"

interface SimulationResultsProps {
  results: {
    heartRate: number;
    calories: number;
    hydration: number;
    spo2: number;
    steps: number;
    sleepCycle: number;
    bp: string;
    weather: string;
  }
}

export default function SimulationResults({ results }: SimulationResultsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-secondary-background p-6 rounded-lg shadow-lg"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <p className="text-sm text-graytext">Heart Rate</p>
          <p className="text-lg font-semibold text-primary">{results.heartRate} bpm</p>
        </div>
        <div>
          <p className="text-sm text-graytext">Calories Burned</p>
          <p className="text-lg font-semibold text-primary">{results.calories} kcal</p>
        </div>
        <div>
          <p className="text-sm text-graytext">Hydration Level</p>
          <p className="text-lg font-semibold text-primary">{results.hydration.toFixed(1)} ml</p>
        </div>
        <div>
          <p className="text-sm text-graytext">SpO2</p>
          <p className="text-lg font-semibold text-primary">{results.spo2}%</p>
        </div>
        <div>
          <p className="text-sm text-graytext">Steps</p>
          <p className="text-lg font-semibold text-primary">{results.steps}</p>
        </div>
        <div>
          <p className="text-sm text-graytext">Sleep Cycle</p>
          <p className="text-lg font-semibold text-primary">{results.sleepCycle} hours</p>
        </div>
        <div>
          <p className="text-sm text-graytext">Blood Pressure</p>
          <p className="text-lg font-semibold text-primary">{results.bp}</p>
        </div>
        <div>
          <p className="text-sm text-graytext">Weather</p>
          <p className="text-lg font-semibold text-primary">{results.weather}</p>
        </div>
      </div>
    </motion.div>
  )
}

