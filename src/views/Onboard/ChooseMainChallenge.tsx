import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import SelectBox from './components/SelectBox';
import { makeStyles, createStyles } from '@mui/styles';
import { MainChallengeChoices as choices } from '../../constant';
import { useDispatch } from 'react-redux';
import { updateOnboard } from '../../store/store';
type Props = {
    handleStep: () => void;
    onSelect: (challenge: string) => void;
};

const ChooseMainChallenge = ({ handleStep, onSelect }: Props) => {
    const [selectedItem, setSelectedItem] = useState<string | null>(null);
    const classes = useStyles();
    const handleSelect = (item: string) => {
        handleUpdate('challengeInEnglish', [item]);
        onSelect(item);
        handleStep();
    };
    const dispatch = useDispatch();
    const handleUpdate = (name: string, value: string[]) => {
        return dispatch(updateOnboard({ name, value }));
    };
    return (
        <Box className={classes.root}>
            <h2>What is the main challenge for you in learning English?</h2>
            {choices.map((item, index) => {
                let isSelected = false;
                if (item.value == selectedItem) {
                    isSelected = true;
                }
                return (
                    <SelectBox
                        key={index}
                        handleClick={handleSelect}
                        name={item.value}
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
