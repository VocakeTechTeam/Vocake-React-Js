import React, { useState } from 'react';
import { makeStyles, createStyles } from '@mui/styles';
import { Box } from '@mui/material';
import {
    ChallengeReassureChoices as reassure,
    ChallengeReassureMapping as reassureChallengeMapping,
} from '../../constant';
import { useDispatch } from 'react-redux';
import { updateOnboard } from '../../store/store';
type Props = {
    handleStep: () => void;
    challenge: string;
};
const ChallengeReassure = ({ handleStep, challenge }: Props) => {
    const classes = useStyles();
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
