import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import Correct from '../../components/Noti/Correct';
import Wrong from '../../components/Noti/Wrong';

type ChoiceProps = {
    word: string;
    isClicked: boolean;
    handleClick: (word: string) => void;
};

const Choice = ({ isClicked, word, handleClick }: ChoiceProps) => {
    const activeColor = '#EAB355';
    return (
        <Box
            onClick={() => {
                handleClick(word);
            }}
            sx={{
                width: '130px',
                height: '130px',
                border: isClicked
                    ? `${activeColor} solid 2px`
                    : 'black solid 1px',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: isClicked ? activeColor : 'black',
                flexShrink: 0,
            }}
        >
            {word}
        </Box>
    );
};

type RightMeaningProps = {
    handleProgress: () => void;
};

export const RightMeaning = ({ handleProgress }: RightMeaningProps) => {
    const wordChoices = ['hâm mộ', 'chán nản', 'thông thái', 'trớ trêu'];
    const [clickedWord, setClickedWord] = useState<string>('');
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const handleClick = (word: string) => {
        setClickedWord(word);
    };

    const handleChek = () => {
        if (clickedWord == 'trớ trêu') {
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }
    };
    return (
        <Box
            sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Box
                sx={{
                    cursor: 'pointer',
                    width: '50%',
                    marginTop: '30px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 4,
                }}
            >
                <Box
                    sx={{ display: 'flex', alignItems: 'start', width: '100%' }}
                >
                    <Typography
                        sx={{
                            fontWeight: 'bold',
                            fontSize: '26px',
                        }}
                    >
                        What's the right meaning of 'ironic'?
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        gap: 5,
                        justifyContent: 'center',
                    }}
                >
                    {wordChoices.map((item, index) => {
                        let isClicked = false;
                        if (item === clickedWord) {
                            isClicked = true;
                        }
                        return (
                            <Choice
                                handleClick={handleClick}
                                key={index}
                                isClicked={isClicked}
                                word={item}
                            />
                        );
                    })}
                </Box>
                <Box
                    onClick={handleChek}
                    sx={{
                        backgroundColor: '#55AD9B',
                        width: '200px',
                        color: 'white',
                        borderRadius: '10px',
                        cursor: 'pointer',
                        borderBottom: '#489D26 solid 3px',
                        fontWeight: 'bold',
                    }}
                >
                    Check
                </Box>
            </Box>
            {isCorrect && (
                <Box sx={{ width: '100%', marginTop: 'auto' }}>
                    <Correct handleClick={handleProgress} />
                </Box>
            )}
            {isCorrect == false && (
                <Box sx={{ width: '100%', marginTop: 'auto' }}>
                    <Wrong handleClick={handleProgress} />
                </Box>
            )}
        </Box>
    );
};
