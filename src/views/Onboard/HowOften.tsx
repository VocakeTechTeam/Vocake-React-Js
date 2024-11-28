import React, { useState } from 'react';
import { makeStyles, createStyles } from '@mui/styles';
import { Box, Typography } from '@mui/material';
import SelectBox from './components/SelectBox';

type Props = {
    handleStep: () => void;
};

const HowOften = ({ handleStep }: Props) => {
    const classes = useStyles();
    const choices = [
        'A few minutes a day',
        'A few times each day',
        'A few times each month',
        'I cant commit right now',
    ];
    const [selectedItem, setSelectedItem] = useState<string | null>(null);
    const handleSelect = (item: string) => {
        setSelectedItem(item);
        handleStep();
    };
    return (
        <Box className={classes.root}>
            <h2>How often do you want to practice English?</h2>
            {choices.map((item, index) => {
                let isSelected = false;
                if (item == selectedItem) {
                    isSelected = true;
                }
                return (
                    <SelectBox
                        key={index}
                        handleClick={handleSelect}
                        name={item}
                        isSelected={isSelected}
                    />
                );
            })}
        </Box>
    );
};

export default HowOften;

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            width: '100%',
            height: '100%',
            gap: 20,
            display: 'flex',
            flexDirection: 'column',
        },
    }),
);
