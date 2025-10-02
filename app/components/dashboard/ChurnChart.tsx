'use client';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
const churnRates = [3.2, 2.8, 2.5, 2.9, 2.3, 2.1];

const data = {
  labels: months,
  datasets: [
    {
      label: 'Churn Rate',
      data: churnRates,
      backgroundColor: 'rgba(99, 102, 241, 0.6)',
      borderRadius: 8,
      maxBarThickness: 36,
    },
  ],
};

const options = {
  responsive: true,
  scales: {
    y: {
      ticks: {
        callback: (value: number | string) => `${value}%`,
      },
      grid: {
        color: 'rgba(148, 163, 184, 0.2)',
      },
      beginAtZero: true,
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
          `Churn Rate: ${context.parsed.y}%`,
      },
    },
  },
};

export function ChurnChart() {
  return <Bar data={data} options={options} />;
}
