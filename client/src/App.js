import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/admin/dashboard';

// websites
import Home from './components/home';
import Aboutus from './components/aboutus';
import Contactus from './components/contactus';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/aboutus" element={<Aboutus/>} />
          <Route path="/contactus" element={<Contactus/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;