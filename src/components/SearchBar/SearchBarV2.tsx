import React from 'react';
import { SearchIcon } from '../../assets/icon/SearchIcon';
const SearchBarV2 = () => {
    return (
        <div
            style={{
                background: '#EFEFEF',
                padding: '5px 15px',
                borderRadius: 100,
                width: '50%',
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <input
                type="text"
                placeholder="Search for anything"
                style={{
                    outline: 'none',
                    border: 'none',
                    background: 'none',
                    flex: 1,
                    padding: 10,
                }}
            />
            <SearchIcon strokeWidth="2" />
        </div>
    );
};

export default SearchBarV2;
