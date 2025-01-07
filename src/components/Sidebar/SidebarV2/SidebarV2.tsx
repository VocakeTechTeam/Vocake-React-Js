import React from 'react';
import { makeStyles, createStyles } from '@mui/styles';
import { Box } from '@mui/material';
import image from '../../../assets/be cake 1.png';
import { sidebarItemListsV2 } from '../../../constant';
import List from '@mui/material/List';
import { useLocation } from 'react-router-dom';
import SidebarItemV2 from './SidebarItemV2';
const SidebarV2 = () => {
    const location = useLocation();
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <List className={classes.list}>
                {sidebarItemListsV2.map((item, index) => {
                    console.log(location.pathname);
                    console.log(item.path);
                    return (
                        <SidebarItemV2
                            boxHoverColor="none"
                            style={{ marginTop: '2px' }}
                            key={index}
                            title={item.title}
                            icon={item.icon}
                            path={item.path}
                            isactive={
                                location.pathname === item.path ? true : false
                            }
                            textActiveColor="#66A7F2"
                            textInactiveColor="white"
                            fontSize="16px"
                            boxActiveColor="white"
                        />
                    );
                })}
            </List>
            <img className={classes.img} src={image} alt="image" width="100%" />
        </Box>
    );
};

export default SidebarV2;

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            height: '100%',
            width: '100%',
            background: '#66A7F2',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: 50,
        },
        img: {
            marginTop: 'auto',
        },
        list: {
            width: '100%',
        },
    }),
);
