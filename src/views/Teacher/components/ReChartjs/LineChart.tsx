import { LineChart, Line, CartesianGrid, XAxis, Tooltip } from 'recharts';

type ChartData = {
    name: string;
    uv: number;
    pv: number;
    amt: number;
};
type RenderLineChartProps = {
    data1: ChartData[];
    data2: ChartData[];
    width?: number;
    height?: number;
};
export const RenderLineChart = ({
    data1,
    data2,
    width = 400,
    height = 200,
}: RenderLineChartProps) => {
    return (
        <LineChart
            width={width}
            height={height}
            data={data1}
            margin={{ right: 8, left: 8, top: 10 }}
        >
            <Line
                type="linear"
                dataKey="uv"
                stroke="#8884d8"
                strokeWidth={3}
                dot={false}
            />

            <Line
                type="linear"
                dataKey="uv"
                stroke="#E6E8EC"
                strokeWidth={3}
                dot={false}
                data={data2}
            />

            <CartesianGrid
                stroke="#ccc"
                strokeDasharray="3 6"
                vertical={false}
            />
            <XAxis
                domain={['auto', 'auto']}
                interval={0}
                dataKey="name"
                axisLine={{ stroke: '#E2E7E7', strokeWidth: 1 }}
                tickLine={{
                    display: 'none',
                }}
                tick={({ x, y, payload }) => (
                    <text
                        x={x}
                        y={y + 10}
                        textAnchor="middle"
                        fill="#737B8B"
                        fontSize="11px"
                        fontFamily="Poppins, sans-serif"
                        fontWeight="500"
                    >
                        {payload.value}
                    </text>
                )}
            />
            <Tooltip />
        </LineChart>
    );
};
