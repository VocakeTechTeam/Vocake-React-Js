import React from 'react';
import image from '../../../assets/274134421_630358654889575_8726673875820184222_n 1.png';
import { Box } from '@mui/material';
import { makeStyles, createStyles } from '@mui/styles';
import './Home.module.css';
import volume from '../../../assets/icon/Volume.svg';
import archive from '../../../assets/icon/archive-minus.svg';
import translate from '../../../assets/icon/translate.svg';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import QuickPractice from '../../../assets/Quick Practice.png';

const HomeV2 = () => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Box className={classes.headerBox}>
                <p className={classes.title}>ironic</p>
                <Box className={classes.archiveBox}>
                    <img
                        src={archive}
                        alt="archive"
                        width="24px"
                        height="24px"
                        style={{ cursor: 'pointer' }}
                    />
                    <Box className={classes.intermediateBox}>
                        <p className={classes.intermediateText}>INTERMEDIATE</p>
                    </Box>
                </Box>
            </Box>
            <Box className={classes.phoneticAndImageBox}>
                <Box className={classes.phoneticContainer}>
                    <Box className={classes.phoneticBox}>
                        <p className={classes.phonetic}>
                            /aɪˈrɒn.ɪk/ , /aɪˈrɑː.nɪk/
                        </p>
                        <img
                            src={volume}
                            alt="volume icon"
                            className={classes.icon}
                        />
                    </Box>
                    <Box className={classes.typeBox}>
                        <Box className={classes.typeItem}>ADJECTIVE</Box>
                        <Box className={classes.typeItem}>NOUN</Box>
                        <Box className={classes.typeItemLast}>VERB</Box>
                    </Box>
                    <Box className={classes.translationContainer}>
                        <Box className={classes.translationRow}>
                            <p
                                style={{
                                    fontWeight: 700,
                                    fontSize: 20,
                                    margin: 0,
                                }}
                            >
                                unexpected thus funny
                            </p>
                            <img
                                src={translate}
                                alt="translate icon"
                                className={classes.icon}
                            />
                        </Box>
                        <p className={classes.exampleSentence}>
                            It’s ironic that Sarah, the librarian, got fined for
                            overdue books.
                        </p>
                    </Box>
                    <Box className={classes.expandableBoxContainer}>
                        <Box
                            className={classes.expandableBox}
                            style={{ background: '#FFC152' }}
                        >
                            <p className={classes.expandableText}>
                                Word Family
                            </p>
                            <KeyboardArrowDownIcon sx={{ color: 'white' }} />
                        </Box>
                        <Box
                            className={classes.expandableBox}
                            style={{ background: '#5DD299' }}
                        >
                            <p className={classes.expandableText}>
                                Advanced Uses
                            </p>
                            <KeyboardArrowDownIcon sx={{ color: 'white' }} />
                        </Box>
                        <Box
                            className={classes.expandableBox}
                            style={{ background: '#FE774C' }}
                        >
                            <p className={classes.expandableText}>Synonym</p>
                            <KeyboardArrowDownIcon sx={{ color: 'white' }} />
                        </Box>
                        <Box
                            className={classes.expandableBox}
                            style={{ background: '#EDBAE5' }}
                        >
                            <p className={classes.expandableText}>
                                Collocations
                            </p>
                            <KeyboardArrowDownIcon sx={{ color: 'white' }} />
                        </Box>
                    </Box>
                    <Box className={classes.practiceContainer}>
                        <img
                            src={QuickPractice}
                            alt="quick practice"
                            className={classes.practiceImage}
                        />
                        <textarea className={classes.textarea} />
                        <Box className={classes.checkButtonContainer}>
                            <Box className={classes.checkButton}>CHECK</Box>
                        </Box>
                    </Box>
                </Box>
                <Box className={classes.imageBox}>
                    <img className={classes.image} src={image} alt="image" />
                </Box>
            </Box>
        </Box>
    );
};

export default HomeV2;

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            fontFamily: '"Nunito", serif',
            display: 'flex',
            flexDirection: 'column',
            padding: '0px 60px',
        },
        title: {
            margin: 0,
            fontSize: '56px',
            fontWeight: '800',
        },
        intermediateBox: {
            backgroundColor: '#FFC152',
            padding: '0px 7px',
            borderRadius: 6,
        },
        intermediateText: {
            fontWeight: 800,
            color: 'white',
            fontSize: '12px',
            margin: 0,
        },
        phonetic: {
            margin: 0,
            color: '#66A7F2',
        },
        icon: {
            cursor: 'pointer',
        },
        image: {
            position: 'absolute',
            width: '600px',
            left: '-30%',
            bottom:10
        },
        headerBox: {
            display: 'flex',
            flexDirection: 'row',
            gap: '30%',
            alignItems: 'center',
        },
        archiveBox: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
        },
        phoneticAndImageBox: {
            display: 'flex',
        },
        phoneticContainer: {
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
        },
        phoneticBox: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 5,
        },
        typeBox: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            border: '#66A7F2 solid 1px',
            borderRadius: '8px',
            overflow: 'hidden',
            width: 'max-content',
        },
        typeItem: {
            padding: '3px 28px',
            fontSize: '12px',
            color: 'white',
            background: '#66A7F2',
            borderRight: '#66A7F2 solid 1px',
        },
        typeItemLast: {
            padding: '3px 28px',
            fontSize: '12px',
            color: '#66A7F2',
        },
        translationContainer: {
            display: 'flex',
            flexDirection: 'column',
        },
        translationRow: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
        },
        exampleSentence: {
            margin: 0,
            textAlign: 'left',
        },
        expandableBoxContainer: {
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
            marginTop: 10,
        },
        expandableBox: {
            width: '380px',
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '5px 10px',
            cursor: 'pointer',
        },
        expandableText: {
            fontWeight: 700,
            color: 'white',
            margin: 0,
        },
        practiceContainer: {
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            marginTop: 40,
            zIndex:1
        },
        practiceImage: {
            width: '300px',
        },
        textarea: {
            height: '200px',
            borderRadius: 5,
            width: '600px',
            padding: '5px',
        },
        checkButtonContainer: {
            display: 'flex',
        },
        checkButton: {
            background: '#5DD299',
            padding: '3px 28px',
            borderRadius: 100,
            color: 'white',
            fontWeight: '700',
            width: 'max-content',
            marginLeft: 'auto',
        },
        imageBox: {
            flex: 1,
            position: 'relative',
            zIndex: 0,
        },
    }),
);
