import React from 'react';
import { makeStyles, createStyles } from '@mui/styles';
import { Box } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';

type Props = {
    name: string;
    isSelected: boolean;
    handleClick: (item: string) => void;
    isActive: boolean;
};

const SelectBox = ({
    isSelected = false,
    name,
    handleClick,
    isActive = true,
}: Props) => {
    const selectedColor = '#55AD9B';
    const classes = useStyles(isActive);
    return (
        <Box
            onClick={() => {
                handleClick(name);
            }}
            className={classes.root}
            sx={{
                '&:hover': {
                    transform: isActive ? 'scale(1.05)' : 'none',
                },
                opacity: isActive ? 1 : 0.5,
                pointerEvents: isActive ? 'auto' : 'none',
                backgroundColor: isActive ? 'white' : '#F5F5F7',
                border: isSelected ? `${selectedColor} solid 2px` : '',
                color: isSelected ? selectedColor : 'black',
            }}
        >
            <p>{name}</p>
            {!isActive && <p>Coming soon</p>}
            {isSelected && (
                <DoneIcon sx={{ fontSize: '24px', strokeWidth: '10' }} />
            )}
        </Box>
    );
};

export default SelectBox;

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            width: '100%',
            padding: '5px 20px',
            borderRadius: 10,
            cursor: 'pointer',
            transition: 'transform 0.1s ease',
            background: 'white',
            height: 60,
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
    }),
);
