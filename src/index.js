import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, createTheme } from "@mui/material";
import App from './App';

const theme = createTheme({
    typography: {
        a: {
            fontSize: '16px',
            fontWeight: '400',
            lineHeight: '24px',
            fontStyle: 'normal',
            fontFamily: 'Poppins',
            textDecoration: 'none',
            textTransform: 'uppercase',
        },
        h6: {
            fontSize: '24px',
            fontWeight: '500',
            lineHeight: '81%',
            fontStyle: 'normal',
            fontFamily: 'Poppins',
        },
        p: {
            fontSize: '16px',
            fontWeight: '400',
            lineHeight: '81%',
            fontStyle: 'normal',
            fontFamily: 'Poppins',
        },
    },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </Router>
);