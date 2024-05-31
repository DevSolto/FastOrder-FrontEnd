import React from 'react'
import ReactECharts from 'echarts-for-react'

export function PieChart() {
  const option = {
    tooltip: {
      trigger: 'item', // Tooltip ativado ao passar o mouse sobre o item
      backgroundColor: '#fff', // Cor de fundo do tooltip
      borderColor: '#fff', // Cor da borda do tooltip
      borderWidth: 1, // Largura da borda do tooltip
      textStyle: {
        color: 'rgb(8 47 73)', // Cor do texto do tooltip
        fontSize: 14 // Tamanho da fonte do texto do tooltip
      },
      formatter: '{b}: {c} ({d}%)' // Formatação do conteúdo do tooltip
    },
    series: [
      {
        name: 'Pedidos',
        type: 'pie',
        radius: '90%', // Raio do gráfico de pizza
        data: [
          {
            value: 10,
            name: 'Solicitado',
            itemStyle: { color: 'rgb(100 116 139)' },
            emphasis: { itemStyle: { color: 'rgb(100 116 139)' } }
          },
          {
            value: 2,
            name: 'Cancelado',
            itemStyle: { color: 'rgb(239 68 68)' },
            emphasis: { itemStyle: { color: 'rgb(239 68 68)' } }
          },
          {
            value: 6,
            name: 'Em processamento',
            itemStyle: { color: 'rgb(245 158 11)' },
            emphasis: { itemStyle: { color: 'rgb(245 158 11)' } }
          },
          {
            value: 2,
            name: 'Saiu para a entrega',
            itemStyle: { color: 'rgb(14 165 233)' },
            emphasis: { itemStyle: { color: 'rgb(14 165 233)' } }
          },
          {
            value: 14,
            name: 'Entregue',
            itemStyle: { color: 'rgb(34 197 94)' },
            emphasis: { itemStyle: { color: 'rgb(34 197 94)' } }
          }
        ],
        itemStyle: {
          borderRadius: 0, // Arredondar os cantos das fatias
          borderColor: '#fff', // Cor da borda das fatias
          borderWidth: 2 // Largura da borda das fatias
        },
        label: {
          show: false
        },
        emphasis: {
          scale: true, // Desativa o efeito de aumento
          itemStyle: {
            borderColor: '#fff',
            borderWidth: 2,
            shadowBlur: 0, // Remove o efeito de sombra ao passar o mouse
            shadowOffsetX: 0,
            shadowColor: 'transparent'
          }
        }
      }
    ]
  }

  return (
    <div className="w-3/5 h-full flex items-center">
      <ReactECharts
        className="overflow-visible"
        option={option}
        style={{ height: '200px', width: '100%' }}
      />
    </div>
  )
}

export default PieChart
