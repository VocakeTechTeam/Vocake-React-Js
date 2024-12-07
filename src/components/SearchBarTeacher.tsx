import React, { ChangeEvent, useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import { SearchIcon } from '../assets/icon/SearchIcon';
import { useSearch } from '../context/SearchContext';

const SearchBarTeacher = () => {
    const classes = useStyles();
    const [value, setValue] = useState('');
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {};
    const handleSearch = () => {};
    return (
        <Box className={classes.root}>
            <input
                placeholder="Search"
                className="input"
                type="text"
                onChange={handleChange}
                value={value}
                style={{ background: 'none' }}
            />
            <Box
                sx={{
                    paddingRight: '10px',
                    paddingLeft: '10px',
                    height: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <div
                    style={{
                        cursor: 'pointer',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}
                    onClick={handleSearch}
                >
                    <SearchIcon width="12" height="12" color="#627B87" />
                </div>
            </Box>
        </Box>
    );
};

export default SearchBarTeacher;

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            borderRadius: '10px',
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            overflow: 'hidden',
            '& input': {
                padding: '0 10px 0 10px',
                borderRadius: '25px',
                outline: 'none',
                border: 'none',
                width: '100%',
            },
            background: 'white',
            backgroundColor: '#F6F6FB',
        },
    }),
);
