import React, { useState } from 'react';
import { makeStyles, createStyles } from '@mui/styles';
import { Box, Typography } from '@mui/material';
import SelectBox from './components/SelectBox';

type Props = {
    handleStep: () => void;
};

const Age = ({ handleStep }: Props) => {
    const classes = useStyles();
    const choices = [
        'Under 10 years old',
        'Between 10 and 20 years old',
        'Between 21 and 25 years old',
        'Between 26 and 35 years old',
        'Between 36 and 45 years old',
        'Between 46 and 55 years old',
        '56 years old or older',
    ];
    const [selectedItem, setSelectedItem] = useState<string | null>(null);
    const handleSelect = (item: string) => {
        setSelectedItem(item);
        handleStep();
    };
    return (
        <Box className={classes.root} >
            <Typography>How old are you</Typography>
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
