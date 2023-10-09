import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './views/Home/Home';
import Navbar from './components/Navbar/Navbar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <>
    <Navbar/>
    <Home/>
  </>
  
);


