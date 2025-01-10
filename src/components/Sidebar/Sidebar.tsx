// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import { Box } from '@mui/material';
import List from '@mui/material/List';
import { makeStyles, createStyles } from '@mui/styles';
import SidebarItem from './SidebarItem';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { sidebarItemLists } from '../../constant';
const Sidebar = () => {
    const classes = sidebarStyles();
    const location = useLocation();
    const { logout } = useAuth();
    return (
        <Box className={classes.root}>
            <Box style={{ width: '100%' }}>
                <List>
                    {sidebarItemLists.map((item, index) => (
                        <SidebarItem
                            style={{ marginTop: '2px' }}
                            key={index}
                            title={item.title}
                            icon={item.icon}
                            path={item.path}
                            isactive={
                                location.pathname === item.path ? true : false
                            }
                        />
                    ))}
                </List>
            </Box>
            <Box className={classes.logOut} onClick={logout}>
                Log out
            </Box>
        </Box>
    );
};

export default Sidebar;

const sidebarStyles = makeStyles(() =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100%',
            padding: '10px 10px',
            justifyContent: 'center',
            alignItems: 'center',
        },
        sidebarHeader: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0px 10px 0px 10px',
            height: '70px',
            borderRadius: '10px',
            width: '100%',
            '& .MuiAvatar-root': {
                border: 'black solid 1px',
                marginRight: '10px',
                background: 'black',
            },
            '&:hover': {
                background: '#d6f4ef',
            },
            cursor: 'pointer',
        },
        sidebarBottom: {
            marginTop: 'auto',
            marginBottom: '30px',
        },
        logOut: {
            background: '#55AD9B',
            marginTop: 'auto',
            cursor: 'pointer',
            fontWeight: 'bold',
            padding: 10,
            width: '80%',
            color: 'white',
            borderRadius: 10,
            boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
        },
    }),
);
