import { Box } from '@mui/material';
import BearIcon from '../../../assets/icon/BearIcon';
export const lineChartData1 = [
    { name: '01', uv: 300, pv: 2400, amt: 2400 },
    { name: '02', uv: 300, pv: 2400, amt: 2400 },
    { name: '03', uv: 100, pv: 2400, amt: 2400 },
    { name: '04', uv: 600, pv: 2400, amt: 2400 },
    { name: '05', uv: 700, pv: 2400, amt: 2400 },
    { name: '06', uv: 60, pv: 2400, amt: 2400 },
];

export const lineChartData2 = [
    { name: '01', uv: 400, pv: 1800, amt: 1800 },
    { name: '02', uv: 600, pv: 2100, amt: 2100 },
    { name: '03', uv: 700, pv: 2300, amt: 2300 },
    { name: '04', uv: 200, pv: 2200, amt: 2200 },
    { name: '05', uv: 350, pv: 2500, amt: 2500 },
    { name: '06', uv: 80, pv: 2000, amt: 2000 },
];

const generateRandomLineChartData = () => {
    const data = [
        {
            name: '01',
            uv: Math.floor(Math.random() * 200),
            pv: Math.floor(Math.random() * 200),
            amt: Math.floor(Math.random() * 3000),
        },
        {
            name: '02',
            uv: Math.floor(Math.random() * 200),
            pv: Math.floor(Math.random() * 200),
            amt: Math.floor(Math.random() * 3000),
        },
        {
            name: '03',
            uv: Math.floor(Math.random() * 200),
            pv: Math.floor(Math.random() * 200),
            amt: Math.floor(Math.random() * 3000),
        },
        {
            name: '04',
            uv: Math.floor(Math.random() * 200),
            pv: Math.floor(Math.random() * 401),
            amt: Math.floor(Math.random() * 3000),
        },
        {
            name: '05',
            uv: Math.floor(Math.random() * 200),
            pv: Math.floor(Math.random() * 401),
            amt: Math.floor(Math.random() * 3000),
        },
        {
            name: '06',
            uv: Math.floor(Math.random() * 200),
            pv: Math.floor(Math.random() * 401),
            amt: Math.floor(Math.random() * 3000),
        },
    ];

    return data;
};

export const StudentList = [
    {
        name: 'Ngo The Anh',
        icon: (
            <Box
                sx={{
                    height: '30px',
                    width: '30px',
                    borderRadius: '25px',
                    background: '#F4B3B4',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <BearIcon width="18px" height="18px" />
            </Box>
        ),
        chartData1: generateRandomLineChartData(), // Data from "This Week"
        chartData2: generateRandomLineChartData(), // Data from "Last Week"
    },
    {
        name: 'An Khue',
        icon: (
            <Box
                sx={{
                    height: '30px',
                    width: '30px',
                    borderRadius: '25px',
                    background: '#FFF582',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <BearIcon width="18px" height="18px" />
            </Box>
        ),
        chartData1: generateRandomLineChartData(), // Data from "This Week"
        chartData2: generateRandomLineChartData(), // Data from "Last Week"
    },
    {
        name: 'Ngo Truong',
        icon: (
            <Box
                sx={{
                    height: '30px',
                    width: '30px',
                    borderRadius: '25px',
                    background: '#A0DAF6',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <BearIcon width="18px" height="18px" />
            </Box>
        ),
        chartData1: generateRandomLineChartData(), // Data from "This Week"
        chartData2: generateRandomLineChartData(), // Data from "Last Week"
    },
    {
        name: 'Minh Truong',
        icon: (
            <Box
                sx={{
                    height: '30px',
                    width: '30px',
                    borderRadius: '25px',
                    background: '#ACCE22',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <BearIcon width="18px" height="18px" />
            </Box>
        ),
        chartData1: generateRandomLineChartData(), // Data from "This Week"
        chartData2: generateRandomLineChartData(), // Data from "Last Week"
    },
];

export const barChartData1 = [
    { name: '01', uv: 300, pv: 2400, amt: 2400 },
    { name: '02', uv: 300, pv: 2400, amt: 2400 },
    { name: '03', uv: 100, pv: 2400, amt: 2400 },
    { name: '04', uv: 600, pv: 2400, amt: 2400 },
    { name: '05', uv: 700, pv: 2400, amt: 2400 },
    { name: '06', uv: 60, pv: 2400, amt: 2400 },
];

export const barChartData2 = [
    { name: '01', uv: 150, pv: 1800, amt: 1800 },
    { name: '02', uv: 200, pv: 2100, amt: 2100 },
    { name: '03', uv: 50, pv: 2300, amt: 2300 },
    { name: '04', uv: 550, pv: 2200, amt: 2200 },
    { name: '05', uv: 650, pv: 2500, amt: 2500 },
    { name: '06', uv: 80, pv: 2000, amt: 2000 },
];

export const doughNutData = [
    { name: 'Mastery', value: 400 },
    { name: 'Active', value: 300 },
    { name: 'Passive', value: 300 },
];
