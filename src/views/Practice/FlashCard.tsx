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
            padding: 4,
            gap: 2,
        }}
    >
        <Box sx={{ marginLeft: 'auto', gap: 1, display: 'flex' }}>
            <VolumeUpIcon sx={{ width: '20px' }} />
            <StarBorderIcon sx={{ width: '20px' }} />
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
            display: 'flex',
            borderRadius: 3,
            background: '#55AD9B',
            flexDirection: 'column',
            padding: 5,
            gap: 3,
        }}
    >
        <Box sx={{ marginLeft: 'auto', gap: 1, display: 'flex' }}>
            <VolumeUpIcon sx={{ color: 'white' }} />
            <StarBorderIcon sx={{ color: 'white' }} />
        </Box>
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: 3,
            }}
        >
            <Typography
                style={{
                    fontWeight: 'bold',
                    fontSize: '26px',
                    color: '#EAB355',
                }}
            >
                ironic (a.)
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 2,
                }}
            >
                <Typography sx={{ fontSize: '24px' }}>
                    unexpected thus funny
                </Typography>
                <TranslateIcon sx={{ width: '20px', color: 'white' }} />
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 0.6, }}
            >
                <Typography
                    sx={{
                        fontWeight: 'bold',
                        color: 'white',
                        display: 'flex',
                        fontSize: '16px',
                    }}
                >
                    It’s
                </Typography>
                <Typography sx={{ fontWeight: 'bold', color: '#EAB355' }}>
                    ironic
                </Typography>
                <Typography
                    sx={{
                        fontWeight: 'bold',
                        color: 'white',
                        fontSize: '16px',
                    }}
                >
                    that Sarah, the librarian, got fined for overdue books.
                </Typography>
            </Box>
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
