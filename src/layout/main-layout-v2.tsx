import React from 'react';
import { Outlet } from 'react-router-dom';
import { createStyles, makeStyles } from '@mui/styles';
import { Box } from '@mui/material';
import SidebarV2 from '../components/Sidebar/SidebarV2/SidebarV2';
import HeaderV2 from '../components/Header/HeaderV2';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme, Theme } from '@mui/material/styles';
import Overlay from '../components/Overlay';
import { useState } from 'react';
import { useEffect } from 'react';
import { transform } from '@babel/core';
const MainLayoutV2 = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [isSideBarOpen, setSideBarOpen] = useState<boolean>(true);
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (!matches) setSideBarOpen(false);
        setLoading(false);
    }, [matches]);
    useEffect(() => {
        setLoading(false);
    });
    if (loading) return <>.....loading</>;
    return (
        <Box className={classes.root}>
            {/* sidebar */}
            {isSideBarOpen && (
                <Overlay
                    handleClick={() => {
                        console.log('clicked');
                    }}
                />
            )}
            <Box
                className={classes.sidebar}
                sx={(theme: Theme) => ({
                    [theme.breakpoints.down('md')]: {
                        transform: (props) =>
                            isSideBarOpen
                                ? 'translateX(0%)'
                                : 'translateX(-100%)',
                    },
                })}
            >
                <SidebarV2 />
            </Box>
            {/* Main */}
            <Box className={classes.main}>
                {/* Header */}
                <Box className={classes.header}>
                    <HeaderV2 />
                </Box>
                <Outlet />
            </Box>
        </Box>
    );
};

export default MainLayoutV2;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            height: '100vh',
            display: 'flex',
            flexDirection: 'row',
            width: '100vw',
        },
        sidebar: {
            height: '100vh',
            width: '250px',
            [theme.breakpoints.down('md')]: {
                position: 'absolute',
                background: 'white',
                zIndex: 16,
                transition: 'transform 0.5s ease',
            },
        },
        main: {
            flex: '1',
            height: '100vh',
            overflowY: 'auto',
        },
        header: {
            height: '100px',
            width: '100%',
        },
    }),
);
