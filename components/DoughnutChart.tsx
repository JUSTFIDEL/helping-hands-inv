'use client'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  const data = {
    datasets: [
      {
        label: 'Investments',
        data: [10000, 12500, 3750],
        backgroundColor: ['#0747b6', '#2265d8', '#2f91fa'],
      },
    ],
    labels: ['Inv-1', 'Inv-2', 'Inv-3'],
  }

  return (
    <Doughnut
      data={data}
      options={{ cutout: '60%', plugins: { legend: { display: false } } }}
    />
  )
}

export default DoughnutChart
