import './App.css'
import Button from './containers/Button'
import Contadores from './containers/Contadores'
import freeCodeCampLogo from './img/logo.jpg'

/* Importando Hooks */
import { useState } from 'react'

function App() {
  /* Creando el estado -> nimClics  asignandola al setNumClics el 0 es un valor inicial de nuestro estado (numClics) y luego con setNumClics vamos a poder actualizar el numero de clics*/
  const [numClics, setNumClics] = useState(0)

  const manejarClic = () => {
    setNumClics (numClics + 1)
  }

  const reiniciarContador = () => {
    setNumClics(0)
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-nedor'>
        <img 
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo de freeCodeCamp' />
      </div>


      <div className='contenedor-princial'>
        <Contadores numClics={numClics} />
      
        <Button
        texto="Clic"
        esBotonDeClic={true}
        manejarClic={manejarClic}/>
      
        <Button 
        texto="Reiniciar"
        esBotonDeClic={false}
        manejarClic={reiniciarContador}/>
      </div>
    </div>
  )
}

export default App
