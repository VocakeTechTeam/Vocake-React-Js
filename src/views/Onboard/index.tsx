import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { makeStyles, createStyles } from '@mui/styles';
import Age from './Age';
import ChooseInterestedTopic from './ChooseInterestedTopic';
import ChooseMainChallenge from './ChooseMainChallenge';
import ChooseWhereToImp from './ChooseWhereToImp';
import HowOften from './HowOften';
import RateEnglish from './RateEnglish';
import ProgressBar from '../../components/ProgressBar';
import WhyBetterEnglish from './WhyBetterEnglish';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import image from '../../assets/IMG_1572 2.png';
import { VoCakeTitleIcon } from '../../assets/icon/VoCake';
import { useNavigate } from 'react-router-dom';
import ChooseLangWantToLearn from './ChooseLangWantToLearn';
import ChallengeReassure from './ChallengeReassure';

const Onboard = () => {
    const classes = useStyles();
    const [step, setStep] = useState<number>(1);
    const [challenge, setChallenge] = useState<string>('');
    const nav = useNavigate();
    useEffect(() => {
        if (step == totalStep + 1) {
            nav('/');
        }
    }, [step]);

    const handleStep = () => {
        if (step <= totalStep) {
            setStep(step + 1);
        }
    };
    const handleStepBack = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    };
    const handleChallenge = (challenge: string) => {
        setChallenge(challenge);
    };
    const arr = [
        <ChooseLangWantToLearn handleStep={handleStep} />,
        <WhyBetterEnglish handleStep={handleStep} />,
        <ChooseInterestedTopic handleStep={handleStep} />,
        <ChooseMainChallenge
            handleStep={handleStep}
            onSelect={handleChallenge}
        />,
        <ChallengeReassure handleStep={handleStep} challenge={challenge} />,
        <RateEnglish handleStep={handleStep} />,
        <ChooseWhereToImp handleStep={handleStep} />,
        <HowOften handleStep={handleStep} />,
        <Age handleStep={handleStep} />,
    ];
    const totalStep = arr.length;

    return (
        <Box className={classes.root}>
            <Box className={classes.headerContainer}>
                <img
                    style={{ width: '70px', height: '70px', cursor: 'pointer' }}
                    src={image}
                    alt="logo"
                    onClick={() => {
                        nav('/');
                    }}
                />
                <VoCakeTitleIcon width="90px" height="60px" />
            </Box>
            <Box className={classes.main}>
                <Box className={classes.secondContainer}>
                    <Box className={classes.firstContainer}>
                        <ChevronLeftIcon
                            className={classes.icon}
                            onClick={handleStepBack}
                        />
                        <ProgressBar
                            backgroundColor="#55AD9B"
                            totalStep={totalStep}
                            currentStep={step}
                        />
                        <p>
                            {step}/{totalStep}
                        </p>
                    </Box>
                    {arr[step - 1]}
                </Box>
            </Box>
        </Box>
    );
};

export default Onboard;

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
            flexDirection: 'column',
            padding: '10px 20px 0px 20px',
            gap: 10,
        },
        main: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: 30,
            backgroundColor: '#f3f3f3',
            alignItems: 'center',
            borderRadius: 30,
            paddingTop: '5%',
            padding: 30,
            minHeight: '85vh',
        },
        firstContainer: {
            display: 'flex',
            gap: 10,
            alignItems: 'center',
        },
        icon: {
            cursor: 'pointer',
        },
        headerContainer: {
            width: '100%',
            marginBottom: 'auto',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'row',
        },
        secondContainer: {
            width: '50%',
        },
    }),
);
