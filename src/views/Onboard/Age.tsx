import React, { useState } from 'react';
import { makeStyles, createStyles } from '@mui/styles';
import { Box, Typography } from '@mui/material';
import SelectBox from './components/SelectBox';

type Props = {
    handleStep: () => void;
};

type ChoiceProps = {
    name: string;
    isActive: boolean;
};

const Age = ({ handleStep }: Props) => {
    const classes = useStyles();
    const choices: ChoiceProps[] = [
        { name: 'Under 10 years old', isActive: true },
        { name: 'Between 10 and 20 years old', isActive: true },
        { name: 'Between 21 and 25 years old', isActive: true },
        { name: 'Between 26 and 35 years old', isActive: true },
        { name: 'Between 36 and 45 years old', isActive: true },
        { name: 'Between 46 and 55 years old', isActive: true },
        { name: '56 years old or older', isActive: true },
    ];
    const [selectedItem, setSelectedItem] = useState<string | null>(null);
    const handleSelect = (item: string) => {
        setSelectedItem(item);
        handleStep();
    };
    return (
        <Box className={classes.root}>
            <h2>How old are you</h2>
            {choices.map((item, index) => {
                let isSelected = false;
                if (item.name == selectedItem) {
                    isSelected = true;
                }
                return (
                    <SelectBox
                        key={index}
                        handleClick={handleSelect}
                        name={item.name}
                        isSelected={isSelected}
                        isActive={item.isActive}
                    />
                );
            })}
        </Box>
    );
};

export default Age;

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
