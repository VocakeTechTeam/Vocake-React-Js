import React from 'react';
import { Box, Typography } from '@mui/material';
import { CorrectIcon } from '../../assets/icon/CorrectIcon';
import FlagIcon from '../../assets/icon/FlagIcon';
import Cross from '../../assets/icon/Cross.svg';
type WrongProps = {
    handleClick: () => void;
};

const Wrong = ({ handleClick }: WrongProps) => {
    return (
        <Box
            sx={{
                width: '100%',
                background: '#FFDADC',
                alignItems: 'center',
                height: '100px',
                justifyContent: 'space-between',
                display: 'flex',
                paddingRight: 20,
                paddingLeft: 20,
            }}
        >
            <Box sx={{ display: 'flex', gap: 2 }}>
                <Box
                    sx={{
                        backgroundColor: 'white',
                        height: 70,
                        width: 70,
                        alignItems: 'center',
                        borderRadius: 100,
                        justifyContent: 'center',
                        display: 'flex',
                    }}
                >
                    <img src={Cross} alt="Cross Icon" />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Typography
                        fontWeight="bold"
                        color="#EE282D"
                        fontSize="18px"
                    >
                        Wrong!
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                        <FlagIcon color="#EE282D" />
                        <Typography color="#EE282D">Report</Typography>
                    </Box>
                </Box>
            </Box>
            <Box
                onClick={handleClick}
                sx={{
                    background: '#FF4347',
                    color: 'white',
                    padding: 2,
                    borderRadius: 5,
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    borderBottom: '#EE282D solid 2px',
                }}
            >
                Continue
            </Box>
        </Box>
    );
};

export default Wrong;
