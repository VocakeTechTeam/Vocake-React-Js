import { Box } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';
import { Header } from '../components/Header';
import { Theme, useTheme } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { transform } from '@babel/core';

const MainLayout = () => {
    const [isSideBarOpen, setSideBarOpen] = useState(false);
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const classes = useStyles({ isSideBarOpen });
    const [loading, setLoading] = useState(true);
    const toggleSideBar = () => {
        setSideBarOpen(!isSideBarOpen);
        setLoading(false);
    };
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
            <Box className={classes.firstContainer}>
                <Header toggleSideBar={toggleSideBar} />
            </Box>
            <Box className={classes.secondContainer}>
                {isSideBarOpen && (
                    <Box
                        onClick={() => {
                            setSideBarOpen(false);
                        }}
                        className={classes.overlay}
                    />
                )}

                <Box
                    sx={(theme: Theme) => ({
                        [theme.breakpoints.down('md')]: {
                            transform: (props) =>
                                isSideBarOpen
                                    ? 'translateX(0%)'
                                    : 'translateX(-100%)',
                        },
                    })}
                    className={classes.sidebar}
                >
                    <Sidebar />
                </Box>
                <Box className={classes.main}>
                    <Outlet />
                </Box>
            </Box>
        </Box>
    );
};

export default MainLayout;

interface UseStylesProps {
    isSideBarOpen: boolean;
}
const useStyles = makeStyles<Theme, UseStylesProps>((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100vh',
        },
        firstContainer: {
            background: '#55AD9B',
            width: '100%',
            height: '10vh',
            position: 'sticky',
            top: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: 'rgba(99, 99, 99, 0.2) 0px 4px 8px 0px', // Shadow at the bottom,
            zIndex: 9,
        },
        secondContainer: {
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            height: '90vh',
        },
        sidebar: {
            width: '150px',
            justifyContent: 'center',
            [theme.breakpoints.down('md')]: {
                position: 'absolute',
                height: '92vh',
                background: 'white',
                zIndex: 10,
                width: '200px',
                transition: 'transform 0.5s ease',
            },
        },
        main: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            overflowY: 'auto',
            padding: 10,
            marginLeft: '60px',
            [theme.breakpoints.down('md')]: {
                width: '100%',
                zIndex: 0,
                marginLeft: '0px',
            },
        },
        overlay: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.5)',
            zIndex: 8,
            transition: 'opacity 0.5s ease',
        },
    }),
);
