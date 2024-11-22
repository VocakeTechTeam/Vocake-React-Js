import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import Correct from '../../components/Noti/Correct';

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
                width: '100px',
                height: '100px',
                border: isClicked
                    ? `${activeColor} solid 1px`
                    : 'black solid 1px',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: isClicked ? activeColor : 'black',
            }}
        >
            {word}
        </Box>
    );
};

export const RightMeaning = () => {
    const wordChoices = ['hâm mộ', 'chán nản', 'thông thái', 'trớ trêu'];
    const [clickedWord, setClickedWord] = useState<string>('');
    const [isCorrect, setIsCorrect] = useState<boolean>(false);
    const handleClick = (word: string) => {
        setClickedWord(word);
        setIsCorrect(true);
    };
    return (
        <Box
            sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems:"center"
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
                        justifyContent: 'space-between',
                        width: '100%',
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
            </Box>
            {isCorrect && (
                <Box sx={{ width: '100%', marginTop: 'auto' }}>
                    <Correct />
                </Box>
            )}
        </Box>
    );
};
