import React from 'react';
import { Box } from '@mui/material';
import { makeStyles, createStyles } from '@mui/styles';
const Card = () => {
    const classes = useStyles();
    return <Box className={classes.root}>Card</Box>;
};

export default Card;

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            border: 'red solid 1px',
            width: '300px',
            height: '400px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '20px',
            flexShrink: 0,
        },
    }),
);
