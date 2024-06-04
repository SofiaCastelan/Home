import { useRef } from 'react';
import Descarga from '../mg/logo-color.png';
import { FaBars, FaTimes } from 'react-icons/fa'
import { FaCircleUser } from "react-icons/fa6";
import "../styles/main.css"

function Navbar() {
  
  const navRef = useRef();
  
  const showNavbar = () => {
    navRef.current.classList.toggle(
      "responsive_nav"
    );
  };

  return (
    
    <header className='headd'>
         <img className='nav-logo'
        src={Descarga}
        alt={"Logo"}/>
        <nav ref={navRef}>
            <a href="/#" >Inicio</a>
            <a href="/#" >Acerca de</a>
            <a href="/#" >Planes</a>
            <a href="/#" >Contacto</a>
           
           <a href="/#" className='Iniciar'><FaCircleUser className='user'/>Iniciar sesión</a>
            <a href="/#" className='Demo'>Solicita una Demo</a>
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