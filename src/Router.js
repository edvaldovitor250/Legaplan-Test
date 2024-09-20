import React from 'react';
import { BrowserRouter, Route as R, Routes } from 'react-router-dom';
import Home from './pages/Home';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <R path="/" element={<Home/>} />
       
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
