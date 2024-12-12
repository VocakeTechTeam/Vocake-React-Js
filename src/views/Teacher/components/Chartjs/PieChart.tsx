// PieChart.tsx

import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    CategoryScale,
    LinearScale,
} from 'chart.js';

// Register chart elements
ChartJS.register(
    Title,
    Tooltip,
    Legend,
    ArcElement,
    CategoryScale,
    LinearScale,
);

interface PieChartProps {
    data: number[];
    labels: string[];
    title?: string;
}

const PieChart: React.FC<PieChartProps> = ({ data, labels, title }) => {
    // Chart.js data object
    const chartData = {
        labels: labels, // Labels for each slice of the pie
        datasets: [
            {
                data: data, // The data for each slice
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'], // Colors for each slice
                hoverBackgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#4BC0C0',
                ], // Colors on hover
            },
        ],
    };

    // Options for the Pie chart (optional)
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const, // 'top' | 'left' | 'bottom' | 'right'
            },
            tooltip: {
                callbacks: {
                    label: (context: any) => {
                        const value = context.raw;
                        const percentage = (
                            (value / data.reduce((a, b) => a + b, 0)) *
                            100
                        ).toFixed(2);
                        return `${context.label}: ${value} (${percentage}%)`;
                    },
                },
            },
        },
    };

    return (
        <div>
            <Pie data={chartData} options={options} />
        </div>
    );
};

export default PieChart;
