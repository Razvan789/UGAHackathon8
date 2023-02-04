import './App.css';
import React from 'react';
import EmailSignUp from './components/emailSignup/emailSignup';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/layout/layout';
import Login from './components/login/login';
import Landing from './components/landing/landing';
import SignUp from './components/signup/signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/landing" element={<Landing />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/emailSignup" element={<EmailSignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
