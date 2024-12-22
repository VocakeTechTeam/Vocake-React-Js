import React, { useState } from 'react';
import { makeStyles, createStyles } from '@mui/styles';
import { Box } from '@mui/material';
import SelectBox from './components/SelectBox';
import { AgeChoices as choices } from '../../constant';
import { useDispatch } from 'react-redux';
import { updateOnboard } from '../../store/store';
type Props = {
    handleStep: () => void;
};

const Age = ({ handleStep }: Props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const handleUpdate = (name: string, value: string) => {
        return dispatch(updateOnboard({ name, value }));
    };
    const [selectedItem, setSelectedItem] = useState<string | null>(null);
    const handleSelect = (item: string) => {
        handleUpdate('rangeAge', item);
        handleStep();
    };
    return (
        <Box className={classes.root}>
            <h2>How old are you</h2>
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
