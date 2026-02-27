
import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from './Home';          
import Contact from './Contact';     

function Layout() {
  return (
    <div className="d-flex flex-column min-vh-100">
    
      <Home />
{/* <HeroAndFeautres/> */}
      
      <main className="flex-grow-1">
        <Outlet /> 
      </main>

      
      <footer>
        <Contact />
      </footer>
    </div>
  );
}

export default Layout;