import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles, createStyles } from '@mui/styles';
import image1 from '../../assets/image1.png';

const SelectRole = () => {
    const [step, setStep] = useState<number>();
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Box className={classes.firstContainer}>
                <Box className={classes.thirdContainer}>
                    <img style={{ width: '200px' }} src={image1} alt="Vocake" />
                    <p style={{ fontSize: '20px', color: 'white' }}>
                        👋 Hi there!
                    </p>
                    <p
                        style={{
                            fontSize: '26px',
                            fontWeight: 'bold',
                            color: 'white',
                            textAlign: 'start',
                            margin: 0,
                        }}
                    >
                        Welcome to Vocake
                    </p>
                </Box>
            </Box>
            <Box className={classes.secondContainer}>
                <Box className={classes.signInContainer}>
                    <Typography fontWeight="bold">Have an account?</Typography>
                    <Typography
                        sx={{ fontWeight: 'bold' }}
                        className={classes.sigInText}
                    >
                        Sign In
                    </Typography>
                </Box>
                <Box>
                    <p>Select your role to get started</p>
                    <Box>
                        <Box sx={{ cursor: 'pointer' }}>I am a student</Box>
                        <Box sx={{ cursor: 'pointer' }}>I am a teacher</Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default SelectRole;

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            height: '100%',
        },
        firstContainer: {
            width: '50%',
            background: '#55AD9B',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
            flexDirection: 'column',
        },
        secondContainer: {
            width: '50%',
            height: '100%',
            padding: '5px',
        },
        sigInText: {
            background: '#55AD9B',
            color: 'white',
            padding: '5px 15px',
            borderRadius: 20,
            cursor: 'pointer',
        },
        signInContainer: {
            display: 'flex',
            justifyContent: 'end',
            gap: '10px',
            alignItems: 'center',
        },
        thirdContainer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
        },
    }),
);
