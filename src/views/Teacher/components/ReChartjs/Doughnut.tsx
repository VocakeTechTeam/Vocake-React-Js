import React from 'react';
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

type ChartData = {
    name: string;
    value: number;
};

type RenderDoughnutChartProps = {
    data: ChartData[];
};
export const RenderDoughnutChart = ({ data }: RenderDoughnutChartProps) => {
    const COLORS = ['#5A6ACF', '#8593ED', '#C7CEFF'];

    return (
        <ResponsiveContainer width="100%" height={300}>
            <PieChart>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    stroke="#fff"
                    strokeWidth={3}
                >
                    {/* Custom colors for each segment */}
                    {data?.map((entry, index) => (
                        <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                        />
                    ))}
                </Pie>
                <Tooltip />
                <Legend iconType="circle" />
            </PieChart>
        </ResponsiveContainer>
    );
};
