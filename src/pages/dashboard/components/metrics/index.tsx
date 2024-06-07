import { UniqueMetrics } from './components/uniqueMetrics'
import { Graphics } from './components/graphics'

export function Metrics() {
  return (
    <div className="gap-5 shadow-md bg-white p-5 m-2  flex-1 flex flex-col rounded-3xl h-full">
      <header className="flex items-center justify-between py-3">
        <h1 className="text-primary">Metricas</h1>
      </header>
      <UniqueMetrics />
      <Graphics />
    </div>
  )
}
