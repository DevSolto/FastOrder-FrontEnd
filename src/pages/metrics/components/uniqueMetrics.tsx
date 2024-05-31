import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { IoAlarm, IoBug, IoReceipt, IoTimeSharp } from 'react-icons/io5'

export function UniqueMetrics() {
  const metrics = [
    {
      title: 'Media de pedidos diários',
      value: '26',
      PercentageValue: '+55%',
      icon: IoReceipt,
      good: true
    },
    {
      title: 'Tempo médio de processamento',
      value: '09:30',
      PercentageValue: '-15%',
      icon: IoTimeSharp,
      good: true
    },
    {
      title: 'Taxa de erros',
      value: '5%',
      PercentageValue: '-55%',
      icon: IoBug,
      good: true
    },
    {
      title: 'Taxa de atraso',
      value: '15%',
      PercentageValue: '+55%',
      icon: IoAlarm,
      good: false
    }
  ]
  return (
    <div className="flex w-full items-center justify-between gap-5">
      {metrics.map((metric, index) => (
        <Card key={index} className='flex items-center justify-between w-full px-5 py-4'>
          <div className='flex flex-col gap-3'>
            <CardHeader className='p-0'>
              <CardTitle >{metric.title}</CardTitle>
            </CardHeader>
            <CardContent className='p-0'>
              <p className='font-bold text-xl flex items-center gap-1'>
                {metric.value} 
                {
                    metric.good ? (
                        <span className='text-base text-green-500'>{metric.PercentageValue}</span>
                    ):(
                        <span className='text-base text-red-500'>{metric.PercentageValue}</span>
                    )
                }
              </p>
            </CardContent>
          </div>
          <div className='bg-sky-950 text-white p-2 rounded-lg'>
            <metric.icon />
          </div>
        </Card>
      ))}
    </div>
  )
}
