import React, { useState } from 'react';
import { makeStyles, createStyles } from '@mui/styles';
import { Box, Typography } from '@mui/material';
import SelectBox from './components/SelectBox';

type Props = {
    handleStep: () => void;
};
const ChallengeReassure = ({ handleStep }: Props) => {
    const classes = useStyles();

    return (
        <Box className={classes.root} >
            <Box className={classes.reassure} >
                Time is precious, and that's why Speak lessons average just 5 minutes long!
            </Box>
            <Box onClick={handleStep} className={classes.btn}>Continue</Box>
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
            background: "white",
            borderRadius: 50,
            width: "100%",
            height: "500px",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent:"center"
        }
    }),
);
