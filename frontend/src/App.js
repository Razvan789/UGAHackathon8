import './App.css';
import React from 'react';
import WelcomeMessage from './components/welcome/welcome';
import Landing from './components/landing/landing';
import Login from './components/login/login';

function App() {
  return (
    <div className="App">
      <section className='full-h'>
        <Landing />
      </section>
    </div>
  );
}

export default App;
