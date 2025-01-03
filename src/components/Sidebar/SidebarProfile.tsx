import { makeStyles, createStyles } from '@mui/styles';
import { Box } from '@mui/material';
import SidebarItem from './SidebarItem';
import { sidebarProfileItemLists } from '../../constant';
import List from '@mui/material/List';
import { useLocation } from 'react-router-dom';
const SidebarProfile = () => {
    const classes = sidebarStyles();
    const location = useLocation();
    return (
        <Box className={classes.root}>
            <Box sx={{ width: '100%' }}>
                <List>
                    {sidebarProfileItemLists.map((item, index) => (
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
        </Box>
    );
};

export default SidebarProfile;

const sidebarStyles = makeStyles(() =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100%',
            padding: '10px 10px',
            alignItems: 'center',
        },
    }),
);
