import './App.css';
import React from 'react';
import Landing from './components/landing/landing';
import EmailSignUp from './components/emailSignup/emailSignup';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/layout/layout';
import Login from './components/login/login';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/landing" element={<Landing />} />
          <Route path="/signup" element={<EmailSignUp />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
