import React from 'react';
import { makeStyles, createStyles } from '@mui/styles';
import { Box } from '@mui/material';
type Props = {
    handleStep: () => void;
};
const TopicReassure = ({ handleStep }: Props) => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Box className={classes.reassure}>
                <h2>
                    👍 Great, we'll make sure to cover some of these topics!
                </h2>
            </Box>
            <Box onClick={handleStep} className={classes.btn}>
                Continue
            </Box>
        </Box>
    );
};

export default TopicReassure;

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            width: '100%',
            height: '100%',
            gap: 20,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        btn: {
            background: '#55AD9B',
            width: '70%',
            padding: 10,
            borderRadius: 35,
            fontWeight: 'bold',
            color: 'white',
            height: '70px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
            cursor: 'pointer',
        },
        reassure: {
            background: 'white',
            borderRadius: 50,
            width: '100%',
            height: '500px',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 20,
            boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
        },
    }),
);
