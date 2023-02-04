import './App.css';
import React from 'react';
import WelcomeMessage from './components/welcome/welcome';
import Landing from './components/landing/landing';
import Login from './components/login/login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WelcomeMessage userID={1}/>
      </header>
      <section className='full-h'>
        <Landing />
      </section>
      <section className='full-h'>
        <Login />
      </section>
    </div>
  );
}

export default App;
