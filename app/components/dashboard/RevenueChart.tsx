'use client';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
  Legend
);

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
const mrrValues = [45000, 52000, 58000, 61000, 67000, 72000];

const data = {
  labels: months,
  datasets: [
    {
      label: 'MRR',
      data: mrrValues,
      fill: true,
      backgroundColor: 'rgba(37, 99, 235, 0.08)',
      borderColor: 'rgba(37, 99, 235, 1)',
      tension: 0.4,
      pointRadius: 4,
    },
  ],
};

const options = {
  responsive: true,
  scales: {
    y: {
      ticks: {
        callback: (value: number | string) =>
          typeof value === 'number' ? `$${(value / 1000).toFixed(0)}k` : value,
      },
      grid: {
        color: 'rgba(148, 163, 184, 0.2)',
      },
    },
    x: {
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: (context: { parsed: { y: number } }) =>
          `MRR: $${context.parsed.y.toLocaleString()}`,
      },
    },
  },
};

export function RevenueChart() {
  return <Line data={data} options={options} />;
}
