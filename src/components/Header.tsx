import React from 'react';
import { makeStyles, createStyles } from '@mui/styles';
import { Box, Typography } from '@mui/material';
import SearchBar from './SearchBar';
import logo from '../assets/IMG_1572 2.png';
import { Avatar } from '@mui/material';
import { VoCakeTitleIcon } from '../assets/icon/VoCake';
import { StarIcon } from '../assets/icon/StarIcon';
import { useNavigate } from 'react-router-dom';
import { Theme, useTheme } from '@mui/material/styles';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import useMediaQuery from '@mui/material/useMediaQuery';

type Props = {
    toggleSideBar?: () => void;
};

export const Header = ({ toggleSideBar }: Props) => {
    const classes = useStyles();
    const nav = useNavigate();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box className={classes.root}>
            <Box
                className={classes.logoTitleContainer}
                onClick={() => {
                    nav('/');
                }}
            >
                {matches && (
                    <DensityMediumIcon
                        onClick={toggleSideBar}
                        sx={{ color: 'white' }}
                    />
                )}
                <img style={{ width: '50px' }} src={logo} alt="logo" />
                <VoCakeTitleIcon width="100px" />
            </Box>
            <Box className={classes.searchBarContainer}>
                <SearchBar />
            </Box>
            <Box className={classes.userHeaderContainer}>
                <Box className={classes.languageContainer}>
                    <StarIcon color={'yellow'} />
                </Box>
                <Box className={classes.premiumContainer}>
                    <Typography
                        color="#FE6876"
                        fontWeight="bold"
                        fontSize={'15px'}
                    >
                        premium
                    </Typography>
                </Box>
                <Avatar
                    alt="Remy Sharp"
                    src="https://thumbs.dreamstime.com/b/generative-ai-young-smiling-man-avatar-man-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-d-vector-people-279560903.jpg"
                />
            </Box>
        </Box>
    );
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
            display: 'flex',
            flexDirection: 'row',
            padding: '10px',
            paddingRight: '15px',
        },
        searchBarContainer: {
            width: '30%',
        },
        logoTitleContainer: {
            height: '50px',
            width: '150px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-end',
            marginLeft: 5,
            cursor: 'pointer',
            [theme.breakpoints.down('md')]: {
                '& svg:nth-of-type(2)': {
                    display: 'none',
                },
                width: 'max-content',
                '& svg:nth-of-type(1)': {
                    display: 'block',
                },
            },
            '& svg': {
                bottom: '10px',
                position: 'relative',
            },
        },
        userHeaderContainer: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            minWidth: '190px',
        },
        premiumContainer: {
            background: '#FFFDE3',
            padding: '5px 20px',
            borderRadius: '10px',
            border: 'black solid 1px',
        },
        languageContainer: {
            backgroundColor: 'red',
            alignItems: 'center',
            justifyContent: 'center',
            display: 'red',
            borderRadius: '8px',
            border: 'black solid 1px',
        },
    }),
);
