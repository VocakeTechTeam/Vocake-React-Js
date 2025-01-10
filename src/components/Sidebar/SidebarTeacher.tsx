import React, { ReactNode } from 'react';
import { makeStyles, createStyles } from '@mui/styles';
import { Box } from '@mui/material';
import { SideBarTeacherItem } from './SideBarTeacherItem';
import { SideBarTeacherItemArr1, SideBarTeacherItemArr2 } from '../../constant';
import { SidebarTeacherHeader } from './SidebarTeacherHeader';

export interface SideBarTeacherItemProps {
    label: string;
    bgColor?: string;
    icon: ReactNode;
}

const SidebarTeacher = () => {
    const classes = sidebarStyles();
    return (
        <Box className={classes.root}>
            <SidebarTeacherHeader />
            <Box className={classes.itemContainer}>
                {SideBarTeacherItemArr1.map(
                    (item: SideBarTeacherItemProps, index) => (
                        <SideBarTeacherItem
                            key={index}
                            label={item.label}
                            icon={item.icon}
                        />
                    ),
                )}
            </Box>
            <Box className={classes.itemContainer}>
                {SideBarTeacherItemArr2.map(
                    (item: SideBarTeacherItemProps, index) => (
                        <SideBarTeacherItem
                            key={index}
                            label={item.label}
                            icon={item.icon}
                        />
                    ),
                )}
            </Box>
        </Box>
    );
};

export default SidebarTeacher;

const sidebarStyles = makeStyles(() =>
    createStyles({
        root: {
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        itemContainer: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '20px 0px',
            borderBottom: '#C8CBD9 solid 0.5px',
            '&:last-child': {
                borderBottom: 'none',
            },
        },
    }),
);
