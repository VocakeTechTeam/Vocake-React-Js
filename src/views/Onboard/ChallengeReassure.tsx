import React, { useState } from 'react';
import { makeStyles, createStyles } from '@mui/styles';
import { Box, Typography } from '@mui/material';
import SelectBox from './components/SelectBox';

type Props = {
    handleStep: () => void;
};
const ChallengeReassure = ({ handleStep }: Props) => {
    const classes = useStyles();
    const reassure = {
        time: (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h2>Why learn something if you can't remember it? 😬</h2>{' '}
                <p>
                    At Vocake, we've built a proven method that will not only
                    help you to learn new words and concepts, but to also
                    remember them down the road!
                </p>
            </div>
        ),
        motivation: (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h2>Why learn something if you can't remember it? 😬</h2>{' '}
                <p>
                    At Vocake, we've built a proven method that will not only
                    help you to learn new words and concepts, but to also
                    remember them down the road!
                </p>
            </div>
        ),
        opportunity: (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h2>Why learn something if you can't remember it? 😬</h2>{' '}
                <p>
                    At Vocake, we've built a proven method that will not only
                    help you to learn new words and concepts, but to also
                    remember them down the road!
                </p>
            </div>
        ),
        remember: (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h2>Why learn something if you can't remember it? 😬</h2>{' '}
                <p>
                    At Vocake, we've built a proven method that will not only
                    help you to learn new words and concepts, but to also
                    remember them down the road!
                </p>
            </div>
        ),
        nervous: (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h2>Why learn something if you can't remember it? 😬</h2>{' '}
                <p>
                    At Vocake, we've built a proven method that will not only
                    help you to learn new words and concepts, but to also
                    remember them down the road!
                </p>
            </div>
        ),
    };
    return (
        <Box className={classes.root}>
            <Box className={classes.reassure}>{reassure['remember']}</Box>
            <Box onClick={handleStep} className={classes.btn}>
                Continue
            </Box>
        </Box>
    );
};

export default ChallengeReassure;

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            width: '100%',
            height: '100%',
            gap: 20,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        btn: {
            background: '#55AD9B',
            width: '70%',
            padding: 10,
            borderRadius: 35,
            fontWeight: 'bold',
            color: 'white',
            height: '70px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
            cursor: 'pointer',
        },
        reassure: {
            background: 'white',
            borderRadius: 50,
            width: '100%',
            height: '500px',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 20,
        },
    }),
);
