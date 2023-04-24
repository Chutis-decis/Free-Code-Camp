import './App.css'
import logo from './img/logo.jpg'
import Boton from './components/Boton'
import Screen from './components/Screen'
import BotonClear from './components/BotonClear'
import { useState } from 'react'
import { evaluate } from 'mathjs'

function App() {

  /* Componente principal 
  inpot = valor ingresado por el user*/
  const [input, setInput] = useState('')

  const agregarInput = (val) => {
    setInput(input + val)
  }

  const calcularResultado = () => {
    if (input){
      setInput(evaluate( input ))
    }else{
      alert('Ingrese valores para realozar calculos ')
    }
  }

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img src={logo} className='freecodecamp-logo' alt='Logo de Free-Code-Camp' />
      </div>

      
      <div className='contenedor-calculadora'>
        {/* PANTALLA */}
        <Screen  input={input}/>

        {/* BOTONES */}
        <div className="fila">
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div> 
        <div className="fila">
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear manejarClear = {() => setInput('')}>Clear</BotonClear>
        </div>
      </div>
    </div>
  )
}

export default App
