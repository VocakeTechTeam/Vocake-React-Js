import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { makeStyles, createStyles } from '@mui/styles';
import { Box } from '@mui/material';
import { theme } from '../../theme';
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

const SidebarItem = ({
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
                    fontWeight: isactive ? 'bold' : '',
                    fontSize: fontSize,
                },
                '& .MuiListItem-root:hover': {
                    background: boxHoverColor,
                    borderRadius: '10px',
                },
                '& .MuiListItem-root': {
                    background: isactive ? boxActiveColor : '',
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

export default SidebarItem;

const useStyles = makeStyles<{ isactive: boolean; boxHoverColor: string }>(
    ({ isactive, boxHoverColor }) =>
        createStyles({
            root: {
                '& .MuiListItemIcon-root ': {
                    minWidth: 0,
                    width: 'max-content',
                    marginRight: 10,
                },
                borderRadius: '10px',
            },
        }),
);
