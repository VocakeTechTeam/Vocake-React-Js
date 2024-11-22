import { Box, Typography } from '@mui/material';
import image from '../../assets/IMG_1580 1.png';
import ProgressBar from '../../components/ProgressBar';

export const FinalStep = () => {
    return (
        <Box
            sx={{
                height: '100%',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <img style={{ width: '100px' }} src={image} alt="congratulation" />
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <ProgressBar currentStep={1} totalStep={3} />
                <Typography sx={{ fontWeight: 'bold' }}>
                    Congratulations
                </Typography>
                <Typography>Practice Complete!</Typography>
                <Typography>Challenge to gain extra points</Typography>
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
                    borderTop: 'gray solid 1px',
                }}
            >
                <Typography sx={{ fontSize: '14px' }}>REVIEW LESSON</Typography>
                <Typography sx={{ fontSize: '14px' }}>CHALLENGE</Typography>
            </Box>
        </Box>
    );
};
