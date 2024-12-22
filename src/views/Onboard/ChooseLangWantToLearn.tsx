import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import SelectBox from './components/SelectBox';
import { makeStyles, createStyles } from '@mui/styles';
import { LanguageWantToLearnChoices as choices } from '../../constant';
import { useDispatch } from 'react-redux';
import { updateOnboard } from '../../store/store';
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
    const handleSelect = (item: string) => {
        handleUpdate('languageLearn', item);
        handleStep();
    };
    const dispatch = useDispatch();
    const handleUpdate = (name: string, value: string) => {
        return dispatch(updateOnboard({ name, value }));
    };

    return (
        <Box className={classes.root}>
            <h2>What language do you want to learn?</h2>
            {choices.map((item, index) => {
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
