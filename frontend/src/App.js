import './App.css';
import React from 'react';
import EmailSignUp from './components/emailSignup/emailSignup';
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
