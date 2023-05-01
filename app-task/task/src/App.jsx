import './App.css'
import ListaTask from './components/ListaTask'
import imgLogo from './img/logo.jpg'

function App() {

  return (
    <>
      <div className='aplicacion-tareas'>

        {/* Logo */}
        <div className='freecodecamp-logo-contenedor '>
          <img src={imgLogo} className='freecodecamp-logo' alt="Logo" />
        </div>

        {/* Lista Principal */}
        <div className='tareas-lista-principal'>
          <h1>Mis Tareas</h1>
          <ListaTask/>
        </div>
      </div>
    </>
  )
}

export default App
