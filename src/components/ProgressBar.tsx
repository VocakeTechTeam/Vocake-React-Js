import { Box, useTheme } from '@mui/material';
import React from 'react';
import { makeStyles, createStyles } from '@mui/styles';
import { theme } from '../theme';

type Props = {
    totalStep: number;
    currentStep: number;
    backgroundColor?: string;
};

const ProgressBar = ({
    totalStep,
    currentStep,
    backgroundColor = '#EAB355',
}: Props) => {
    const width = (100 / totalStep) * currentStep;
    const classes = useStyles();
    return (
        <Box className={classes.wrapper}>
            <Box
                sx={{ width: `${width}%`, background: backgroundColor }}
                className={classes.progress}
            />
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
            borderRadius: '25px',
        },
    }),
);
