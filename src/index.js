import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';
import About from './pages/About';
import Vans from './pages/Vans';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './comp/Navbar'
import VanPage from './pages/VanPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar/>
    <div className="container">
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/vans' element={<Vans />}/>       
        <Route path='/vans/:id' element={<VanPage />}/>       
      </Routes>
    </div>
  </BrowserRouter>
);