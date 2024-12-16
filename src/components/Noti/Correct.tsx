import React from 'react';
import { Box, Typography } from '@mui/material';
import { CorrectIcon } from '../../assets/icon/CorrectIcon';
import FlagIcon from '../../assets/icon/FlagIcon';

type CorrectProps = {
    handleClick: () => void;
};

const Correct = ({ handleClick }: CorrectProps) => {
    return (
        <Box
            sx={{
                width: '100%',
                background: '#FFFDE3',
                alignItems: 'center',
                height: '100px',
                justifyContent: 'space-between',
                display: 'flex',
                paddingRight: 20,
                paddingLeft: 20,
            }}
        >
            <Box sx={{ display: 'flex', gap: 2 }}>
                <CorrectIcon width="80px" height="80px" color="#12826B" />
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
                        color="#12826B"
                        fontSize="18px"
                    >
                        Excellent!
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                        <FlagIcon color="#12826B" />
                        <Typography color="#12826B">Report</Typography>
                    </Box>
                </Box>
            </Box>
            <Box
                onClick={handleClick}
                sx={{
                    background: '#12826B',
                    color: 'white',
                    padding: 2,
                    borderRadius: 5,
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    borderBottom: '#489D26 solid 2px',
                }}
            >
                Continue
            </Box>
        </Box>
    );
};

export default Correct;
