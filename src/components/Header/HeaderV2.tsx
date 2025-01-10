import React from 'react';
import SearchBarV2 from '../SearchBar/SearchBarV2';
import { Avatar } from '@mui/material';
import { Box } from '@mui/material';
import { makeStyles, createStyles } from '@mui/styles';
const HeaderV2 = () => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <SearchBarV2 />
            <Avatar
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3cJqhI7cSwoxkLl09HRxdVPl9diD8RuR2UQ&s"
                style={{ cursor: 'pointer' }}
            />
        </Box>
    );
};

export default HeaderV2;

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            padding: "0px 60px",
            justifyContent:"space-between"
        },
    }),
);
