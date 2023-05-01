import '../style/formulario.css'
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

const Formulario = (props) => {
    
    /* input es lo que el usuario haya escrito hasta el moment */
    const [input, setInput] = useState('')
    
    /* Es cuando el usuario este escribiendo tenemos que cambiar el estado de este Formulario 
    Es el Form*/
    const manejarCambio = event  => {
        console.log("Escribiendo...")
        /* Va a extraer el valor del campo de texto que ingreso el usuariio */
        setInput(event.target.value)
        console.log(event.target.value)
    }

    /* El boton de agregar tarea*/
    const manejarEnnvio = event => {
        /* Nos servira para que la pagina no se vuelva a cargar cuando le mandemos un formulario */
        event.preventDefault()
        console.log("Enviando Formulario...")
        
        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completada: false
        }

        //console.log(tereaNueva)

        /* Nos lo permitira pasar a la lista de tareas  */
        props.onSubmit(tareaNueva)
    }


    return(
        /* onSubmit significa envio del formulario */
        <form className="tarea-formulario" onSubmit={manejarEnnvio}>
            <input 
                className="tarea-input" 
                type="text"
                placeholder="Escribe una tarea"
                name="texto"
                /* Cuando ocurre un cambio en el formulario que el usuario este escribiendo */
                onChange={manejarCambio}
            />
            <button className="tarea-boton">
                Agregar Tarea
            </button>
        </form>
    )
}


export default Formulario;