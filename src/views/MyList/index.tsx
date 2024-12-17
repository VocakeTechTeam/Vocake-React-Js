import { Box, Typography } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import Card from './components/Card';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
export const MyList = () => {
    const MyListCollection = useSelector(
        (state: RootState) => state.myListCollection,
    );
    console.log(MyListCollection.collections[0]);
    const styles = useStyles();

    return (
        <Box>
            <Typography
                sx={{ textAlign: 'start', fontWeight: '700', fontSize: '25px' }}
            >
                Recent
            </Typography>

            <Box
                sx={(theme) => ({
                    [theme.breakpoints.down('sm')]: {
                        flexDirection: 'column',
                    },
                })}
                className={styles.cardContainer}
            >
                {MyListCollection.collections.map((item) => {
                    return (
                        <Card
                            userName={MyListCollection.userName}
                            cardName={item.name}
                            numbOfTerms={item.words.length}
                        />
                    );
                })}
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
            wdith: '100%',
            alignItems: 'center',
        },
    }),
);
