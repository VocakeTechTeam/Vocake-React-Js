import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
);

const LineChart = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'], // X-axis labels
        datasets: [
            {
                label: 'Sales in 2024',
                data: [65, 59, 80, 81, 56, 55], // Data points
                fill: false,
                borderColor: 'rgba(75,192,192,1)', // Line color
                tension: 0.1, // Smoothness of the line
            },
        ],
    };

    // Chart options
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const, // Correct type for 'position'
                display: false,
            },
            tooltip: {
                callbacks: {
                    label: (tooltipItem: any) => {
                        return `$${tooltipItem.raw}`; // Format tooltip
                    },
                },
            },
        },
        scales: {
            x: {
                beginAtZero: true,
                display: false,
            },
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div>
            <Line data={data} options={options} />
        </div>
    );
};

export default LineChart;
