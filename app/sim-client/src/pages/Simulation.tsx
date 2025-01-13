import SimulationControl from '@/components/SimulationControl'

export default function Simulation() {
  return (
    <div className="min-h-screen bg-primary-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-primary text-center mb-12">Simulation Hub</h1>
        <div className="bg-[--bot-chat] rounded-lg shadow-xl p-6 md:p-8">
          <SimulationControl />
        </div>
      </div>
    </div>
  )
}
