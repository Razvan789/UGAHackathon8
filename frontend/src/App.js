import './App.css';
import React from 'react';
import WelcomeMessage from './components/welcome/welcome';
import Landing from './components/landing/landing';
import Login from './components/login/login';
import Signup from './components/signup/signup';

function App() {
  return (
    <div className="App">
      <section className='full-h'>
        <Signup />
      </section>
    </div>
  );
}

export default App;
