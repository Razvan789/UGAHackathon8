import './App.css';
import React from 'react';
import Landing from './components/landing/landing';
import EmailSignUp from './components/emailSignup/emailSignup';
function App() {
  return (
    <div className="App">
      <section className='full-h'>
        <EmailSignUp />
      </section>
    </div>
  );
}

export default App;
