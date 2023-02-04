import './App.css';
import React from 'react';
import WelcomeMessage from './components/welcome';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WelcomeMessage userID={1}/>
      </header>
    </div>
  );
}

export default App;
