import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import { RenderLineChart } from './components/ReChartjs/LineChart';
import { COLORS2, doughNutData2, StudentList } from './constant/data';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { RenderDoughnutChart } from './components/ReChartjs/Doughnut';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import BearIcon from '../../assets/icon/BearIcon';
import Badge from '../../assets/icon/badge.svg';
import './styles.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import ReplyIcon from '@mui/icons-material/Reply';
import FacebookIcon from '@mui/icons-material/Facebook';
type TIMERANGE = '1 DAY' | '1 WEEK' | '1 MONTH' | 'ALL TIME';
const arr: TIMERANGE[] = ['1 DAY', '1 WEEK', '1 MONTH', 'ALL TIME'];
const arr1 = ['THIS DAY', 'THIS WEEK', 'THIS MONTH', 'ALL TIME'];

type TimeRangeProps = {
    handleClick: (item: string) => void;
};

const TimeRange = ({ handleClick }: TimeRangeProps) => {
    const [data, setData] = useState<TIMERANGE>('1 DAY');
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: 3,
                alignItems: 'center',
                justifyContent: 'space-around',
                borderRadius: 100,
                backgroundColor: '#F5F6FA',
                width: '100%',
                padding: 2,
                '& > *': {
                    cursor: 'pointer',
                },
            }}
        >
            {arr.map((item, index) => {
                let isSelected = false;
                if (data == item) {
                    isSelected = true;
                }
                return (
                    <Typography
                        onClick={() => {
                            handleClick(item);
                            setData(item);
                        }}
                        color={isSelected ? 'blue' : 'black'}
                        fontSize={'12px'}
                    >
                        {item}
                    </Typography>
                );
            })}
        </Box>
    );
};

const Student = () => {
    const param = useParams();
    const classes = useStyles();
    const [data, setData] = useState<any>();
    const [loading, setLoading] = useState<boolean>(true);
    const [timeSelected, setTimeSelected] = useState('1 DAY');
    const handleTimeRangeClick = (item: string) => {
        setTimeSelected(item);
    };
    useEffect(() => {
        setData(StudentList.filter((item) => item.id == param.id)[0]);
        setLoading(false);
    }, []);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsActive(true), 100);
        return () => clearTimeout(timer);
    }, []);

    if (loading) return <>.....loading</>;
    return (
        <Box className={classes.root}>
            <Box
                width={'max-content'}
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 1,
                }}
            >
                <Typography
                    fontSize={'18px'}
                    fontWeight={'500'}
                    textAlign={'left'}
                >
                    {data.name}
                </Typography>
                <KeyboardArrowDownIcon />
            </Box>
            <Box sx={{ width: '100%', display: 'flex', gap: 2 }}>
                <Box
                    sx={{
                        width: '40%',
                        boxShadow: '0px 10px 19px 0px rgba(229, 217, 255, 1)',
                        marginBottom: '20px',
                    }}
                >
                    <Box
                        sx={{
                            background: '#5C24FC',
                            display: 'flex',
                            flexDirection: 'row',
                            padding: 2,
                        }}
                    >
                        <Box
                            sx={{
                                flex: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: 2,
                            }}
                        >
                            <Box
                                sx={{
                                    height: '100px',
                                    width: '100px',
                                    borderRadius: '100px',
                                    background: '#F4B3B4',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    boxShadow: '0px 10px 19px 0px #00000040',
                                }}
                            >
                                <BearIcon width="50px" height="50px" />
                            </Box>
                            <Typography
                                fontWeight={'700'}
                                color="white"
                                fontSize={'20px'}
                            >
                                {data.name}
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                flex: 1,
                                display: 'flex',
                                alignItems: 'flex-start',
                                flexDirection: 'column',
                                gap: 2,
                            }}
                        >
                            <Typography
                                fontSize={'15px'}
                                fontWeight={'700'}
                                color="#F9BF0F"
                            >
                                Class rank: 1
                            </Typography>
                            <Typography
                                fontSize={'15px'}
                                fontWeight={'700'}
                                color="#F9BF0F"
                                textAlign={'left'}
                            >
                                World rank: 10208
                            </Typography>
                        </Box>

                        <img style={{ flex: 1 }} src={Badge} />
                    </Box>
                    <Box
                        sx={{
                            padding: 3,
                            gap: 3,
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                            <Typography
                                color="#8156FE"
                                fontSize={'15px'}
                                fontWeight={'600'}
                            >
                                estimated level:
                            </Typography>
                            <Typography
                                color="#F9BF0F"
                                fontSize={'15px'}
                                fontWeight={'600'}
                            >
                                B2
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                            <Typography
                                color="#8156FE"
                                fontSize={'15px'}
                                fontWeight={'600'}
                            >
                                estimated time to reach C1:
                            </Typography>
                            <Typography
                                color="#F9BF0F"
                                fontSize={'15px'}
                                fontWeight={'600'}
                            >
                                3 months
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                            <Typography
                                color="#8156FE"
                                fontSize={'15px'}
                                fontWeight={'600'}
                            >
                                badges:
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                gap: 3,
                            }}
                        >
                            {' '}
                            <Typography
                                color="#8156FE"
                                fontSize={'15px'}
                                fontWeight={'600'}
                            >
                                send {data.name} a message:
                            </Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    gap: 2,
                                }}
                            >
                                <TwitterIcon style={{ color: '#BACCFD' }} />
                                <FacebookIcon style={{ color: '#BACCFD' }} />

                                <ReplyIcon style={{ color: '#BACCFD' }} />
                                <textarea
                                    style={{
                                        height: 100,
                                        width: 250,
                                        borderRadius: 5,
                                        border: '#8053FE solid 2px',
                                        padding: 5,
                                        boxShadow:
                                            '0px 8px 4px rgba(0, 0, 0, 0.25);',
                                    }}
                                />
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box
                    sx={{
                        flex: '50%',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 5,
                    }}
                >
                    <Box
                        sx={{
                            padding: '10px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2,
                            boxShadow:
                                '0px 10px 19px 0px rgba(229, 217, 255, 1)',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                width: '100%',
                                justifyContent: 'space-between',
                            }}
                        >
                            <Typography
                                textAlign={'left'}
                                fontSize={'20px'}
                                fontWeight={'500'}
                            >
                                Super active 🏆
                            </Typography>
                            <Box
                                sx={{
                                    width: '90px',
                                    height: '32px',
                                    border: '#DDE4F0 solid 0.5px',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    display: 'flex',
                                    borderRadius: '5px',
                                    boxShadow:
                                        'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
                                }}
                            >
                                <Typography
                                    fontSize={'12px'}
                                    fontWeight={'500'}
                                    color="#5A6ACF"
                                    sx={{
                                        cursor: 'pointer',
                                    }}
                                >
                                    1 month
                                </Typography>
                            </Box>
                        </Box>

                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'flex-end',
                                gap: 0.5,
                            }}
                        >
                            <ArrowDownwardIcon
                                sx={{
                                    height: 15,
                                    color: 'red',
                                    cursor: 'pointer',
                                }}
                            />
                            <Typography
                                fontWeight={'500'}
                                fontSize={'12px'}
                                color="red"
                                margin={0}
                                padding={0}
                            >
                                2.1%
                            </Typography>
                            <Typography fontSize={'12px'} color="#737B8B">
                                vs last week
                            </Typography>
                        </Box>
                        <Typography
                            fontSize={'13px'}
                            color="#737B8B"
                            textAlign={'left'}
                        >
                            from 1-6 Dec, 2025
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '100%',
                            }}
                        >
                            <RenderLineChart
                                width={600}
                                data1={data.chartData1}
                                data2={data.chartData2}
                            />
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            position: 'relative',
                            padding: '10px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2,
                            boxShadow:
                                '0px 10px 19px 0px rgba(229, 217, 255, 1)',
                            marginBottom: '20px',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Box sx={{ width: '70%' }}>
                            <TimeRange handleClick={handleTimeRangeClick} />
                        </Box>
                        {arr1.map((item: string, index) => {
                            let isSelected = false;
                            const mapping: Record<string, string> = {
                                'THIS DAY': '1 DAY',
                                'THIS WEEK': '1 WEEK',
                                'THIS MONTH': '1 MONTH',
                                'ALL TIME': 'ALL TIME',
                            };

                            if (timeSelected == mapping[item]) {
                                isSelected = true;
                            }
                            return (
                                <Box
                                    className={`animation ${isSelected ? 'active' : 'inactive'}`}
                                    position={'absolute'}
                                >
                                    <Typography
                                        color="#AAAED6"
                                        fontSize={'13px'}
                                    >
                                        {item}
                                    </Typography>
                                    <Typography
                                        color="#AAAED6"
                                        fontSize={'13px'}
                                    >
                                        TOTAL WORD SEARCH
                                    </Typography>
                                    <Typography
                                        color="#373B47"
                                        fontSize={'20px'}
                                        fontWeight={'600'}
                                    >
                                        1300 words
                                    </Typography>
                                </Box>
                            );
                        })}
                        <RenderDoughnutChart
                            data={doughNutData2}
                            colorArray={COLORS2}
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Student;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            height: '100%',
            paddingTop: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: 15,
        },
    }),
);
