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
import SearchBarTeacher from './SearchBarTeacher';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
type Props = {
    toggleSideBar?: () => void;
};

const UserContainer = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 2,
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    background: '#FFE6CC',
                    height: 30,
                    width: 30,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 100,
                }}
            >
                🍔
            </Box>
            <Typography style={{fontSize:12}}>Mai Thuong Bui</Typography>
            <KeyboardArrowDownIcon sx={{ color: '#B0C3CC', strokeWidth: 1 }} />
        </Box>
    );
};

export const HeaderTeacher = ({ toggleSideBar }: Props) => {
    const classes = useStyles();
    const nav = useNavigate();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box className={classes.root}>
            <Box className={classes.searchBarContainer}>
                <SearchBarTeacher />
            </Box>
            <Box sx={{display:"flex", flexDirection:"row", gap:5}} >
                <UserContainer />
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#B0C3CC"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M14.4553 2.47362C13.6943 2.16764 12.865 2 12 2C8.64392 2 5.82455 4.52345 5.45393 7.85899L5.20213 10.1252L5.19608 10.1793C5.08325 11.1625 4.76321 12.1106 4.25708 12.9611L4.22913 13.0077L3.6511 13.9711L3.62695 14.0114C3.38543 14.4138 3.16661 14.7785 3.02086 15.0879C2.87274 15.4024 2.71437 15.8286 2.7906 16.3117C2.86595 16.7893 3.11173 17.2233 3.48245 17.5337C3.85752 17.8476 4.3044 17.931 4.65029 17.9658C4.99066 18.0001 5.41591 18 5.8853 18L5.9322 18H18.0677L18.1146 18C18.584 18 19.0093 18.0001 19.3497 17.9658C19.6955 17.931 20.1424 17.8476 20.5175 17.5337C20.8882 17.2233 21.134 16.7893 21.2093 16.3117C21.2856 15.8286 21.1272 15.4024 20.9791 15.0879C20.8333 14.7785 20.6145 14.4138 20.373 14.0114L20.3488 13.9711L19.7708 13.0077L19.7429 12.9611C19.3641 12.3247 19.0896 11.6336 18.9281 10.914C18.6274 10.9705 18.3171 11 18 11C17.616 11 17.2422 10.9567 16.883 10.8748C17.0676 11.9715 17.4541 13.0259 18.0242 13.9839L18.0558 14.0367L18.6339 15.0001C18.9074 15.456 19.0722 15.733 19.1697 15.9401C19.175 15.9514 19.1799 15.9621 19.1844 15.972C19.1736 15.9733 19.1619 15.9746 19.1495 15.9759C18.9217 15.9988 18.5993 16 18.0677 16H5.9322C5.40061 16 5.07823 15.9988 4.85049 15.9759C4.83804 15.9746 4.82639 15.9733 4.81553 15.972C4.82001 15.9621 4.8249 15.9514 4.83024 15.9401C4.92776 15.733 5.09258 15.456 5.36609 15.0001L5.94412 14.0367L5.97575 13.9839C6.6265 12.8904 7.03797 11.6714 7.18304 10.4073L7.1899 10.3461L7.4417 8.07985C7.69977 5.75718 9.66301 4 12 4C12.463 4 12.9113 4.06898 13.3347 4.19767C13.5866 3.54594 13.9712 2.96023 14.4553 2.47362ZM16.9821 4.27804C16.3942 4.62632 16 5.26713 16 6C16 6.14503 16.0154 6.28645 16.0447 6.42272C16.1651 6.6476 16.2675 6.88404 16.3497 7.13021C16.7101 7.65547 17.3148 8 18 8C18.1918 8 18.3774 7.97298 18.5531 7.92254L18.546 7.85899C18.3938 6.48875 17.8283 5.25555 16.9821 4.27804Z"
                        fill="#B0C3CC"
                    />
                    <path
                        d="M9.10222 17.6647C9.27315 18.6215 9.64978 19.467 10.1737 20.0701C10.6976 20.6731 11.3396 21 12 21C12.6604 21 13.3024 20.6731 13.8263 20.0701C14.3502 19.467 14.7269 18.6215 14.8978 17.6647"
                        stroke="#B0C3CC"
                        stroke-width="2"
                        stroke-linecap="round"
                        fill="#B0C3CC"
                    />
                    <circle
                        cx="18"
                        cy="6"
                        r="2.5"
                        fill="red"
                        stroke="red"
                    />
                </svg>
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
            padding: '0 40px',
        },
        searchBarContainer: {
            width: '625px',
            height: '32px',
        },

    }),
);
