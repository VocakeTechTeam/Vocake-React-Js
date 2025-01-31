import React from 'react';
import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { addWordToList, RootState } from '../../../store/store';
import DoneIcon from '@mui/icons-material/Done';
import { useDispatch } from 'react-redux';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

type AddToListModalProps = {
    handleClick: () => void;
    word: string;
};
const AddToListModal = ({ handleClick, word }: AddToListModalProps) => {
    const mylistCollection = useSelector(
        (state: RootState) => state.myListCollection,
    );
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    const selectedColor = '#55AD9B';
    const dispatch = useDispatch();
    const handleAddToList = (listId: string, word: string) => {
        dispatch(addWordToList({ listId, word, definition: '' }));
    };
    return (
        <Box
            sx={{
                position: 'absolute',
                top: matches ? '0%' : '50%',
                left: matches ? '0%' : '50%',
                background: 'white',
                width: matches ? '100%' : '40%',
                zIndex: 21,
                transform: matches ? '' : 'translate(-50%, -50%)',
                padding: 5,
                borderRadius: 5,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: 6,
            }}
        >
            <Box sx={{ width: '100%' }}>
                <Typography
                    textAlign={'left'}
                    fontWeight={'bold'}
                    fontSize={'22px'}
                >
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
                    let isSelected = false;
                    if (item.words.find((item) => item.word == word)) {
                        isSelected = true;
                    }
                    return (
                        <Box
                            onClick={() => {
                                handleAddToList(item.id, word);
                            }}
                            key={index}
                            sx={{
                                width: '100%',
                                padding: '5px 20px',
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                cursor: 'pointer',
                                border: isSelected
                                    ? `${selectedColor} solid 2px`
                                    : 'gray solid 2px',
                                borderRadius: 5,
                                gap: 2,
                                boxShadow:
                                    'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
                            }}
                        >
                            <img
                                src={item.image}
                                alt="image"
                                style={{ height: '50px' }}
                            />
                            <Box
                                sx={{
                                    flex: 1,
                                    alignItems: 'flex-start',
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}
                            >
                                <Typography fontWeight={'bold'}>
                                    {item.name}
                                </Typography>
                                <Typography
                                    fontSize={'14px'}
                                    color="gray"
                                    fontWeight={'medium'}
                                >
                                    {item.words.length}
                                    {' terms'}
                                </Typography>
                                <Typography color="gray" fontSize={'12px'}>
                                    updated 5 months ago
                                </Typography>
                            </Box>
                            {isSelected && (
                                <DoneIcon
                                    sx={{
                                        fontSize: '30px',
                                        strokeWidth: '20',
                                        color: selectedColor,
                                    }}
                                />
                            )}
                        </Box>
                    );
                })}
            </Box>
            <Box sx={{ width: '100%' }}>
                <Box
                    onClick={handleClick}
                    sx={{
                        marginLeft: 'auto',
                        padding: '2px 21px',
                        borderRadius: '30px',
                        background: '#55AD9B',
                        fontWeight: 'bold',
                        color: 'white',
                        cursor: 'pointer',
                        fontSize: '18px',
                        boxShadow: 'rgba(99, 99, 99, 0.5) 0px 4px 5px 0px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 'max-content',
                    }}
                >
                    Done
                </Box>
            </Box>
        </Box>
    );
};

export default AddToListModal;
