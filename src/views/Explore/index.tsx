import { Box, Typography } from '@mui/material';
import React from 'react';
import { createStyles, makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';

const Card = () => {
    const classes = useCardStyles();
    const nav = useNavigate();
    return (
        <Box
            onClick={() => {
                nav('co-ban');
            }}
            className={classes.root}
        >
            <Typography>Beginner Ielts</Typography>
            <Typography>Band 3.0</Typography>
            <Typography>
                Over 1200 IELTS vocabularies and expressions
            </Typography>
        </Box>
    );
};

const useCardStyles = makeStyles(() =>
    createStyles({
        root: {
            border: 'black solid 1px',
            padding: '5px',
            borderRadius: '10px',
            width: '300px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            cursor: 'pointer',
            flexShrink: 0,
        },
    }),
);

const Explore = () => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Box
                sx={{
                    gap: 2,
                    flexDirection: 'column',
                    display: 'flex',
                    width: '100%',
                }}
            >
                <Typography sx={{ fontWeight: 'bold' }}>
                    Suggested for you
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 5,
                        overflowX: 'auto',
                        width: '100%',
                        paddingBottom: '10px',
                    }}
                >
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Box>
            </Box>
            <Box sx={{ gap: 2, flexDirection: 'column', display: 'flex' }}>
                <Typography sx={{ fontWeight: 'bold' }}>
                    By community
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 5,
                    }}
                >
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Box>
            </Box>
        </Box>
    );
};

export default Explore;

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            padding: '5px',
            width: '100%',
            gap: 10,
            flexDirection: 'column',
            display: 'flex',
            '& p': {
                textAlign: 'start',
            },
        },
    }),
);
