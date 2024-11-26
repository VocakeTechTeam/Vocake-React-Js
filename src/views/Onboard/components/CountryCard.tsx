import React from 'react';
import spanish from '../../../assets/CountryFlag/Spanish.png';
import { Box } from '@mui/material';

type CountryCardProps = {
    imageurl: string;
    language: string;
    numblearner: number;
};

const CountryCard = () => {
    return (
        <Box
            sx={{
                border: 'black solid 1px',
                padding: '10px',
                borderRadius: '10px',
                borderBottom: 'black solid 2px',
                borderTop: 'black solid 2px',
                flexShrink: 0,
                cursor: 'pointer',
            }}
        >
            <img src={spanish} alt="language" />
            <p>spanish</p>
            <p>33.3M learners</p>
        </Box>
    );
};

export default CountryCard;
