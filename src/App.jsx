import { ThemeProvider } from '@mui/material';
import React from 'react';
import Router from './Routes/Routes';
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
            <Router path="/" />
    </ThemeProvider>

  );
}

export default App;
