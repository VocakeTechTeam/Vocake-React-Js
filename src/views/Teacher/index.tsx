import React from 'react';
import { Box, Typography } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import { Theme, useTheme } from '@mui/material/styles';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import PieChart from './components/PieChart';
import BarChart from './components/BarChar';
const data = [300, 50, 100, 150]; // Data for each slice
const labels = ['1', '2', '3', '4'];
const Teacher = () => {
    const classes = useStyles();
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
                            height: '465px',
                            display: "flex",
                            flexDirection: "column",
                            gap:1
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
                        <Box sx={{height:"70%", marginTop:"auto"}}>
                            <BarChart
                                data={data}
                                labels={labels}
                                title="My Bar Chart"
                            />
                        </Box>
                    </Box>
                </Box>
                <Box className={classes.secondContainer}>
                    <Box
                        sx={{
                            borderBottom: '#C8CBD9 solid 0.5px',
                            paddingLeft: '20px',
                            height: '465px',
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
