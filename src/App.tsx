import React, { FC } from 'react';
import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar';

const App:FC = () => {
  return (
    <div>
      <Navbar />
      <AppRouter/>
    </div>
  );
};

export default App;