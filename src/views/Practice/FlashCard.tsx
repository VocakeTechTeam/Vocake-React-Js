import React, { useRef } from 'react';
import { Box } from '@mui/material';
import { Flashcard } from 'react-quizlet-flashcard';
import { createStyles, makeStyles } from '@mui/styles';
import image from '../../assets/image.png';
import { Typography } from '@mui/material';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import TranslateIcon from '@mui/icons-material/Translate';

const frontHTML = (
    <Box
        sx={{
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
            borderRadius: 3,
            background: '#FFF9EB',
            flexDirection: 'column',
            padding: 5,
        }}
    >
        <Box sx={{ marginLeft: 'auto', gap: 2, display: 'flex' }}>
            <VolumeUpIcon />
            <StarBorderIcon />
        </Box>
        <Box
            sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Box sx={{ flex: 1 }}>
                {' '}
                <Typography style={{ fontWeight: 'bold', fontSize: '24px' }}>
                    ironic (a.)
                </Typography>
            </Box>
            <Box sx={{ flex: 1 }}>
                <img style={{ width: '250px', height: '250px' }} src={image} />
            </Box>
        </Box>
    </Box>
);
const backHTML = (
    <Box
        sx={{
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
            borderRadius: 3,
            background: '#55AD9B',
            flexDirection: 'column',
            padding: 5,
        }}
    >
        <Box sx={{ marginLeft: 'auto', gap: 2, display: 'flex' }}>
            <VolumeUpIcon />
            <StarBorderIcon />
        </Box>
        <Box
            sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
            }}
        >
            <Typography
                style={{
                    fontWeight: 'bold',
                    fontSize: '24px',
                    color: '#EAB355',
                }}
            >
                ironic (a.)
            </Typography>
            <Box>
                <Typography sx={{ fontSize: '22px' }}>
                    unexpected thus funny <TranslateIcon />
                </Typography>
            </Box>
            <Typography
                sx={{ fontWeight: 'bold', color: 'white', display: 'flex' }}
            >
                It’s
                <Typography
                    style={{
                        fontWeight: 'bold',
                        color: '#EAB355',
                        display: 'flex',
                        width: '85px',
                        justifyContent: 'center',
                        height: 'max-content',
                    }}
                >
                    ironic (a.)
                </Typography>
                that Sarah, the librarian, got fined for overdue books.
            </Typography>
        </Box>
    </Box>
);
const FlashCard = () => {
    const flipRef = useRef();
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Flashcard
                className={classes.flashCardWrapper}
                frontHTML={frontHTML}
                backHTML={backHTML}
            />
        </Box>
    );
};

export default FlashCard;

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            transform: 'translateY(30%)',
        },
        flashCardWrapper: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
            justifySelf: 'center',
        },
    }),
);
