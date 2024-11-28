import { Box, TextField, Typography } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import image from '../../assets/image.png';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import TranslateIcon from '@mui/icons-material/Translate';
import { useState } from 'react';
import { enhanceServcie } from '../../api';
const Home = () => {
    const [sentence, setSentence] = useState<string>('');
    const [promptEnhance, setPromptEnhance] = useState<string | null>(null);
    const [textGrammar, setTextGrammer] = useState<string | null>(null);
    const [textScore, setTextScore] = useState<any>();
    const handlePractice = async () => {
        const res = await enhanceServcie();
        setPromptEnhance(res.promptEnhance);
        setTextGrammer(res.textGrammar);
        setTextScore(res.textScore);
    };
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Box className={classes.fifthCotainer}>
                <Box className={classes.firstContainer}>
                    <Box className={classes.secondContainer}>
                        <Box className={classes.thirdContainer}>
                            <p className={classes.word}>ironic (a.)</p>
                            <VolumeUpIcon sx={{ cursor: 'pointer' }} />
                            <Box
                                sx={{
                                    border: '#55AD9B solid 2px',
                                    borderRadius: '5px',
                                    display: 'flex',
                                    padding: '4px',
                                }}
                            >
                                <FormatListBulletedIcon
                                    style={{ color: '#55AD9B' }}
                                />
                                <Typography
                                    sx={{ cursor: 'pointer' }}
                                    style={{ color: '#55AD9B' }}
                                >
                                    add to list
                                </Typography>
                            </Box>
                            <p className={classes.levelTag}>intermediate</p>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 2,
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    gap: 2,
                                }}
                            >
                                <Typography
                                    textAlign="start"
                                    sx={{ fontSize: '22px' }}
                                >
                                    unexpected thus funny
                                </Typography>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        background: '#F7DDAE',
                                        padding: '3px',
                                        borderRadius: '5px',
                                        height: '20px',
                                        width: '20px',
                                        boxShadow:
                                            'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
                                    }}
                                >
                                    <TranslateIcon
                                        style={{ fontSize: '15px' }}
                                    />
                                </Box>
                            </Box>

                            <Typography textAlign="start">
                                It’s ironic that Sarah, the librarian, got fined
                                for overdue books.
                            </Typography>
                            <Typography textAlign="start">
                                &quot;Thật trớ trêu khi Sarah, thủ thư, lại bị
                                phạt vì mượn sách quá hạn.&quot;
                            </Typography>
                        </Box>

                        <Box className={classes.dropDownListContainer}>
                            <Box className={classes.dropdownContainer}>
                                <Typography style={{ fontWeight: 'bold' }}>
                                    Word family
                                </Typography>
                                <Box
                                    sx={{
                                        background: '#E5E5E5',
                                        borderRadius: '15px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        height: '23px',
                                        width: '23px',
                                        boxShadow:
                                            'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
                                    }}
                                >
                                    <KeyboardArrowDownIcon
                                        style={{ fontSize: '18px' }}
                                    />
                                </Box>
                            </Box>
                            <Box className={classes.dropdownContainer}>
                                <Typography style={{ fontWeight: 'bold' }}>
                                    Advanced uses
                                </Typography>
                                <Box
                                    sx={{
                                        background: '#E5E5E5',
                                        borderRadius: '15px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        height: '23px',
                                        width: '23px',
                                        boxShadow:
                                            'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
                                    }}
                                >
                                    <KeyboardArrowDownIcon
                                        style={{ fontSize: '18px' }}
                                    />
                                </Box>{' '}
                            </Box>
                            <Box className={classes.dropdownContainer}>
                                <Typography style={{ fontWeight: 'bold' }}>
                                    Synonyms
                                </Typography>
                                <Box
                                    sx={{
                                        background: '#E5E5E5',
                                        borderRadius: '15px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        height: '23px',
                                        width: '23px',
                                        boxShadow:
                                            'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
                                    }}
                                >
                                    <KeyboardArrowDownIcon
                                        style={{ fontSize: '18px' }}
                                    />
                                </Box>{' '}
                            </Box>
                            <Box className={classes.dropdownContainer}>
                                <Typography style={{ fontWeight: 'bold' }}>
                                    Collcations
                                </Typography>
                                <Box
                                    sx={{
                                        background: '#E5E5E5',
                                        borderRadius: '15px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        height: '23px',
                                        width: '23px',
                                        boxShadow:
                                            'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
                                    }}
                                >
                                    <KeyboardArrowDownIcon
                                        style={{ fontSize: '18px' }}
                                    />
                                </Box>{' '}
                            </Box>
                        </Box>
                    </Box>

                    <img
                        className={classes.imgae}
                        src={image}
                        alt="My Local "
                    />
                </Box>
                <Box className={classes.quickPracticeContainer}>
                    <Box
                        style={{
                            width: '50%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            gap: 10,
                        }}
                    >
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
const useStyles = makeStyles(() =>
    createStyles({
        root: {
            width: '100%',
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0px 10px',
        },
        firstContainer: {
            display: 'flex',
            flexDirection: 'row',
            gap: '10px',
        },
        secondContainer: {
            display: 'flex',
            flexDirection: 'column',
            width: '50%',
            gap: 10,
        },
        thirdContainer: {
            display: 'flex',
            flexDirection: 'row',
            gap: 10,
            alignItems: 'center',
            padding: 0,
        },
        fifthCotainer: {
            width: '100%',
            height: '95%',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
        },
        main: {
            width: '90%',
            display: 'flex',
            justifyContent: 'center',
            overflow: 'auto',
            padding: '40px',
            '& >*': {
                marginRight: '25px',
            },
        },
        quickPracticeContainer: {
            alignItems: 'flex-start',
            display: 'flex',
            flexDirection: 'column',
        },
        dropDownListContainer: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            flex: 1,
            marginBottom: '20px',
            gap: 10,
        },
        imgae: {
            width: '30%',
        },
        dropDownTitle: {
            fontWeight: 'bold',
        },
        dropdownContainer: {
            display: 'flex',
            flexDirection: 'row',
            cursor: 'pointer',
            gap: 10,
        },
        word: {
            fontWeight: 'bold',
            fontSize: '24px',
            margin: 0,
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
        levelTag: {
            borderRadius: '10px',
            padding: '5px',
            color: '#FDB911',
            border: '#FDB911 solid 1px',
            margin: 0,
            cursor: 'pointer',
            fontWeight: '500',
        },
        quickPracticeTitle: {
            color: '#55AD9B',
            fontWeight: 'bold',
            fontSize: '24px',
        },
    }),
);
