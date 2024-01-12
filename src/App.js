
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';


import Homepage from './pages/Homepage';
import AboutPage from './pages/AboutPage';

import AuthLayout from './layouts/AuthLayout';
import Defaultlayout from './layouts/Defaultlayout';

import LoginPage from './pages/LoginPage';
import RegisterForm from './components/RegisterForm';
import Gallary from './pages/Gallary';

function App() {
  return (
    <Router>
      <div>
        <Routes>
        <Route element={<Defaultlayout/>}>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/gallary" element={<Gallary />} />
          </Route>
          <Route element={<AuthLayout/>}>

          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterForm/>} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
