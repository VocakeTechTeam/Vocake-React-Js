import { Box, Typography } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import Card from './components/Card';
import { Theme } from "@mui/material/styles"

export const MyList = () => {
    const styles = useStyles();
    const cards = [];

    for (let i = 0; i < 4; i++) {
        cards.push(<Card key={i} />); // Use key for each Card to avoid React warnings
    }

    return (
        <Box>
            <Typography
                sx={{ textAlign: 'start', fontWeight: '700', fontSize: '25px' }}
            >
                Recent
            </Typography>
            <Box sx={(theme) => ({
                [theme.breakpoints.down("sm")]: {
                    flexDirection:"column"
                }
            })} className={styles.cardContainer}>{cards}</Box>
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
            wdith: "100%",
            alignItems:"center"

        },
    }),
);
