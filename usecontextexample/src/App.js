import React, { useState } from 'react';
import './App.css';
import Hijo from './components/Hijo';
import { UserProvider } from './UserProvider';

function App() {
  return (
    <UserProvider>
      <div className="App">
        <Hijo />
      </div>
    </UserProvider>
  );
}

export default App;