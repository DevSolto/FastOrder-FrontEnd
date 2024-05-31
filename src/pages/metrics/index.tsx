import { UniqueMetrics } from './components/uniqueMetrics'
import { Graphics } from './components/graphics'

export function Metrics() {
  return (
    <div className=" p-5 m-2 h-full flex-1 flex flex-col gap-5">
      <UniqueMetrics />
      <Graphics />
    </div>
  )
}
