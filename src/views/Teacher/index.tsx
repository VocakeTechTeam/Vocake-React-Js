import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { RenderLineChart } from './components/ReChartjs/LineChart';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { RenderBarChart } from './components/ReChartjs/BarChart';
import { RenderDoughnutChart } from './components/ReChartjs/Doughnut';
import { StudentList } from './constant/data';
import { StudentRow } from './components/StudentRow';
import { barChartData1, barChartData2 } from './constant/data';
import { doughNutData } from './constant/data';
import Circle from './components/Circle';
const Teacher = () => {
    const classes = useStyles();
    const [student, setStudent] = useState<any>(StudentList[0]);
    const hoverTopStudent = (studentName: string) => {
        const newStudent = StudentList.find(
            (student) => student.name === studentName,
        );
        setStudent(newStudent);
    };
    return (
        <Box className={classes.root}>
            <Typography fontSize={'18px'} fontWeight={'500'} textAlign={'left'}>
                Hello, superstar teacher 🌟
            </Typography>
            <Box sx={{ display: 'flex', flex: 1 }}>
                <Box className={classes.firstContainer}>
                    <Box
                        sx={{
                            borderBottom: '#C8CBD9 solid 0.5px',
                            paddingRight: '20px',
                            height: '380px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 1,
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
                            <Typography fontSize={'14px'} fontWeight={'500'}>
                                Class overview
                            </Typography>
                            <Box
                                sx={{
                                    width: '109px',
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
                                >
                                    View Report
                                </Typography>
                            </Box>
                        </Box>
                        <Typography
                            textAlign={'left'}
                            fontSize={'20px'}
                            fontWeight={'500'}
                        >
                            Search volumn by day
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'flex-end',
                                gap: 1,
                                padding: 0,
                            }}
                        >
                            <ArrowUpwardIcon
                                sx={{ color: '#149D52', height: '15px' }}
                            />
                            <Typography
                                fontWeight={'500'}
                                fontSize={'12px'}
                                color="#149D52"
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
                            from 1-07 Dec, 2025
                        </Typography>
                        <Box sx={{ height: '70%', marginTop: 'auto' }}>
                            <RenderBarChart
                                data1={barChartData1}
                                data2={barChartData2}
                            />
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', width: '100%' }}>
                        <Box
                            sx={{
                                borderRight: '#C8CBD9 solid 0.5px',
                                padding: '5px 10px',
                                gap: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                flex: 1,
                            }}
                        >
                            {' '}
                            <Typography textAlign={'left'} fontSize={'14px'}>
                                Word search by categories
                            </Typography>
                            <Typography
                                color={'#808080'}
                                textAlign={'left'}
                                fontSize={'12px'}
                            >
                                Lorem ipsum dolor sit amet, consectetur
                            </Typography>
                            <Box sx={{position:"relative"}}>
                                <Circle
                                    title="education"
                                    percent="85%"
                                    color="#F99C30"
                                    size="170px"
                                    percentSize="33px"
                                    titleSize="13px"
                                    sx={{
                                        position: 'absolute',
                                        top: 0,
                                        left:90
                                    }}
                                />
                                <Circle
                                    title="environment"
                                    percent="85%"
                                    color="#6463D6"
                                    size="103px"
                                    percentSize="20px"
                                    titleSize="12px"
                                    sx={{
                                        position: 'absolute',
                                    }}
                                />
                                <Circle
                                    title="transport"
                                    percent="92%"
                                    color="#2FBFDE"
                                    size="122px"
                                    percentSize="33px"
                                    titleSize="13px"
                                    sx={{
                                        position: 'absolute',
                                        top:120
                                    }}
                                />
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                padding: '5px 10px',
                                gap: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                flex: 1,
                            }}
                        >
                            <Typography textAlign={'left'} fontSize={'14px'}>
                                Top students
                            </Typography>
                            <Typography
                                color={'#808080'}
                                textAlign={'left'}
                                fontSize={'12px'}
                            >
                                Adipiscing elit, sed do eiusmod tempor
                            </Typography>

                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    width: '100%',
                                }}
                            >
                                {StudentList.map((item, index) => {
                                    return (
                                        <StudentRow
                                            handleHover={hoverTopStudent}
                                            key={index}
                                            icon={item.icon}
                                            name={item.name}
                                        />
                                    );
                                })}
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box className={classes.secondContainer}>
                    <Box
                        sx={{
                            borderBottom: '#C8CBD9 solid 0.5px',
                            paddingLeft: '20px',
                            height: '380px',
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
                            <Typography fontSize={'14px'} fontWeight={'500'}>
                                Word mastery level
                            </Typography>
                            <Box
                                sx={{
                                    width: '109px',
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
                                >
                                    View Report
                                </Typography>
                            </Box>
                        </Box>
                        <Typography
                            fontSize={'13px'}
                            color="#737B8B"
                            textAlign={'left'}
                        >
                            from 1-07 Dec, 2025
                        </Typography>
                        <Box sx={{ width: '100%' }}>
                            <RenderDoughnutChart data={doughNutData} />
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            padding: '30px 0 0 10px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2,
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
                            <Typography fontSize={'14px'} fontWeight={'500'}>
                                {student.name}
                            </Typography>
                            <Box
                                sx={{
                                    width: '109px',
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
                                >
                                    View Report
                                </Typography>
                            </Box>
                        </Box>
                        <Typography
                            textAlign={'left'}
                            fontSize={'20px'}
                            fontWeight={'500'}
                        >
                            Super active 🏆
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'flex-end',
                                gap: 0.5,
                            }}
                        >
                            <ArrowDownwardIcon
                                sx={{ height: 15, color: 'red' }}
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
                                data1={student.chartData1}
                                data2={student.chartData2}
                            />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Teacher;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            height: '100%',
            paddingTop: '20px',
            paddingBottom: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: 15,
        },
        firstContainer: {
            width: '60%',
            borderRight: '#55AD9B solid 1px',
            height: '100%',
        },
        secondContainer: {
            width: '40%',
        },
    }),
);
