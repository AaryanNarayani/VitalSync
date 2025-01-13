import { useState } from 'react'
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

const devices = [
  { id: 'smartwatch', label: 'Smartwatch' },
  { id: 'app', label: 'Mobile App' },
  { id: 'ring', label: 'Smart Ring' },
]

export default function DeviceSelection() {
  const [selectedDevices, setSelectedDevices] = useState<string[]>([])

  const handleDeviceChange = (deviceId: string) => {
    setSelectedDevices(prev => 
      prev.includes(deviceId) 
        ? prev.filter(id => id !== deviceId)
        : [...prev, deviceId]
    )
  }

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Select Devices</h2>
      <div className="space-y-2">
        {devices.map((device) => (
          <div key={device.id} className="flex items-center">
            <Checkbox
              id={device.id}
              checked={selectedDevices.includes(device.id)}
              onCheckedChange={() => handleDeviceChange(device.id)}
            />
            <Label htmlFor={device.id} className="ml-2">
              {device.label}
            </Label>
          </div>
        ))}
      </div>
    </div>
  )
}

