import React, { useState } from 'react';
import { makeStyles, createStyles } from '@mui/styles';
import { Box, Typography } from '@mui/material';
import SelectBox from './components/SelectBox';
import { HowOftenChoices as choices } from '../../constant';
import { useDispatch } from 'react-redux';
import { updateOnboard } from '../../store/store';
import { getTypesFromValues } from '../../utility';
type Props = {
    handleStep: () => void;
};

const HowOften = ({ handleStep }: Props) => {
    const classes = useStyles();
    const [selectedItem, setSelectedItem] = useState<string | null>(null);
    const handleSelect = (item: string) => {
        handleUpdate('practiceEnglish', getTypesFromValues(choices, [item]));
        handleStep();
    };
    const dispatch = useDispatch();
    const handleUpdate = (name: string, value: string[]) => {
        return dispatch(updateOnboard({ name, value }));
    };
    return (
        <Box className={classes.root}>
            <h2>How often do you want to practice English?</h2>
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
