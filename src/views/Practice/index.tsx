import { Box } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import ProgressBar from '../../components/ProgressBar';
import { createStyles, makeStyles } from '@mui/styles';
import CloseIcon from '@mui/icons-material/Close';
import { RightMeaning } from './RightMeaning';
import { WriteWhatYouHear } from './WriteWhatYouHear';
import { FinalStep } from './FinalStep';
import FlashCard from './FlashCard';
import { useNavigate } from 'react-router-dom';

const Practice = () => {
    const [step, setStep] = useState<number>(1);
    const totalStep = 3;
    const nav = useNavigate();
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (ref.current) {
            ref.current.focus();
        }
    });

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
        if (event.key == 'ArrowRight' && step <= totalStep) {
            setStep((prev) => prev + 1);
        }
        if (event.key == 'ArrowLeft' && step > 1) {
            setStep((prev) => prev - 1);
        }
    };
    const arr = [
        <FlashCard />,
        <WriteWhatYouHear handleProgress={handleProgress} />,
        <RightMeaning handleProgress={handleProgress} />,
    ];

    return (
        <Box
            ref={ref}
            className={classes.root}
            onKeyDown={handleKeyDown}
            tabIndex={0}
        >
            {step <= totalStep ? (
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        height: '100%',
                        paddingTop: '20px',
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
                        <div
                            onClick={() => {
                                nav('/');
                            }}
                            style={{ display: 'flex', alignItems: 'center' }}
                        >
                            <CloseIcon sx={{ cursor: 'pointer' }} />
                        </div>
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
            width: '100%',
            flexDirection: 'column',
            display: 'flex',
            alignItems: 'center',
            height: '100%',
        },
    }),
);
