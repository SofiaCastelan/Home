import React from 'react';
import Descarga from '../mg/logo-color.png';
import { FaBars, FaTimes } from 'react-icons/fa'

function Navbar() {
  return (
    <>
    <header>
         <img className=''
        src={Descarga}
        alt={"Oda"}/>
        <nav>
            <a href="/#">Inicio</a>
            <a href="/#">Acerca de</a>
            <a href="/#">Planes</a>
            <a href="/#">Contacto</a>
            <a href="/#">Iniciar sesión</a>
            <a href="/#">Solicitar una Demo</a>
            <button>
                <FaTimes/>
            </button>
        </nav>
        <button>
          <FaBars />
        </button>
    </header>
    </>
  )
}

export default Navbar
