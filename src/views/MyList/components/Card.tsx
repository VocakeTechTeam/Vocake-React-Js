import React from 'react';
import { createStyles, makeStyles } from '@mui/styles';
import { Box, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';

const Card = () => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Typography fontWeight="bold">IELTS BEGINNER</Typography>
            <Typography>15 term</Typography>
            <Avatar />
            <Typography>Thương Bùi</Typography>
        </Box>
    );
};

export default Card;

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            width: '291px',
            height: '178px',
            backgroundColor: '#FFFDE3',
            borderRadius: 32,
            padding: 10,
            flexShrink: 0,
        },
    }),
);
