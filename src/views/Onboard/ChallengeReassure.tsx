import React, { useState } from 'react';
import { makeStyles, createStyles } from '@mui/styles';
import { Box } from '@mui/material';

type Props = {
    handleStep: () => void;
    challenge: string;
};
const ChallengeReassure = ({ handleStep, challenge }: Props) => {
    const classes = useStyles();
    const reassure = {
        time: (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h2>
                    Time is precious, and that's why Vocake lessons average just
                    5 minutes long!
                </h2>{' '}
                <p>
                    You can pause any time, and when you're ready to restart,
                    it's super easy to pick up from right where you left off!
                </p>
            </div>
        ),
        motivation: (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h2>We all find it hard to stay motivated sometimes! 😓</h2>{' '}
                <p>
                    We have fun monthly challenges with prizes, smart methods to
                    review, and great ways to track your progress.
                </p>
                <p>
                    Most importantly, our lessons are designed to keep you
                    interested!
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
        difficult: (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h2>Vocake is designed for learners of all skill levels!</h2>{' '}
                <p>
                    Our thousands of lessons cover all experiences and topics.
                    We make sure our content is relevant and that concepts are
                    explained clearly for you!
                </p>
                <p>You are capable of it, and it WILL be fun and rewarding!</p>
            </div>
        ),
    };
    const reassureChallengeMapping: Record<string, keyof typeof reassure> = {
        "⏰ It's hard to find time": 'time',
        "🚀 It's hard to stay motivated": 'motivation',
        '🧠 Remembering what I learned': 'remember',
        '😔 English might be too hard': 'difficult',
    };
    return (
        <Box className={classes.root}>
            <Box className={classes.reassure}>
                {reassure[reassureChallengeMapping[challenge]]}
            </Box>
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
            boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
        },
    }),
);
