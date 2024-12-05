import { Box, TextField, Typography } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import image from '../../assets/image.png';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import TranslateIcon from '@mui/icons-material/Translate';
import { useState } from 'react';
import { enhanceServcie } from '../../api';
import { Theme } from '@mui/material/styles';
import { useSearch } from '../../context/SearchContext';
import { useRef } from 'react';
import AddToList from './components/AddToList';

const Home = () => {
    const [promptEnhance, setPromptEnhance] = useState<string | null>(null);
    const [textGrammar, setTextGrammer] = useState<string | null>(null);
    const [textScore, setTextScore] = useState<any>();
    const { search, wordSearch } = useSearch();
    const handlePractice = async () => {
        const res = await enhanceServcie("","");
        setPromptEnhance(res.promptEnhance);
        setTextGrammer(res.textGrammar);
        setTextScore(res.textScore);
    };
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const handleKeyDown = async () => {
        await search();
    };
    const handlePlaySound = () => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    };

    const classes = useStyles();
    return (
        <Box className={classes.root} onKeyDown={handleKeyDown} tabIndex={0}>
            <Box className={classes.mainContainer}>
                <Box className={classes.wordInfoContainer}>
                    <Box className={classes.wordDetailsContainer}>
                        <Box className={classes.wordSection}>
                            <p className={classes.wordText}>
                                {wordSearch?.word
                                    ? wordSearch.word
                                    : 'ironic (a.)'}
                            </p>
                            <VolumeUpIcon
                                sx={{ cursor: 'pointer' }}
                                onClick={handlePlaySound}
                            />
                            <audio ref={audioRef} src={wordSearch?.audio} />
                            <AddToList />
                            <p className={classes.levelTag}>intermediate</p>
                        </Box>
                        {wordSearch?.ipa && (
                            <p className={classes.ipaText}>{wordSearch.ipa}</p>
                        )}

                        <Box className={classes.exampleContainer}>
                            <Box className={classes.translationContainer}>
                                <Typography
                                    sx={{ fontWeight: '600', fontSize: 22 }}
                                >
                                    unexpected thus funny
                                </Typography>
                                <Box
                                    className={classes.translationIconContainer}
                                >
                                    <TranslateIcon
                                        style={{ fontSize: '15px' }}
                                    />
                                </Box>
                            </Box>

                            <Typography className={classes.exampleText}>
                                {wordSearch?.example
                                    ? wordSearch.example
                                    : 'It’s ironic that Sarah, the librarian, got fined for overdue books.'}
                            </Typography>
                            <Typography className={classes.exampleText}>
                                &quot;Thật trớ trêu khi Sarah, thủ thư, lại bị
                                phạt vì mượn sách quá hạn.&quot;
                            </Typography>
                        </Box>

                        <Box className={classes.dropDownListContainer}>
                            <Box className={classes.dropdownItem}>
                                <Typography sx={{ fontWeight: '600' }}>
                                    Word family
                                </Typography>
                                <Box className={classes.dropdownIconContainer}>
                                    <KeyboardArrowDownIcon
                                        style={{ fontSize: '18px' }}
                                    />
                                </Box>
                            </Box>
                            <Box className={classes.dropdownItem}>
                                <Typography sx={{ fontWeight: '600' }}>
                                    Advanced uses
                                </Typography>
                                <Box className={classes.dropdownIconContainer}>
                                    <KeyboardArrowDownIcon
                                        style={{ fontSize: '18px' }}
                                    />
                                </Box>
                            </Box>
                            <Box className={classes.dropdownItem}>
                                <Typography sx={{ fontWeight: '600' }}>
                                    Synonyms
                                </Typography>
                                <Box className={classes.dropdownIconContainer}>
                                    <KeyboardArrowDownIcon
                                        style={{ fontSize: '18px' }}
                                    />
                                </Box>
                            </Box>
                            <Box className={classes.dropdownItem}>
                                <Typography sx={{ fontWeight: '600' }}>
                                    Collocations
                                </Typography>
                                <Box className={classes.dropdownIconContainer}>
                                    <KeyboardArrowDownIcon
                                        style={{ fontSize: '18px' }}
                                    />
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    <img
                        className={classes.image}
                        src={image}
                        alt="My Local "
                    />
                </Box>
                <Box className={classes.quickPracticeContainer}>
                    <Box className={classes.quickPracticeBox}>
                        <p className={classes.quickPracticeTitle}>
                            Quick Practice
                        </p>
                        <TextField
                            multiline
                            rows={4}
                            style={{ width: '100%' }}
                            placeholder="write/speak a sentence with ironic and earn some 🍰"
                            sx={{
                                boxShadow:
                                    'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
                            }}
                        />
                        <p
                            onClick={handlePractice}
                            className={classes.checkBtn}
                        >
                            Check
                        </p>
                        {promptEnhance && promptEnhance}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Home;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0px 10px',
        },
        mainContainer: {
            width: '100%',
            height: '95%',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
        },
        wordInfoContainer: {
            display: 'flex',
            flexDirection: 'row',
            gap: '10px',
        },
        wordDetailsContainer: {
            display: 'flex',
            flexDirection: 'column',
            width: '50%',
            gap: 10,
        },
        wordSection: {
            display: 'flex',
            flexDirection: 'row',
            gap: 10,
            alignItems: 'center',
            padding: 0,
            [theme.breakpoints.down('md')]: {
                flexDirection: 'column',
                alignItems: 'flex-start',
            },
        },
        wordText: {
            fontWeight: 'bold',
            fontSize: '24px',
            margin: 0,
        },
        addToListContainer: {
            border: '#55AD9B solid 2px',
            borderRadius: '5px',
            display: 'flex',
            padding: '4px',
            cursor: 'pointer',
            gap: '5px',
        },
        addToListText: {
            color: '#55AD9B',
        },
        levelTag: {
            borderRadius: '10px',
            padding: '5px',
            color: '#FDB911',
            border: '#FDB911 solid 1px',
            margin: 0,
            fontWeight: '500',
        },
        ipaText: {
            textAlign: 'left',
            fontWeight: 'bold',
            fontSize: '12px',
        },
        exampleContainer: {
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
        },
        translationContainer: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 2,
        },
        translationText: {
            fontSize: '22px',
            fontWeight: '600',
        },
        translationIconContainer: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#F7DDAE',
            padding: '3px',
            borderRadius: '5px',
            height: '20px',
            width: '20px',
            boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
        },
        exampleText: {
            textAlign: 'start',
        },
        dropDownListContainer: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            flex: 1,
            marginBottom: '20px',
            gap: 10,
        },
        dropdownItem: {
            display: 'flex',
            flexDirection: 'row',
            cursor: 'pointer',
            gap: 10,
        },
        dropDownTitle: {
            fontWeight: 'bold',
        },
        dropdownIconContainer: {
            background: '#E5E5E5',
            borderRadius: '15px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '23px',
            width: '23px',
            boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
        },
        image: {
            width: '30%',
            [theme.breakpoints.down('md')]: {
                width: '200px',
                height: '200px',
            },
        },
        quickPracticeContainer: {
            alignItems: 'flex-start',
            display: 'flex',
            flexDirection: 'column',
        },
        quickPracticeBox: {
            width: '50%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 3,
            [theme.breakpoints.down('md')]: {
                width: '100%',
                gap: 0,
            },
        },
        quickPracticeTitle: {
            color: '#55AD9B',
            fontWeight: 'bold',
            fontSize: '24px',
        },
        checkBtn: {
            marginLeft: 'auto',
            padding: '5px 10px',
            borderRadius: '15px',
            background: '#55AD9B',
            fontWeight: 'bold',
            color: 'white',
            cursor: 'pointer',
            boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
        },
    }),
);
