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
import { toast } from 'react-toastify';
import CircularProgress from '@mui/material/CircularProgress';

const Home = () => {
    const [promptEnhance, setPromptEnhance] = useState<string | null>(null);
    const [textGrammar, setTextGrammer] = useState<string | null>(null);
    const [textScore, setTextScore] = useState<any>();
    const [quickPracticeLoading, setQuickPracticeLoading] = useState(false);
    const { search, wordSearch } = useSearch();
    const [userSentence, setUserSentence] = useState('');

    const handlePractice = async () => {
        if (userSentence.length == 0) {
            toast.error('Please insert your sentence');
            return;
        }
        
        setQuickPracticeLoading(true);
        console.log(userSentence)
        const res = await enhanceServcie(
            wordSearch?.word ? wordSearch?.word : 'ironic',
            userSentence,
        );
        setPromptEnhance(res.promptEnhance);
        setTextGrammer(res.textGrammar);
        setTextScore(res.textScore);
        setQuickPracticeLoading(false);
        setUserSentence('');
    };

    const audioRef = useRef<HTMLAudioElement | null>(null);

    const handleKeyDown = async (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            await search();
        }
    };

    const handlePlaySound = () => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    };

    const classes = useStyles();
    return (
        <Box className={classes.root}>
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
                            {wordSearch?.ipa && (
                                <p className={classes.ipaText}>
                                    {wordSearch.ipa}
                                </p>
                            )}
                            <audio ref={audioRef} src={wordSearch?.audio} />
                            <AddToList />
                            <p className={classes.levelTag}>intermediate</p>
                        </Box>

                        <Box className={classes.exampleContainer}>
                            <Box className={classes.translationContainer}>
                                <Typography
                                    sx={{
                                        fontWeight: '500',
                                        fontSize: 25,
                                        textAlign: 'left',
                                    }}
                                >
                                    {wordSearch?.meaning
                                        ? wordSearch.meaning
                                        : 'unexpected thus funny'}
                                </Typography>
                                <Box
                                    className={classes.translationIconContainer}
                                >
                                    <TranslateIcon
                                        style={{ fontSize: '15px' }}
                                    />
                                </Box>
                            </Box>

                            <Typography
                                style={{ fontSize: '16px' }}
                                className={classes.exampleText}
                            >
                                {wordSearch?.example
                                    ? wordSearch.example
                                    : 'It’s ironic that Sarah, the librarian, got fined for overdue books.'}
                            </Typography>
                            <Typography
                                style={{ fontSize: '16px' }}
                                className={classes.exampleText}
                            >
                                &quot;Thật trớ trêu khi Sarah, thủ thư, lại bị
                                phạt vì mượn sách quá hạn.&quot;
                            </Typography>
                        </Box>

                        <Box className={classes.dropDownListContainer}>
                            <Box className={classes.dropdownItem}>
                                <Typography
                                    style={{ fontSize: '16px' }}
                                    sx={{ fontWeight: '600' }}
                                >
                                    Word family
                                </Typography>
                                <Box className={classes.dropdownIconContainer}>
                                    <KeyboardArrowDownIcon
                                        style={{ fontSize: '18px' }}
                                    />
                                </Box>
                            </Box>
                            <Box className={classes.dropdownItem}>
                                <Typography
                                    style={{ fontSize: '16px' }}
                                    sx={{ fontWeight: '600' }}
                                >
                                    Advanced uses
                                </Typography>
                                <Box className={classes.dropdownIconContainer}>
                                    <KeyboardArrowDownIcon
                                        style={{ fontSize: '18px' }}
                                    />
                                </Box>
                            </Box>
                            <Box className={classes.dropdownItem}>
                                <Typography
                                    style={{ fontSize: '16px' }}
                                    sx={{ fontWeight: '600' }}
                                >
                                    Synonyms
                                </Typography>
                                <Box className={classes.dropdownIconContainer}>
                                    <KeyboardArrowDownIcon
                                        style={{ fontSize: '18px' }}
                                    />
                                </Box>
                            </Box>
                            <Box className={classes.dropdownItem}>
                                <Typography
                                    style={{ fontSize: '16px' }}
                                    sx={{ fontWeight: '600' }}
                                >
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
                                borderRadius: 1,
                                boxShadow:
                                    'rgba(99, 99, 99, 0.5) 0px 4px 5px 0px',
                            }}
                            onChange={(e) => {
                                setUserSentence(e.target.value);
                            }}
                            value={userSentence}
                        />
                        <p
                            onClick={() => {
                                if (!quickPracticeLoading) {
                                    handlePractice();
                                }
                            }}
                            className={classes.checkBtn}
                        >
                            {quickPracticeLoading ? (
                                <CircularProgress
                                    size={20}
                                    sx={{ color: 'white' }}
                                />
                            ) : (
                                'Check'
                            )}
                        </p>
                        {promptEnhance && promptEnhance}
                        <br />
                        <br />
                        {textGrammar && textGrammar}
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
            gap: 25,
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
            fontSize: 10,
        },
        ipaText: {
            textAlign: 'left',
            fontWeight: 'bold',
            fontSize: '12px',
        },
        exampleContainer: {
            display: 'flex',
            flexDirection: 'column',
            gap: 30,
        },
        translationContainer: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 30,
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
            gap: 35,
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
            height: '18px',
            width: '18px',
            boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
        },
        image: {
            width: '40%',
            [theme.breakpoints.down('md')]: {
                width: '200px',
                height: '200px',
            },
        },
        quickPracticeContainer: {
            alignItems: 'flex-start',
            display: 'flex',
            flexDirection: 'column',
            height: '300px',
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
            padding: '2px 21px',
            borderRadius: '30px',
            background: '#55AD9B',
            fontWeight: 'bold',
            color: 'white',
            cursor: 'pointer',
            fontSize: '18px',
            boxShadow: 'rgba(99, 99, 99, 0.5) 0px 4px 5px 0px',
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent:"center"
        },
    }),
);
