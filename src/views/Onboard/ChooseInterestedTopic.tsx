import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import SelectBox from './components/SelectBox';
import { makeStyles, createStyles } from '@mui/styles';
import { InterestedTopicChoices as choices } from '../../constant';
import { useDispatch } from 'react-redux';
import { updateOnboard } from '../../store/store';
type Props = {
    handleStep: () => void;
};

const ChooseInterestedTopic = ({ handleStep }: Props) => {
    const [selectedItem, setSelectedItem] = useState<string[]>([]);
    const dispatch = useDispatch();
    const handleUpdate = (name: string, value: string[]) => {
        return dispatch(updateOnboard({ name, value }));
    };
    const handleContinue = () => {
        handleUpdate('topicInterest', selectedItem);
        handleStep();
    };
    const classes = useStyles();
    const handleSelect = (item: string) => {
        setSelectedItem((prev) => {
            if (prev.includes(item)) {
                return prev.filter((i) => i !== item);
            } else {
                return [...prev, item];
            }
        });
    };
    return (
        <Box className={classes.root}>
            <h2>What topics are you interested in?</h2>

            {choices.map((item, index) => {
                let isSelected = false;
                if (selectedItem.includes(item)) {
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
            <Box
                onClick={handleContinue}
                sx={{ display: selectedItem.length >= 1 ? '' : 'none' }}
                className={classes.btn}
            >
                Continue
            </Box>
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
