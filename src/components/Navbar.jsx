import React from 'react';
import { useRef } from 'react';
import Descarga from '../mg/logo-color.png';
import { FaBars, FaTimes } from 'react-icons/fa'
import "../styles/main.css"

function Navbar() {
  
  const navRef = useRef();
  
  const showNavbar = () => {
    navRef.current.classList.toggle(
      "responsive_nav"
    );
  };

  return (
    
    <header>
         <img className=''
        src={Descarga}
        alt={"Oda"}/>
        <nav ref={navRef}>
            <a href="/#">Inicio</a>
            <a href="/#">Acerca de</a>
            <a href="/#">Planes</a>
            <a href="/#">Contacto</a>
            <a href="/#">Iniciar sesión</a>
            <a href="/#">Solicitar una Demo</a>
            <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                <FaTimes/>
            </button>
        </nav>
        <button className='nav-btn' onClick={showNavbar}>
          <FaBars />
        </button>
    </header>
    
  )
}

export default Navbar
