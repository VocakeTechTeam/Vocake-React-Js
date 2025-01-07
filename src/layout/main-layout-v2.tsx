import React from 'react';
import { Outlet } from 'react-router-dom';
import { createStyles, makeStyles } from '@mui/styles';
import { Box } from '@mui/material';
import SidebarV2 from '../components/Sidebar/SidebarV2/SidebarV2';
import HeaderV2 from '../components/Header/HeaderV2';
const MainLayoutV2 = () => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            {/* sidebar */}
            <Box className={classes.sidebar}>
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

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            height: '100vh',
            display: 'flex',
            flexDirection: 'row',
            width: '100vw',
        },
        sidebar: {
            height: '100vh',
            width: '20vw',
        },
        main: {
            width: '80vw',
            height: '100vh',
            overflowY: 'auto',
        },
        header: {
            height: '100px',
            width: '100%',
        },
    }),
);
