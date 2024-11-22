import React from 'react';
import { Box } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useNavigate } from 'react-router-dom';

const Card = () => {
    const classes = useCardStyles();
    return (
        <Box className={classes.root}>
            <div
                style={{
                    width: '100px',
                    borderRadius: '10px',
                    height: '100px',
                    background: 'gray',
                }}
            ></div>
            <p>Travel</p>
        </Box>
    );
};

const useCardStyles = makeStyles(() =>
    createStyles({
        root: {
            maxHeight: '200px',
            width: '150px',
            border: 'black solid 1px',
            borderRadius: '10px',
            flexShrink: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '10px',
        },
    }),
);

const CoBan = () => {
    const nav = useNavigate();
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Box sx={{ cursor: 'pointer' }}>
                <Box
                    onClick={() => {
                        nav('/explore');
                    }}
                    className={classes.titleArrowContainer}
                >
                    <ChevronLeftIcon />
                    <p className={classes.title}>IELTS cơ bản</p>
                </Box>
                <Box
                    sx={{
                        width: '100%',
                        gap: 5,
                        display: 'flex',
                        overflowX: 'auto',
                        paddingBottom: '15px',
                    }}
                >
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Box>
            </Box>

            <Box className={classes.previewContainer}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 1,
                        }}
                    >
                        <p className={classes.title}>Preview</p>
                        <Box
                            sx={{
                                padding: '0px',
                                background: '#E5E5E5',
                                borderRadius: '15px',
                                alignItems: 'center',
                                boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                            }}
                        >
                            <KeyboardArrowDownIcon
                                sx={{ width: '25px', height: '15px' }}
                            />
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            borderRadius: 15,
                            background: '#55AD9B',
                            padding: '0 5px',
                            boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                        }}
                    >
                        <p
                            style={{
                                fontSize: 10,
                                fontWeight: 'bold',
                                color: 'white',
                            }}
                        >
                            PRACTICE
                        </p>
                    </Box>
                    <Box
                        sx={{
                            borderRadius: 10,
                            background: '#FE6876',
                            padding: '0 5px',
                            boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                        }}
                    >
                        <p
                            style={{
                                fontSize: 10,
                                fontWeight: 'bold',
                                color: 'white',
                            }}
                        >
                            CHALLENGE
                        </p>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default CoBan;

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            padding: '5px',
            width: '100%',
            flexDirection: 'column',
            display: 'flex',
        },
        titleArrowContainer: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
        },
        title: {
            fontWeight: 'bold',
        },
        previewContainer: {
            display: 'flex',
        },
    }),
);
