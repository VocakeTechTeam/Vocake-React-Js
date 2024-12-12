import { Box } from '@mui/material';
import BearIcon from '../../../assets/icon/BearIcon';
import { v4 as uuidv4 } from 'uuid';
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
            id: uuidv4(),
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
        id: '6ae84f04-053c-48ef-9e9f-13658e054bcb',
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
        id: '1ce1697f-1f80-438c-ae0f-086ebfab103e',
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
        id: 'a8c78ed6-507f-42f0-90f8-94c9a0002310',
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
        id: 'dd87fcbb-39a7-42e3-866f-494c80b43bc9',
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

export const doughNutData1 = [
    { name: 'Mastery', value: 400 },
    { name: 'Active', value: 300 },
    { name: 'Passive', value: 300 },
];

export const doughNutData2 = [
    { name: 'Education', value: 400 },
    { name: 'Travel', value: 300 },
    { name: 'Government', value: 300 },
    { name: 'Profession', value: 300 },
    { name: 'Daily life', value: 300 },
    { name: 'Conversation', value: 300 },
    { name: 'Others', value: 300 },
];
export const COLORS1 = ['#5A6ACF', '#8593ED', '#C7CEFF'];
export const COLORS2 = [
    '#9F00AD',
    '#7963CD',
    '#EE0B0B',
    '#63CD81',
    '#FF8F78',
    '#5BC7E6',
    '#51546F',
];
