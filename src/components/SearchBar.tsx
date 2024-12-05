import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import { SearchIcon } from '../assets/icon/SearchIcon';
import { useSearch } from '../context/SearchContext';

const SearchBar = () => {
    const classes = useStyles();
    const { userSearch, handleChange, search } = useSearch();
    return (
        <Box className={classes.root}>
            <input
                placeholder="Search"
                className="input"
                type="text"
                onChange={handleChange}
                value={userSearch != null ? userSearch : ''}
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
                    onClick={search}
                >
                    <SearchIcon width="20" height="20" />
                </div>
            </Box>
        </Box>
    );
};

export default SearchBar;

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            borderRadius: '25px',
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            height: '30px',
            overflow: 'hidden',
            boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
            '& input': {
                padding: '0 10px 0 10px',
                borderRadius: '25px',
                outline: 'none',
                border: 'none',
                width: '100%',
            },
            background: 'white',
        },
    }),
);
