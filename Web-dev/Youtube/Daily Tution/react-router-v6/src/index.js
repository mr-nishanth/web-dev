import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Invoice from './components/Invoice';
import Expenses from './components/Expenses';
import Bills from './components/Bills';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} >
        <Route path='/invoice' element={<Invoice />} >

          <Route path=':invoiceid' element={<Bills />}></Route>

        </Route>
        <Route path='/expenses' element={<Expenses />} />

        {/* No matching route */}
        <Route path='*' element={
          <main className='text-center'>
            <p className='text-3xl'>
              There's nothing here!
            </p>
          </main>
        } />
      </Route>

    </Routes>
  </BrowserRouter>
);
