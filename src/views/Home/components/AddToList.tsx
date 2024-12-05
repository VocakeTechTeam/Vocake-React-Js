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
                sx={{width:15}}
                style={{ color: isClicked ? 'white' : '#55AD9B' }}
            />
            <Typography
                sx={{
                    color: isClicked ? 'white' : '#55AD9B',
                    fontSize:10
                }}
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
            border: '#55AD9B solid 1px',
            borderRadius: '10px',
            display: 'flex',
            cursor: 'pointer',
            gap: '2px',
            flexDirection: "row",
            alignItems: "center",
            padding:"2px 5px"
        },
    }),
);
