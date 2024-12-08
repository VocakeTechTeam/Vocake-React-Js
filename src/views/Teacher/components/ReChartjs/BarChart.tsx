import {
    BarChart,
    Bar,
    CartesianGrid,
    XAxis,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

// Define the shape of each data item
type ChartData = {
    name: string;
    uv: number;
    pv: number;
    amt: number;
};

// Define the component props type
type RenderBarChartProps = {
    data1: ChartData[]; // Data for the first bar (e.g. 'This week')
    data2: ChartData[]; // Data for the second bar (e.g. 'Last week')
};

export const RenderBarChart = ({ data1, data2 }: RenderBarChartProps) => {
    return (
        <ResponsiveContainer width="100%" height={'90%'}>
            <BarChart
                data={data1}
                margin={{ top: 10, right: 20, bottom: 10, left: 20 }}
            >
                <CartesianGrid
                    stroke="#ccc"
                    strokeDasharray="3 6"
                    vertical={false}
                />{' '}
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
                <Legend iconType="circle" iconSize={10} />
                {/* Bar for 'uv' from data1 */}
                <Bar
                    dataKey="uv"
                    fill="#5A6ACF"
                    barSize={20}
                    name="This week"
                />
                {/* Bar for 'uv' from data2 */}
                <Bar
                    dataKey="uv"
                    fill="#E6E8EC"
                    barSize={20}
                    data={data2}
                    name="Last Week"
                />
            </BarChart>
        </ResponsiveContainer>
    );
};
