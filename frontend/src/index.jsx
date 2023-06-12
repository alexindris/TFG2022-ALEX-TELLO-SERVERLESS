/* istanbul ignore file */
import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Application from './pages/Application';
import Index from './pages/Index';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="application" element={<Application />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
