import React from 'react';
import { createStyles, makeStyles } from '@mui/styles';
import { Box, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';

const Card = () => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Box sx={{ gap: 2, display: 'flex', flexDirection: 'column' }}>
                <Typography fontSize={'15px'} fontWeight="bold">
                    IELTS BEGINNER
                </Typography>
                <Typography fontSize={'13px'} fontWeight="700">
                    15 term
                </Typography>
            </Box>

            <Box className={classes.userContainer}>
                <Avatar sx={{ width: 35, height: 35 }} />
                <Typography fontSize={'13px'}>thuongbui</Typography>
            </Box>
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
            padding: 20,
            flexShrink: 0,
            alignItems: 'flex-start',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            cursor: 'pointer',
        },
        userContainer: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
        },
    }),
);
