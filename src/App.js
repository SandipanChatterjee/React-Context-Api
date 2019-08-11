import React from 'react';

import './App.css';
import A from './Components/A';
import { UserProvider, ChannelProvider } from './context';

function App() {
  return (
    <div className="App">
      <UserProvider value='Sandipan'>
        <ChannelProvider value='Viswas'>
          <A />
        </ChannelProvider>
      </UserProvider>
      
    </div>
  );
}

export default App;
