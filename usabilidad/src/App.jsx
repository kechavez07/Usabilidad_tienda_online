import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './componets/navBar'
import Filter from './componets/Filter'
import Categorias from './componets/Categorias'
import Producto from './componets/Producto'


function App() {
  
   
 
  

  return (
    // codigo <html>
    <>
    <div className='App'>
        <NavBar/>
        <Filter/>
      <div className='shop'>
        <Categorias/>
        <Producto/>
      </div>
    </div>
    </>
  )
}

export default App
