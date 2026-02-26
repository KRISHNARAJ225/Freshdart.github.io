import  React from 'react'
import { Routes,Route , NavLink,BrowserRouter } from 'react-router-dom'
import Orders from './Orders';

function Router(){
return(
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
)
}
export  default Router; 