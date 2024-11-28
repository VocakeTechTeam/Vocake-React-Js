import React, { useState } from 'react';
import { makeStyles, createStyles } from '@mui/styles';
import { Box, Typography } from '@mui/material';
import SelectBox from './components/SelectBox';

type Props = {
    handleStep: () => void;
};

const ChooseWhereToImp = ({ handleStep }: Props) => {
    const classes = useStyles();
    const choices = [
        'Improve pronunciation',
        'Gain confidence in speaking',
        'Learn useful words and phrases',
        'Improve my listening skills',
        'Others',
    ];
    const [selectedItem, setSelectedItem] = useState<string | null>(null);
    const handleSelect = (item: string) => {
        setSelectedItem(item);
        handleStep();
    };
    return (
        <Box className={classes.root}>
            <Typography>
                Where would you like Speak to help you improve?
            </Typography>
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

export default ChooseWhereToImp;

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
