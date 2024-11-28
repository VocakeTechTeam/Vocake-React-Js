import React from 'react';
import { makeStyles, createStyles } from '@mui/styles';
import { Box } from '@mui/material';
type Props = {
    name: string;
    isSelected: boolean;
    handleClick: (item: string) => void;
};

const SelectBox = ({ isSelected = false, name, handleClick }: Props) => {
    console.log(isSelected);
    const activeColor = '#55AD9B';
    const classes = useStyles();
    return (
        <Box
            onClick={() => {
                handleClick(name);
            }}
            className={classes.root}
            sx={{
                border: isSelected
                    ? `${activeColor} solid 1px`
                    : 'gray solid 1px',
            }}
        >
            {name}
        </Box>
    );
};

export default SelectBox;

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            width: '100%',
            padding: 5,
            borderRadius: 10,
            cursor: 'pointer',
            transition: 'transform 0.1s ease',
            '&:hover': {
                transform: 'scale(1.05)',
            },
            fontWeight: 'bold',
        },
    }),
);
