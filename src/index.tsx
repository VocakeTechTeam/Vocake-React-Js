import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme';
import { AuthProvider } from './context/AuthContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SearchContextProvider } from './context/SearchContext';
import { Provider } from 'react-redux';
import { store } from './store/store';
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <AuthProvider>
                <ThemeProvider theme={theme}>
                    <SearchContextProvider>
                        <CssBaseline enableColorScheme />
                        <BrowserRouter>
                            <App />
                            <ToastContainer />
                        </BrowserRouter>
                    </SearchContextProvider>
                </ThemeProvider>
            </AuthProvider>
        </Provider>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
