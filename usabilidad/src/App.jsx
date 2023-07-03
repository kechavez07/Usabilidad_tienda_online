import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //variables dinamicas[primer nombre, nombre final]para que se renderise
  const [contador,setContador] = useState(0);//dentro de usestate hay que poner el tipo de dato o objeto
  const [tex, setTex] = useState('hola')
  //variables estaticas para que se renderise
  const prueba = 20;

  //funcion flecha 
  const contador_ = () =>{
    setContador(contador + 1)
    setTex('adios')
  }  
  //controlar un estado de vectadero y falso
  

  return (
    // codigo <html>
    <>
      <button onClick={()=>contador_ ()}>
        incrementar {contador}
      </button>
      <p >
        {tex}
      </p>
    </>
  )
}

export default App
