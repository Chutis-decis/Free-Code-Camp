import './App.css';
import {Testimonio} from './components/Testimonio.jsx'
import img1 from './img/woman2.png'
import img2 from './img/men1.png'
import img3 from './img/woman1.png'

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal '>
        <h1>Esto es lo que no dicen a los alumnos de freecodecamp</h1>
        <Testimonio
        nombre="Emma Bostian"
        pais="Suecia"
        image={img1}
        alt="Emma Bostian"
        cargo="Ingeniera de software "
        empresa="Spotify"
        testimonio="Siempre he tenido problemas con Java peso soy una muy buena desarrolladora de software con diagramación UML"/>

        <Testimonio
        nombre="Shawn Wang"
        pais="Singapur"
        image={img2}
        alt="Shawn Wang"
        cargo="Ingeniero de software "
        empresa="Spotify"
        testimonio="Da miedo cambiar de carrera. Solo gane la confianza de que podia programar trabajando atravez de los cientos de horas de lecciones gratuitas en FreeCodeCamp. Dentro de un año obtuve un trabajo de seis cifras como ingeniero de software "/>

        <Testimonio
        nombre="Sara Chima"
        pais="Nigeria"
        image={img3}
        alt="Sara Chima"
        cargo="Ingeniero de software "
        empresa="ChatDesk"
        testimonio="FreeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurados llevo mis conocimientos de programación de un nivel principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollo en una empresa increible"/>
      </div>
    </div>
  );
}

export default App;
