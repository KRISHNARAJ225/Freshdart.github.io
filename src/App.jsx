import React  from 'react'
import './App.css'
import  Home from'./components/Producer/Home'
import Orders from './components/Producer/Orders'
import Products from './components/Producer/Products'
// import Cart from './components/Producer/Cart'
// import Contact from './components/Producer/Contact'
import { Routes,Route , NavLink,BrowserRouter } from 'react-router-dom'   

function App() {
  <Routes>
    <link to="/" element={<Home/>} />
    <link to="/Orders" element={<Orders/>}/>
    <link to="/Products" element={<Products/>}/>
    <link to="/Profile" element={<Profile/>}/>
    <link to ="/Contact" element={<Contact/>}/>

    <route path="/" element={<Home/>} />
    <route path="/Orders" element={<Orders/>}/>
    <route path="/Products" element={<Products/>}/>
    <route path="/Profile" element={<Profile/>}/>
    <route path ="/Contact" element={<Contact/>}/>
</Routes>

  return (
  <div>
<Home/>
<main>
<Orders/>
</main>
<Products/>
<Router/>
  </div>
  )
}

export default App
