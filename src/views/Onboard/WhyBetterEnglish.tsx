import React, { useState } from 'react';
import { makeStyles, createStyles } from '@mui/styles';
import { Box, Typography } from '@mui/material';
import SelectBox from './components/SelectBox';

type Props = {
    handleStep: () => void;
};

const WhyBetterEnglish = ({ handleStep }: Props) => {
    const classes = useStyles();
    const choices = [
        '🚗 Travel or live abroad',
        '🚀 Accelerate my career',
        '🎙️ Talk to foereigners',
        '🕹️ Self improvement',
        '👶 Speak English to my kids',
        'Other',
    ];
    const [selectedItem, setSelectedItem] = useState<string | null>(null);
    const handleClickItem = (item: string) => {
        setSelectedItem(item);
        handleStep();
    };
    return (
        <Box className={classes.root}>
            <h2>Why do you want to get better at speaking English?</h2>
            {choices.map((item, index) => {
                let isSelected = false;
                if (item == selectedItem) {
                    isSelected = true;
                }
                return (
                    <SelectBox
                        key={index}
                        handleClick={handleClickItem}
                        name={item}
                        isSelected={isSelected}
                        isActive={true}
                    />
                );
            })}
        </Box>
    );
};

export default WhyBetterEnglish;

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
