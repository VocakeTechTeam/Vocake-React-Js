import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { makeStyles, createStyles } from '@mui/styles';
import { Box } from '@mui/material';
import { theme } from '../../../theme';
import { useNavigate } from 'react-router-dom';

interface SidebarItemProps {
    title: string;
    icon: React.ReactNode;
    isactive: boolean;
    path: string;
    style?: React.CSSProperties | object;
}

const SidebarItem = ({
    title,
    icon,
    isactive = false,
    path,
    style,
}: SidebarItemProps) => {
    const classes = useStyles({ isactive });
    const nav = useNavigate();
    return (
        <Box
            sx={{
                ...style,
                color: isactive ? '#F0BF45' : 'black',
                '& svg': {
                    fill: isactive ? '#F0BF45' : 'black',
                },
                '& span': {
                    fontWeight: isactive ? 'bold' : '',
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

const useStyles = makeStyles<{ isactive: boolean }>((isactive) =>
    createStyles({
        root: {
            '& .MuiListItem-root:hover': {
                background: theme.palette.primary.main,
                borderRadius: '10px',
            },
            '& .MuiListItemIcon-root ': {
                minWidth: 0,
                width: 'max-content',
                marginRight: 10,
            },
            borderRadius: '10px',
        },
    }),
);
