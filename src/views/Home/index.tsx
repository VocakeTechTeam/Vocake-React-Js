import { Box, TextField, Typography } from '@mui/material';
import image from '../../assets/image.png';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import TranslateIcon from '@mui/icons-material/Translate';
import { useState } from 'react';
import { enhanceServcie } from '../../api';
import { useSearch } from '../../context/SearchContext';
import { useRef } from 'react';
import AddToList from './components/AddToList';
import { toast } from 'react-toastify';
import CircularProgress from '@mui/material/CircularProgress';
import { useStyles } from './styles';
import AddToListModal from './components/AddToListModal';
import Overlay from '../../components/Overlay';

const Home = () => {
    const [promptEnhance, setPromptEnhance] = useState<string | null>(null);
    const [textGrammar, setTextGrammer] = useState<string | null>(null);
    const [textScore, setTextScore] = useState<any>();
    const [quickPracticeLoading, setQuickPracticeLoading] = useState(false);
    const [isAddToList, setIsAddToList] = useState<boolean>(false);
    const { search, wordSearch } = useSearch();
    const [userSentence, setUserSentence] = useState('');

    const handlePractice = async () => {
        if (userSentence.length == 0) {
            toast.error('Please insert your sentence');
            return;
        }
        setQuickPracticeLoading(true);
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

    const handlePlaySound = () => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    };

    const addToList = () => {};
    const handleClickAddToList = () => {
        setIsAddToList(!isAddToList);
    };
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            {isAddToList && (
                <>
                    <Overlay handleClick={handleClickAddToList} />
                    <AddToListModal handleClick={handleClickAddToList} word={"ironic"} />
                </>
            )}

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
                            <AddToList handleClick={handleClickAddToList} />
                            <p className={classes.levelTag}>intermediate</p>
                        </Box>

                        <Box className={classes.exampleContainer}>
                            <Box className={classes.translationContainer}>
                                <Typography
                                    sx={{
                                        fontWeight: '500',
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
                            onKeyDown={(e: React.KeyboardEvent) => {
                                if (e.key === 'Enter') {
                                    e.preventDefault();
                                    handlePractice();
                                }
                            }}
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
