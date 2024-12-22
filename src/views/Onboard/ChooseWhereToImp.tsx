import React, { useState } from 'react';
import { makeStyles, createStyles } from '@mui/styles';
import { Box, Typography } from '@mui/material';
import SelectBox from './components/SelectBox';
import { ChooseWhereToImpChoices as choices } from '../../constant';
import { useDispatch } from 'react-redux';
import { updateOnboard } from '../../store/store';
type Props = {
    handleStep: () => void;
};

const ChooseWhereToImp = ({ handleStep }: Props) => {
    const classes = useStyles();
    const [selectedItem, setSelectedItem] = useState<string | null>(null);
    const handleSelect = (item: string) => {
        handleUpdate('improveEnglish', item);
        handleStep();
    };
    const dispatch = useDispatch();
    const handleUpdate = (name: string, value: string) => {
        return dispatch(updateOnboard({ name, value }));
    };
    return (
        <Box className={classes.root}>
            <h2>Where would you like Vocake to help you improve?</h2>
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
