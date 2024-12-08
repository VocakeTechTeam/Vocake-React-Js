import { Box, Typography } from '@mui/material';
import React from 'react';
type Props = {
    percent: string;
    title: string;
    size: string;
    color: string;
    percentSize: string;
    titleSize: string;
    sx?: React.CSSProperties;
};
const Circle = ({
    percent,
    title,
    size,
    color,
    percentSize,
    titleSize,
    sx,
}: Props) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: size,
                width: size,
                background: color,
                borderRadius: '1000px',
                ...sx,
            }}
        >
            <Typography fontSize={percentSize} color="white">
                {percent}
            </Typography>
            <Typography fontSize={titleSize} color="white">
                {title}
            </Typography>
        </Box>
    );
};

export default Circle;
