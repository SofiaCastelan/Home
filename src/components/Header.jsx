import React from 'react'
import Hero from '../mg/hero-shape.png'
import Circulo1 from '../mg/hero-circle.png'
import Circulo2 from '../mg/hero-circle-yellow.png'
import '../styles/Header.css'

function Header(props) {
    return (
        <>
        <section>
        <div className='headerr'>
            <div className='circulo1-header'>
                <img src={Circulo1} alt={"circulo1"} id='circulo1'/>
            </div>
            <div className='circulo2-header'>
                <img src={Circulo2} alt={"circulo2"} id='circulo2'/>
            </div>
            <div className='titulo-header'>
                <h1>{props.titulo1} 
                <div className='titulo2'><strong>{props.titulo2}</strong></div> 
                <strong>{props.titulo3}</strong>{props.titulo4}</h1>
            </div>
            <div className='texto-header'>
                <p>Una solución para tener el control y organización para un trabajo óptimo para su negocio.</p>
            </div>
            <div className='btn-Demostracion'>
                <button className='btn-Demos'>Solicita una Demostracion</button>
            </div>

            <div className='imagen-personas-header'>
                <img src={Hero} alt={'Hero-shape'} id='imagen-personas'/>
            </div>
    </div>
    </section>
        </>
  )
}

export default Header
