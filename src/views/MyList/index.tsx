import { Box, Typography } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import Card from './components/Card';
export const MyList = () => {
    const styles = useStyles();
    return (
        <Box>
            <Typography sx={{ fontWeight: '700', fontSize: '25px' }}>
                Recent
            </Typography>
            <Box className={styles.cardContainer}>
                <Card />
                <Card />
                <Card />
                <Card />
            </Box>
        </Box>
    );
};

const useStyles = makeStyles(() =>
    createStyles({
        root: {},
        title: {
            fontWeight: '700',
            fontSize: '25px',
        },
        cardContainer: {
            display: 'flex',
            gap: 10,
            overflowX: 'auto',
            padding: 15,
        },
    }),
);
