import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import SelectBox from './components/SelectBox';
import { makeStyles, createStyles } from '@mui/styles';
import { NativeLanguageChoices as choices } from '../../constant';
import { useDispatch } from 'react-redux';
import { updateOnboard } from '../../store/store';
import { getTypesFromValues } from '../../utility';
type Props = {
    handleStep: () => void;
};

const ChooseNativeLang = ({ handleStep }: Props) => {
    const [selectedItem, setSelectedItem] = useState<string>();
    const classes = useStyles();
    const dispatch = useDispatch();
    const handleUpdate = (name: string, value: string[]) => {
        return dispatch(updateOnboard({ name, value }));
    };

    const handleSelect = (item: string) => {
        handleUpdate('nativeLanguage', getTypesFromValues(choices, [item]));
        handleStep();
    };
    return (
        <Box className={classes.root}>
            <h2>What is your native language?</h2>
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

export default ChooseNativeLang;

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            width: '100%',
            height: '100%',
            gap: 20,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        btn: {
            background: '#55AD9B',
            width: '70%',
            padding: 10,
            borderRadius: 35,
            fontWeight: 'bold',
            color: 'white',
            height: '70px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
            cursor: 'pointer',
        },
    }),
);
