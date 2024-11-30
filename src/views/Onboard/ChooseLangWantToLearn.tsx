import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import SelectBox from './components/SelectBox';
import { makeStyles, createStyles } from '@mui/styles';
type Props = {
    handleStep: () => void;
};
type ChoiceProps = {
    name: string;
    isActive: boolean;
};
const ChooseLangWantToLearn = ({ handleStep }: Props) => {
    const [selectedItem, setSelectedItem] = useState<string | null>(null);
    const classes = useStyles();
    const choies: ChoiceProps[] = [
        { name: '🇺🇸 English', isActive: true },
        { name: '🇫🇮 Finnish', isActive: false },
    ];
    const handleSelect = (item: string) => {
        setSelectedItem(item);
        handleStep();
    };
    return (
        <Box className={classes.root}>
            <h2>What language do you want to learn</h2>
            {choies.map((item, index) => {
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

export default ChooseLangWantToLearn;

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
