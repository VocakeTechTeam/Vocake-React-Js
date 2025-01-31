import React from 'react';
import { createStyles, makeStyles } from '@mui/styles';
import { Box, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';

type CardProps = {
    cardName: string;
    numbOfTerms: number;
    userName: string;
    id: string;
    isActive: boolean;
    activeColor: string;
};

const Card = ({
    id,
    cardName,
    numbOfTerms,
    userName,
    isActive,
    activeColor,
}: CardProps) => {
    const classes = useStyles();
    const nav = useNavigate();

    return (
        <Box
            onClick={() => {
                nav(`/mylist/list/${id}`);
            }}
            className={classes.root}
            sx={{
                backgroundColor: isActive ? activeColor : '#FFFDE3',
            }}
        >
            <Box
                sx={{
                    gap: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                }}
            >
                <Typography fontSize={'15px'} fontWeight="bold">
                    {cardName}
                </Typography>
                <Typography
                    fontSize={'13px'}
                    fontWeight="700"
                    sx={{ left: 4, position: 'relative' }}
                >
                    {numbOfTerms} term
                </Typography>
            </Box>

            <Box className={classes.userContainer}>
                <Avatar sx={{ width: 35, height: 35 }} />
                <Typography fontSize={'13px'}>{userName}</Typography>
            </Box>
        </Box>
    );
};

export default Card;

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            width: '291px',
            height: '178px',
            borderRadius: 32,
            padding: 20,
            flexShrink: 0,
            alignItems: 'flex-start',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            cursor: 'pointer',
        },
        userContainer: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
        },
    }),
);
