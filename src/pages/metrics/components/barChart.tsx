import React from 'react'
import ReactECharts from 'echarts-for-react'
import { CardContent } from '@/components/ui/card'

interface BarChartProps {
  headers: string[]
  data: string[]
}

export function BarChart(barChartProps: BarChartProps) {
  const barWidth = barChartProps.data.length < 3 ? '10%' : '20%'
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: ''
      },
      backgroundColor: '#fff', // Cor de fundo do tooltip
      borderColor: '#fff', // Cor da borda do tooltip
      borderWidth: 1, // Largura da borda do tooltip
      textStyle: {
        color: 'rgb(8 47 73)', // Cor do texto do tooltip
        fontSize: 14 // Tamanho da fonte do texto do tooltip
      },
      formatter: '{b0}: {c0}' // Formatação do conteúdo do tooltip
    },
    grid: {
      left: '0%',
      right: '0%',
      bottom: '0%',
      top: '5%', // Adiciona margem superior igual às outras margens
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: barChartProps.headers,
      axisTick: {
        alignWithLabel: true,
        show: false // Remove os ticks do eixo X
      },
      axisLine: {
        show: false // Remove a linha do eixo X
      },
      axisLabel: {
        color: '#fff' // Cor dos rótulos do eixo X
      }
    },
    yAxis: {
      type: 'value',
      axisLine: {
        show: false // Remove a linha do eixo Y
      },
      axisTick: {
        show: false // Remove os ticks do eixo Y
      },
      axisLabel: {
        show: true,
        color: '#fff'
      },
      splitLine: {
        show: false // Remove as linhas de divisão
      }
    },
    series: [
      {
        name: 'Pedidos',
        type: 'bar',
        barWidth: barWidth, // Largura das barras
        data: barChartProps.data,
        itemStyle: {
          color: '#fff',
          barBorderRadius: [10, 10, 10, 10] // Arredondar os cantos superiores das barras
        }
      }
    ]
  }

  return (
    <CardContent className="bg-gradient-to-r from-sky-900 to-sky-950 p-5 rounded-3xl m-5 flex justify-center mt-0">
      <ReactECharts
        option={option}
        style={{ height: '200px', width: '100%' }}
      />
    </CardContent>
  )
}

export default BarChart
