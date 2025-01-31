import { Box, Typography } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import Card from './components/Card';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { Word } from '../../types';
export const MyList = () => {
    const nav = useNavigate();

    const MyListCollection = useSelector(
        (state: RootState) => state.myListCollection,
    );
    const [words, setWords] = useState<Word[] | undefined>(undefined);
    const styles = useStyles();
    const param = useParams();
    const myListCollection = useSelector(
        (state: RootState) => state.myListCollection,
    );
    useEffect(() => {
        if (param.id) {
            const list = myListCollection.collections.find(
                (collection) => collection.id === param.id,
            );
            setWords(list?.words);
        }
    }, [param.id]);
    return (
        <Box sx={{ paddingTop: '15px' }}>
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
                    let isActive = false;
                    const activeColor = '#EAB355';
                    if (item.id == param.id) {
                        isActive = true;
                    }
                    return (
                        <Card
                            userName={MyListCollection.userName}
                            cardName={item.name}
                            numbOfTerms={item.words.length}
                            id={item.id}
                            isActive={isActive}
                            activeColor={activeColor}
                        />
                    );
                })}
            </Box>
            {words && (
                <Box
                    sx={{
                        width: '100%',
                    }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                gap: 1,
                            }}
                        >
                            <p
                                style={{
                                    fontWeight: 'bold',
                                    fontSize: '31px',
                                }}
                            >
                                Preview
                            </p>
                            <Box
                                sx={{
                                    padding: '0px',
                                    background: '#E5E5E5',
                                    borderRadius: '15px',
                                    alignItems: 'center',
                                    boxShadow:
                                        'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    width: '20px',
                                    height: '20px',
                                    cursor: 'pointer',
                                }}
                            >
                                <KeyboardArrowDownIcon
                                    sx={{
                                        width: '25px',
                                        height: '15px',
                                    }}
                                />
                            </Box>
                        </Box>
                        <Box
                            onClick={() => {
                                nav('/practice');
                            }}
                            sx={{
                                borderRadius: 15,
                                background: '#55AD9B',
                                padding: '0 10px',
                                borderBottom: '#acd7ce solid 4px',
                                cursor: 'pointer',
                            }}
                        >
                            <p
                                style={{
                                    fontSize: 10,
                                    fontWeight: 'bold',
                                    color: 'white',
                                }}
                            >
                                PRACTICE
                            </p>
                        </Box>
                        <Box
                            sx={{
                                borderRadius: 10,
                                background: '#FE6876',
                                padding: '0 10px',
                                cursor: 'pointer',
                                borderBottom: '#feced3 solid 4px',
                            }}
                        >
                            <p
                                style={{
                                    fontSize: 10,
                                    fontWeight: 'bold',
                                    color: 'white',
                                }}
                            >
                                CHALLENGE
                            </p>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            width: '100%',
                            display: 'flex',
                            alignItems: 'flex-start',
                            flexDirection: 'column',
                            gap: 3,
                        }}
                    >
                        {words?.map((item) => {
                            return (
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        gap: 10,
                                        width: '100%',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Typography
                                        fontWeight={'bold'}
                                        textAlign={'left'}
                                    >
                                        {item.word}
                                    </Typography>
                                    <Typography>{item.definition}</Typography>
                                    <VolumeUpIcon sx={{ cursor: 'pointer' }} />
                                </Box>
                            );
                        })}
                    </Box>
                </Box>
            )}
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
            gap: 36,
            overflowX: 'auto',
            wdith: '100%',
            alignItems: 'center',
        },
    }),
);
