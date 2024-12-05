import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

const AddToList = () => {
    const classes = useStyles();
    const [isClicked, setClicked] = useState(false);
    return (
        <Box
            onClick={() => {
                setClicked((prev) => !prev);
            }}
            sx={{
                backgroundColor: isClicked ? '#55AD9B' : 'white',
            }}
            className={classes.addToListContainer}
        >
            <FormatListBulletedIcon
                style={{ color: isClicked ? 'white' : '#55AD9B' }}
            />
            <Typography
                sx={{
                    color: isClicked ? 'white' : '#55AD9B',
                }}
                className={classes.addToListText}
            >
                {isClicked ? 'added' : 'add to list'}
            </Typography>
        </Box>
    );
};

export default AddToList;
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        addToListContainer: {
            border: '#55AD9B solid 2px',
            borderRadius: '5px',
            display: 'flex',
            padding: '4px',
            cursor: 'pointer',
            gap: '5px',
        },
        addToListText: {
            color: '#55AD9B',
        },
    }),
);
