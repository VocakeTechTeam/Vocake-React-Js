import React from 'react';
import './App.css';
import Routes from './routes';
import { Box } from '@mui/material';

function App() {
    return (
        <Box className="App" sx={{ height: '100%', width: '100%' }}>
            <Routes />
        </Box>
    );
}

export default App;
