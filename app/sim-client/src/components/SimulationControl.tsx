import { useState } from 'react'
import SimulationActivity from './SimulationActivity'
import SimulationResults from './SimulationResults'
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

const activities = [
  {
    name: "Quick Full Body Exercise",
    effects: {
      heartRate: 30,
      calories: 200,
      hydration: -50,
      spo2: 2,
      steps: 1000
    },
    devices: ["Smartwatch"]
  },
  {
    name: "Outdoor Run",
    effects: {
      heartRate: 40,
      calories: 300,
      hydration: -100,
      steps: 5000,
      weather: "Updates based on location"
    },
    devices: ["Smartwatch"]
  },
  {
    name: "Yoga Session",
    effects: {
      heartRate: 10,
      calories: 100,
      hydration: -30,
      sleepCycle: 1
    },
    devices: ["Smartwatch"]
  },
  {
    name: "Sleep Tracking Session",
    effects: {
      sleepCycle: 7,
      heartRate: -10,
      calories: 50,
      bp: "110/70"
    },
    devices: ["App"]
  },
  {
    name: "Hydration Reminder",
    effects: {
      hydration: 500,
      steps: 200
    },
    devices: ["App"]
  },
  {
    name: "Guided Meditation",
    effects: {
      heartRate: -15,
      spo2: 3,
      bp: "Stabilizes"
    },
    devices: ["App"]
  },
  {
    name: "Overnight Recovery Monitoring",
    effects: {
      heartRate: -20,
      spo2: 2,
      sleepCycle: 8,
      bp: "Stabilizes"
    },
    devices: ["Ring"]
  },
  {
    name: "Stress Test",
    effects: {
      heartRate: 50,
      calories: 100,
      spo2: -5,
      bp: "140/90"
    },
    devices: ["Ring"]
  },
  {
    name: "Daily Activity Summary",
    effects: {
      steps: 10000,
      calories: 2500,
      heartRate: 0
    },
    devices: ["Ring"]
  }
]

export default function SimulationControl() {
  const [isSimulating, setIsSimulating] = useState(false)
  const [simulationResults, setSimulationResults] = useState<any>(null)
  const [selectedActivity, setSelectedActivity] = useState(null)
  const [selectedDevices, setSelectedDevices] = useState<string[]>([])
  console.log(isSimulating);
  console.log(selectedActivity);
  const startSimulation = (activity:any) => {
    setSelectedActivity(activity)
    setIsSimulating(true)
    // Simulate data for 10 seconds
    let seconds = 0
    const interval = setInterval(() => {
      seconds++
      setSimulationResults({
        heartRate: Math.floor(Math.random() * (180 - 60) + 60) + activity.effects.heartRate,
        calories: Math.floor(Math.random() * 10) + seconds * 2 + activity.effects.calories,
        hydration: Math.max(100 - seconds * 0.5 + (activity.effects.hydration || 0), 0),
        spo2: Math.min(Math.floor(Math.random() * (100 - 95) + 95) + (activity.effects.spo2 || 0), 100),
        steps: (activity.effects.steps || 0) + seconds * 20,
        sleepCycle: activity.effects.sleepCycle || 0,
        bp: activity.effects.bp || "Normal",
        weather: activity.effects.weather || "N/A"
      })
      if (seconds >= 10) {
        clearInterval(interval)
        setIsSimulating(false)
      }
    }, 1000)
  }

  const handleDeviceChange = (device: string) => {
    setSelectedDevices(prev => 
      prev.includes(device) 
        ? prev.filter(d => d !== device)
        : [...prev, device]
    )
  }

  const filteredActivities = activities.filter(activity => 
    selectedDevices.length === 0 || activity.devices.some(device => selectedDevices.includes(device))
  )

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-2xl font-bold mb-4 text-primary">Activity Summary</h2>
        {simulationResults ? (
          <SimulationResults results={simulationResults} />
        ) : (
          <p className="text-graytext">Start a simulation to see your activity summary.</p>
        )}
      </div>

      <div className="bg-secondary-background p-6 rounded-lg shadow-lg mb-6 bg-white">
        {/* <h2 className="text-2xl font-bold mb-4 text-primary">Choose Your Devices</h2> */}
        <div className="flex space-x-4">
          {["Smartwatch", "App", "Ring"].map((device) => (
            <div key={device} className="flex items-center bg-white">
              <button
                onClick={() => handleDeviceChange(device)}
                className={`border py-2 px-4 rounded-lg transition-all duration-200 ${
                  selectedDevices.includes(device)
                    ? device === "Smartwatch" || "App" || "Ring"
                      ? "bg-gradient-to-r from-[--primary] to-[--secondary] "
                      : "bg-gray-100 border-gray-500 text-gray-700"
                    : "bg-white text-gray-600 hover:bg-gray-50"
                }`}
              >
                {device}
              </button>
            </div>
          ))}
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4 text-primary">Choose Your Simulation</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredActivities.map((activity) => (
          <SimulationActivity
            key={activity.name}
            name={activity.name}
            effects={activity.effects as any}
            devices={activity.devices}
            onStart={() => startSimulation(activity)}
          />
        ))}
      </div>
    </div>
  )
}

