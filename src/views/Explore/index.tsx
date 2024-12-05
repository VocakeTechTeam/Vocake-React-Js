import { Box, Typography } from '@mui/material';
import React from 'react';
import { createStyles, makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';
import { Theme } from '@mui/material/styles';

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
            <Typography
                fontWeight="bold"
                fontSize={'31px'}
                className={classes.title}
            >
                Beginner Ielts
            </Typography>
            <Typography sx={{ marginLeft: '45px' }}>Band 3.0</Typography>
            <Typography sx={{ marginLeft: '45px' }}>
                Over 1200 IELTS vocabularies and expressions
            </Typography>
        </Box>
    );
};

const useCardStyles = makeStyles(() =>
    createStyles({
        root: {
            border: 'black solid 1px',
            padding: '20px',
            borderRadius: '10px',
            width: '350px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            cursor: 'pointer',
            flexShrink: 0,
            boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
            gap: 20,
        },
        title: {
            fontWeight: 'bold',
            fontSize: 24,
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
                    sx={(theme: Theme) => (
                    {
                        display: 'flex',
                        flexDirection: 'column',
                            gap: 5,
                            [theme.breakpoints.down("sm")]: {
                                width: "100%",
                                alignItems:"center"
                        }
                    }
                    ) }
                    
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
