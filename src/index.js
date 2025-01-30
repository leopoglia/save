import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router";

import Login from './pages/login';
import Homepage from './pages/homepage';
import Companies from './pages/companies';
import RegisterCompany from './pages/register_company';


import Spreadsheets from './pages/spreadsheets';
import Development from './pages/development';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/companies/register" element={<RegisterCompany />} />
        <Route path="/companies/register/:id" element={<RegisterCompany />} />

        <Route path="/spreadsheets" element={<Spreadsheets />} />
        <Route path="/development" element={<Development />} />

      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);


