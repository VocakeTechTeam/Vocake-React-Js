import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { makeStyles, createStyles } from '@mui/styles';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface SidebarItemProps {
    title: string;
    icon: React.ReactNode;
    isactive: boolean;
    path: string;
    style?: React.CSSProperties | object;
    textInactiveColor?: string;
    textActiveColor?: string;
    boxHoverColor?: string;
    texSize?: string;
    fontSize?: string;
    boxActiveColor?: string;
}

const SidebarItemV2 = ({
    title,
    icon,
    isactive = false,
    path,
    style,
    textActiveColor = '#F0BF45',
    textInactiveColor = 'black',
    boxHoverColor = '#55AD9B',
    fontSize = '16px',
    boxActiveColor = 'white',
}: SidebarItemProps) => {
    const classes = useStyles({ isactive, boxHoverColor });
    const nav = useNavigate();
    return (
        <Box
            sx={{
                ...style,
                color: isactive ? textActiveColor : textInactiveColor,
                '& svg': {
                    fill: isactive ? textActiveColor : textInactiveColor,
                },
                '& span': {
                    fontSize: fontSize,
                },
                '& .MuiListItem-root': {
                    background: isactive ? boxActiveColor : '',
                    borderTopLeftRadius: '100px',
                    borderBottomLeftRadius: '100px',
                    width: '100%',
                },
                '& .MuiListItem-root:hover': {},
                '& .MuiListItem-root::after': {
                    content: '""',
                    position: 'absolute',
                    backgroundColor: isactive ? textActiveColor : 'transparent', // Use active color when isactive
                    bottom: '100%',
                    right: 0,
                    height: '35px',
                    width: '35px',
                    borderBottomRightRadius: '18px',
                    boxShadow: isactive ? '0 20px 0 0 #fff' : 'none', // Apply box shadow if active
                    top: -35,
                },
                '& .MuiListItem-root::before': {
                    content: '""',
                    position: 'absolute',
                    backgroundColor: isactive ? textActiveColor : 'transparent', // Use active color when isactive
                    top: '48px',
                    right: 0,
                    height: '35px',
                    width: '35px',
                    borderTopRightRadius: '18px',
                    boxShadow: isactive ? '0 -20px 0 0 #fff' : 'none', // Apply box shadow if active
                },
            }}
            className={classes.root}
            onClick={() => {
                nav(path);
            }}
        >
            <ListItem key={title} disablePadding>
                <ListItemButton disableTouchRipple={true}>
                    <ListItemIcon
                        sx={{
                            '& svg': {
                                height: '18px',
                            },
                        }}
                    >
                        {icon}
                    </ListItemIcon>
                    <ListItemText primary={title} />
                </ListItemButton>
            </ListItem>
        </Box>
    );
};

export default SidebarItemV2;

const useStyles = makeStyles<{ isactive: boolean; boxHoverColor: string }>(
    ({ isactive, boxHoverColor }) => createStyles({}),
);
