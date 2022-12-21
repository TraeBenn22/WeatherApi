import { ThemeProvider } from '@mui/material';
import React from 'react';
import Routes from './Routes/Routes';
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes path="/" />
    </ThemeProvider>

  );
}

export default App;
