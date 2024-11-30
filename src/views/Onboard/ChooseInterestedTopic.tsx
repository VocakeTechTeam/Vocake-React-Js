import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import SelectBox from './components/SelectBox';
import { makeStyles, createStyles } from '@mui/styles';

type Props = {
    handleStep: () => void;
};

const ChooseInterestedTopic = ({ handleStep }: Props) => {
    const [selectedItem, setSelectedItem] = useState<string | null>(null);
    const classes = useStyles();
    const choies = [
        '📌 Business',
        '🚖 Travel',
        '🎱 Entertainment',
        '👯‍♀️ Socializing',
        '🧫 Culture',
        '❤️ Dating',
        '🛒 Shopping',
        '🌭 Food',
        '🏠 Family',
    ];
    const handleSelect = (item: string) => {
        setSelectedItem(item);
        handleStep();
    };
    return (
        <Box className={classes.root}>
            <h2>What topics are you interested in?</h2>

            {choies.map((item, index) => {
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

export default ChooseInterestedTopic;

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
