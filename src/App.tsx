import React, { FC } from 'react';
import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import Box from '@mui/material/Box';

const App:FC = () => {

  const theme = createTheme({
    palette: {
      mode: 'dark'
    }
  });

  return (
    <ThemeProvider theme={theme}>
    <Box
      sx={{ 
        bgcolor: 'background.default', 
        color: 'text.primary',
        p: 3
      }}
      style={{
        minHeight: '100vh', 
        margin: '-8px'
      }}
    >
    <Navbar />
    <AppRouter/>
  </Box>
  </ThemeProvider>

  );
};

export default App;