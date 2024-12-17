import React from 'react';
import { Box, Typography } from '@mui/material';
import Card from '../../MyList/components/Card';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
const AddToListModal = () => {
    const mylistCollection = useSelector(
        (state: RootState) => state.myListCollection,
    );
    return (
        <Box
            sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                background: 'white',
                // height: '100px',
                width: '40%',
                zIndex: 21,
                transform: 'translate(-50%, -50%)',
                padding: 5,
                borderRadius: 5,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                gap:6
            }}
        >
            <Box sx={{ width: '100%' }}>
                <Typography textAlign={'left'} fontWeight={"bold"} fontSize={"22px"}>
                    Add this word to a list
                </Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 3,
                    width: '100%',
                    alignItems: 'flex-start',
                }}
            >
                {mylistCollection.collections.map((item, index) => {
                    return (
                        <Box
                            key={index}
                            sx={{
                                width: '100%',
                                padding: '5px 20px' ,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                cursor: 'pointer',
                                border: "gray solid 1px",
                                borderRadius:5
                            }}
                        >
                            <Typography fontWeight={"bold"}>{item.name}</Typography>
                            <Typography fontSize={"14px"}>{item.words.length} </Typography>
                            <Typography color='gray' fontSize={"12px"}>updated 5 months ago</Typography>
                        </Box>
                    );
                })}
            </Box>
        </Box>
    );
};

export default AddToListModal;
