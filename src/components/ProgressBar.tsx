import { Box, useTheme } from '@mui/material';
import React from 'react';
import { makeStyles, createStyles } from '@mui/styles';
import { theme } from '../theme';

type Props = {
    totalStep: number;
    currentStep: number;
};

const ProgressBar = ({ totalStep, currentStep }: Props) => {
    const width = (100 / totalStep) * currentStep;
    const classes = useStyles();
    return (
        <Box className={classes.wrapper}>
            <Box sx={{ width: `${width}%` }} className={classes.progress} />
        </Box>
    );
};

export default ProgressBar;

const useStyles = makeStyles(({ width }: { width: number }) =>
    createStyles({
        wrapper: {
            borderRadius: '25px',
            width: `100%`,
            height: '15px',
            background: 'transparent',
            overflow: 'hidden',
            boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
        },
        progress: {
            height: '100%',
            background: '#EAB355',
            borderRadius: '25px',
        },
    }),
);
