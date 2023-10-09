import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './views/Home/Home'
import Destination from './views/Destination/Destination'



const router = createBrowserRouter([
  {
      path: '/',
      element: <Home/>
  },
  {
      path: '/destination',
      element: <Destination/>
  },

 
 
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <>
     <RouterProvider router={router} />
  </>
  
);


