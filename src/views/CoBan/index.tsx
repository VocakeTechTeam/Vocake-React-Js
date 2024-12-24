import React from 'react';
import { Box, Typography } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useNavigate } from 'react-router-dom';

const Card = () => {
    const classes = useCardStyles();
    return (
        <Box className={classes.root}>
            <div
                style={{
                    width: '100%',
                    height: '145px',
                    background: '#D9D9D9',
                }}
            />
            <div className={classes.textContainer}>
                <Typography fontSize={'25px'} fontWeight={'bold'}>
                    Travel
                </Typography>
                <Typography fontSize={'20px'}>Du lịch</Typography>
            </div>
        </Box>
    );
};

const useCardStyles = makeStyles(() =>
    createStyles({
        root: {
            height: '285px',
            width: '241px',
            border: 'black solid 1px',
            borderRadius: '13px',
            flexShrink: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '33px',
            boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
        },
        textContainer: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            height: 'max-content',
            justifyContent: 'space-around',
            padding: 0,
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
                    <KeyboardBackspaceIcon sx={{ width: 40, height: 22 }} />
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
                                display: 'flex',
                                justifyContent: 'center',
                                width: '20px',
                                height: '20px',
                                cursor: 'pointer',
                            }}
                        >
                            <KeyboardArrowDownIcon
                                sx={{
                                    width: '25px',
                                    height: '15px',
                                }}
                            />
                        </Box>
                    </Box>
                    <Box
                        onClick={() => {
                            nav('/practice');
                        }}
                        sx={{
                            borderRadius: 15,
                            background: '#55AD9B',
                            borderBottom: '#acd7ce solid 4px',

                            padding: '0 10px',
                        }}
                    >
                        <p
                            style={{
                                fontSize: 10,
                                fontWeight: 'bold',
                                color: 'white',
                                cursor: 'pointer',
                            }}
                        >
                            PRACTICE
                        </p>
                    </Box>
                    <Box
                        sx={{
                            borderRadius: 10,
                            background: '#FE6876',
                            padding: '0 10px',

                            borderBottom: '#feced3 solid 4px',
                            cursor: 'pointer',
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
            fontSize: '31px',
        },
        previewContainer: {
            display: 'flex',
        },
    }),
);
