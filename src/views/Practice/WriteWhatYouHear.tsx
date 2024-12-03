import React from 'react';
import { useState } from 'react';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { WordFill } from './WordFill';
import Correct from '../../components/Noti/Correct';
import { TurtleIcon } from '../../assets/icon/TurtleIcon';
export const WriteWhatYouHear = () => {
    const word = 'ironic';
    const [typedKey, setTypedKey] = useState<string[]>([]);
    const [matched, setMatched] = useState<boolean>(false);

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        const charSet = new Set(word);
        if (word.split('').includes(event.key)) {
            const newTypedKey = [...typedKey, event.key];
            setTypedKey(newTypedKey);
        }
        if (typedKey.length == charSet.size) {
            setMatched(true);
        }
    };
    return (
        <Box
            sx={{
                width: '100%',
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
            }}
        >
            <Box
                onKeyDown={handleKeyDown}
                tabIndex={0}
                sx={{
                    width: '50%',
                    marginTop: '30px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 4,
                    marginBottom: 'auto',
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
                        Write what you hear
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 5, alignItems: 'flex-end' }}>
                    <Box
                        sx={{
                            background: '#EAB355',
                            width: '80px',
                            height: '80px',
                            alignItems: 'center',
                            justifyContent: 'center',
                            display: 'flex',
                            borderRadius: '25px',
                            boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
                            cursor: 'pointer',
                            borderBottom: '#1999d6 solid 3px',
                        }}
                    >
                        <VolumeUpIcon
                            sx={{
                                color: 'white',
                                height: '40px',
                                width: '40px',
                            }}
                        />
                    </Box>
                    <Box
                        sx={{
                            background: '#EAB355',
                            width: '50px',
                            height: '50px',
                            alignItems: 'center',
                            justifyContent: 'center',
                            display: 'flex',
                            borderRadius: '15px',
                            boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
                            cursor: 'pointer',
                            borderBottom: '#1999d6 solid 3px',
                            padding: '5px',
                        }}
                    >
                        <TurtleIcon />
                    </Box>
                </Box>

                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-around',
                        gap: 3,
                    }}
                >
                    {word.split('').map((item, index) => {
                        let isDisplayed = false;
                        if (typedKey.includes(item)) {
                            isDisplayed = true;
                        }
                        return (
                            <WordFill
                                isDisplayed={isDisplayed}
                                char={item}
                                key={index}
                            />
                        );
                    })}
                </Box>
            </Box>
            {matched && (
                <Box sx={{ width: '100%', marginTop: 'auto' }}>
                    <Correct />
                </Box>
            )}
        </Box>
    );
};
