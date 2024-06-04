import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Bienvenido from './components/Bienvenido'
import Ofrece from './components/Ofrece'

function App() {
  

  return (
    <React.Fragment>
        <Navbar />
        <Header 
        titulo1 = "Aumenta tus ventas mejora tu "
        titulo2 = "negocio, "
        titulo3 = "gestiona "
        titulo4 = "con limenka 360"
        />
        <Bienvenido />
        <Ofrece />
    </React.Fragment>
  )
}

export default App
