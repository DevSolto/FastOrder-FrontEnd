import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { IoReceipt } from 'react-icons/io5'
import { UniqueMetrics } from './components/uniqueMetrics'

export function Metrics() {
  return (
    <div className=" p-5 m-2 h-full flex-1">
      <UniqueMetrics/>
    </div>
  )
}
