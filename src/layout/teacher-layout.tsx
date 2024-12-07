import { Box } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';
import { Header } from '../components/Header';
import { Theme, useTheme } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { transform } from '@babel/core';
import SidebarTeacher from '../components/Sidebar/SidebarTeacher';
import { HeaderTeacher } from '../components/HeaderTeacher';

const TeacherLayout = () => {
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
            <Box className={classes.sidebar}>
                <SidebarTeacher />
            </Box>
            <Box className={classes.mainContainer}>
                <Box className={classes.header}>
                    <HeaderTeacher />
                </Box>
                <Box className={classes.main}>
                    <Outlet />
                </Box>
            </Box>
        </Box>
    );
};

export default TeacherLayout;

interface UseStylesProps {
    isSideBarOpen: boolean;
}
const useStyles = makeStyles<Theme, UseStylesProps>((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            height: '100vh',
        },
        sidebar: {
            height: '100vh',
            width: '240px',
            background: '#F1F2F7',
            flexShrink: 0,
            top: 0,
        },
        mainContainer: {
            height: '100vh',
            flex: 1,
            flexShrink: 1,
            overflowY: 'auto',
        },
        header: {
            height: '64px',
            width: '100%',
            borderBottom: '#C8CBD9 solid 0.5px',
        },
        main: {
            flex: 1,
            height: '90vh',
            padding: '0 40px',
        },
    }),
);
