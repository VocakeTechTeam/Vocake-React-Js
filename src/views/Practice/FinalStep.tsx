import { Box, Typography } from '@mui/material';
import image from '../../assets/IMG_1580 1.png';
import ProgressBar from './components/ProgressBar';
export const FinalStep = () => {
    return (
        <Box
            sx={{
                height: '100%',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 2,
            }}
        >
            <img style={{ width: '100px' }} src={image} alt="congratulation" />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    alignItems: 'center',
                }}
            >
                <ProgressBar currentStep={2} totalStep={3} />
                <Typography sx={{ fontWeight: 'bold' }}>
                    Congratulations
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <Typography color="#777777" fontWeight="500">
                        Practice Complete!{' '}
                    </Typography>
                    <Typography fontWeight="bold" color="#FFC800">
                        +10 XP
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <Typography color="#777777" fontWeight="500">
                        Challenge to gain extra points{' '}
                    </Typography>
                    <Typography fontWeight="bold" color="#FFC800">
                        +3 XP
                    </Typography>
                </Box>
            </Box>
            <Box
                sx={{
                    marginTop: 'auto',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: ' 0 15px',
                    height: '150px',
                    alignItems: 'center',
                    borderTop: '#E5E5E5 solid 1px',
                }}
            >
                <Box
                    sx={{
                        border: '#E1E1E1 solid 2px',
                        borderBottom: '#E1E1E1 solid 3px',
                        padding: '10px',
                        borderRadius: '16px',
                        cursor: 'pointer',
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: '14px',
                            color: '#A6A6A6',
                            fontWeight: '700',
                        }}
                    >
                        REVIEW LESSON
                    </Typography>
                </Box>
                <Box
                    sx={{
                        background: '#FE6876',
                        padding: '10px',
                        borderRadius: '16px',
                        borderBottom: '#FECED3 solid 3px',
                        cursor: 'pointer',
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: '14px',
                            color: '#FFFDE3',
                            fontWeight: '700',
                        }}
                    >
                        CHALLENGE
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};
