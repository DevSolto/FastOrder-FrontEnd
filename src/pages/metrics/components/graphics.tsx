import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import BarChart from './barChart'
import { Legend } from './legend'
import PieChart from './pieChart'

export function Graphics() {
  return (
    <div className="grid gap-5 w-full justify-between grid-cols-12">
      <Card className="col-span-4">
        <CardHeader>
          <CardTitle className="text-lg font-bold text-sky-950">
            Media de pedidos
          </CardTitle>
          <CardDescription>por dia da semana</CardDescription>
        </CardHeader>
        <BarChart
          data={['55', '45', '30', '40', '50', '40', '20']}
          headers={['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom']}
        />
      </Card>
      <Card className="col-span-3">
        <CardHeader>
          <CardTitle className="text-lg font-bold text-sky-950">
            Media de pedidos diários
          </CardTitle>
          <CardDescription>Por tipo</CardDescription>
        </CardHeader>
        <BarChart data={['26', '35']} headers={['Doces', 'Salgados']} />
      </Card>
      <Card className="col-span-5 flex flex-col">
        <CardHeader>
          <CardTitle className="text-lg font-bold text-sky-950">
            Quantidade de pedidos
          </CardTitle>
          <CardDescription>por dia da semana</CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-between flex-1 pl-0 overflow-visible">
          <PieChart />
          <Legend />
        </CardContent>
      </Card>
    </div>
  )
}
