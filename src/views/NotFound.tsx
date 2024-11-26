import React from 'react';
import { Box } from '@mui/material';
import image1 from '../assets/image1.png';

const NotFound = () => {
    return (
        <Box
            sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10',
                flexDirection: 'column',
            }}
        >
            <img
                src={image1}
                alt="Vocake"
                style={{ filter: 'grayscale(100%)', width: '350px' }}
            />
            <p style={{ fontSize: '24px', fontWeight: 'bold' }}>
                Page Not Foud
            </p>
        </Box>
    );
};

export default NotFound;
