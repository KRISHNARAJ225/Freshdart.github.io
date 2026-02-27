// src/App.jsx
import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import {useState} from 'react'

import Layout from './components/Producer/Layout';
import HomePage from './components/Producer/Home';     // if you want separate home content
import Orders from './components/Producer/Orders';
import Products from './components/Producer/Products';
import Cart from './components/Producer/Cart';
import Contact from './components/Producer/Contact';   // your contact/footer component

function App() {
  const[Home , SetHome]=useState("/orders");
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/"          element={<div className="container py-5 text-center"><h1>Welcome to FreshDart</h1></div>} />
        <Route path="/orders"    element={<Orders />} />
        <Route path="/products"  element={<Products />} />
        <Route path="/cart"      element={<Cart />} />
        <Route path="/contact"   element={<Contact />} />
        {/* Add more routes here if needed */}
      </Route>

   
      <Route path="*" element={<div className="text-center py-5" style={{backgroundColor:'aqua'}}><h2 style={{color:'red' }}> 
        404 - Page not found
        <button type="submit" className='bg-success mx-5' onClick={()=> element=("/Orders")}>
          Go Home 
        </button>
        </h2></div>} />
    </Routes>
  );
}

export default App;