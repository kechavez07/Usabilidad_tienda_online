import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './componets/navBar'
import Filter from './componets/Filter'
import Categorias from './componets/Categorias'
import Producto from './componets/Producto'
import Login from './componets/Login'
import {HashRouter,Routes,Route} from 'react-router-dom'
import Register from './componets/Register'
import Home from './componets/Home'
import SobreNosotros from './componets/SobreNosotros'



function App() {

  return (
    // codigo <html>
    <div className='App'>
    
    <HashRouter>
    <NavBar/>
      <Routes>
        <Route>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/sobreNosotros' element={<SobreNosotros/>}/>
        </Route>
      </Routes>
    </HashRouter>
    </div>
  )
}

export default App
