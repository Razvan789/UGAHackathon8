import './App.css';
import React from 'react';
import EmailSignUp from './components/emailSignup/emailSignup';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/layout/layout';
import Login from './components/login/login';
import Landing from './components/landing/landing';
import SignUp from './components/signup/signup';
import Ispeak from './components/ispeak/ispeak';
import InterestPage from './components/interestPage/interestPage';
import Profiledeets from './components/profiledeets/profiledeets';
import Iama from './components/iama/iama';
import Home from './components/home/home';
import AddGroup from './components/home/addGroup';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/landing" element={<Landing />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/emailSignup" element={<EmailSignUp />} />
          <Route path="/ispeak" element={<Ispeak />} />
          <Route path="/interestPage" element={<InterestPage />} />
          <Route path="/profiledeets" element={<Profiledeets />} />
          <Route path="/iama" element={<Iama />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/addGroup" element={<AddGroup />} />

        </Route>
        <Route path="*" element={<h1 style={{textAlign:'center'}}>404: Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
