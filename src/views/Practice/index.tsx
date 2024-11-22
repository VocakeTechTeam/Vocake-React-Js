import { Box } from '@mui/material';
import React, { useState } from 'react';
import ProgressBar from '../../components/ProgressBar';
import { createStyles, makeStyles } from '@mui/styles';
import CloseIcon from '@mui/icons-material/Close';
import { RightMeaning } from './RightMeaning';
import { WriteWhatYouHear } from './WriteWhatYouHear';
import { FinalStep } from './FinalStep';
import FlashCard from './FlashCard';

const arr = [<FlashCard />, <WriteWhatYouHear />, <RightMeaning />];

const Practice = () => {
    const [step, setStep] = useState<number>(1);
    const totalStep = 3;
    const handleProgress = () => {
        if (step <= totalStep) {
            setStep(step + 1);
        }
    };
    const classes = useStyles();
    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Enter') {
            handleProgress();
        }
    };
    return (
        <Box className={classes.root} onKeyDown={handleKeyDown} tabIndex={0}>
            {step <= totalStep ? (
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        height: '100%',
                    }}
                >
                    <Box
                        sx={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 2,
                        }}
                    >
                        <CloseIcon sx={{ cursor: 'pointer' }} />
                        <Box sx={{ width: '70%' }}>
                            <ProgressBar
                                totalStep={totalStep}
                                currentStep={step}
                            />
                        </Box>
                    </Box>
                    {arr[step - 1]}
                </Box>
            ) : (
                <FinalStep />
            )}
        </Box>
    );
};

export default Practice;

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            padding: '5px',
            width: '100%',
            flexDirection: 'column',
            display: 'flex',
            alignItems: 'center',
            height: '100%',
        },
    }),
);
