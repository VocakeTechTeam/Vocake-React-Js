// BarChart.tsx

import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
} from 'chart.js';

// Register chart elements
ChartJS.register(
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
);

interface BarChartProps {
    data: number[];
    labels: string[];
    title?: string;
}

const BarChart: React.FC<BarChartProps> = ({ data, labels, title }) => {
    const chartData = {
        labels: labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: data,
                backgroundColor: '#5A6ACF',
                barThickness: 20,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display:false
            },
            tooltip: {
                callbacks: {
                    label: (context: any) => {
                        return `${context.dataset.label}: ${context.raw}`;
                    },
                },
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Categories',
                },
                grid: {
                    display: false,
                },
                
            },
            y: {
                display: false, // Hide the Y-axis line and labels
                grid: {
                    display: true, // **Show the Y-axis grid lines**
                    color: 'rgba(0,0,0,0.1)', // Optional: change the grid line color
                },
            },
        },
    };

    return (
        <div style={{height:"100%"}}>
            <Bar data={chartData} options={options} />
        </div>
    );
};

export default BarChart;
