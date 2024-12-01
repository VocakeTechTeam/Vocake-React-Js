import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import SelectBox from './components/SelectBox';
import { makeStyles, createStyles } from '@mui/styles';

type Props = {
    handleStep: () => void;
    onSelect: (challenge: string) => void;
};

const ChooseMainChallenge = ({ handleStep, onSelect }: Props) => {
    const [selectedItem, setSelectedItem] = useState<string | null>(null);
    const classes = useStyles();
    const choices = [
        "⏰ It's hard to find time",
        "🚀 It's hard to stay motivated",
        '🧠 Remembering what I learned',
        '😔 English might be too hard',
    ];
    const handleSelect = (item: string) => {
        setSelectedItem(item);
        onSelect(item);
        handleStep();
    };
    return (
        <Box className={classes.root}>
            <h2>What is the main challenge for you in learning English?</h2>
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
                        isActive={true}
                    />
                );
            })}
        </Box>
    );
};

export default ChooseMainChallenge;

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
