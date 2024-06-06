import { UniqueMetrics } from './components/uniqueMetrics'
import { Graphics } from './components/graphics'

export function Metrics() {
  return (
    <div className="bg-white/20 backdrop-blur-md p-5 m-2 h-full flex-1 flex flex-col gap-5 rounded-3xl">
      <header className="flex items-center justify-between py-3">
        <h1 className="text-white">Metricas</h1>
      </header>
      <UniqueMetrics />
      <Graphics />
    </div>
  )
}
