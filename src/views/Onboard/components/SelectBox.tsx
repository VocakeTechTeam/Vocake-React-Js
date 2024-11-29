import React from 'react';
import { makeStyles, createStyles } from '@mui/styles';
import { Box } from '@mui/material';
type Props = {
    name: string;
    isSelected: boolean;
    handleClick: (item: string) => void;
};

const SelectBox = ({ isSelected = false, name, handleClick }: Props) => {
    const activeColor = '#55AD9B';
    const classes = useStyles();
    return (
        <Box
            onClick={() => {
                handleClick(name);
            }}
            className={classes.root}
            // sx={{
            //     border: isSelected
            //         ? `${activeColor} solid 1px`
            //         : 'gray solid 1px',
            // }}
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
            background: 'white',
            height: 60,
            '&:hover': {
                transform: 'scale(1.05)',
            },
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            paddingLeft: 20,
            boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
        },
    }),
);
