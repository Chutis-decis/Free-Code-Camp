import { useState } from "react"
import Formulario from "./Formulario"
import Task from "./Task"
import '../style/lista-tareas.css'

const ListaTask = () => {
    
    const [tareas, setTareas] = useState([]) 
    
    const agregarTarea = tarea => {
        console.log(tarea)
        /* Probandi que la cadena no esta vacia  */
        if (tarea.texto.trim()){
            /* trim() es un metodo que nos permite quitar los espacios del principio o del final de una cadena de caracteres */
            tarea.texto = tarea.texto.trim()
            /* ...tareas esta en el estado y se esta haciendp esto porque queremos agregar las tareas al principi del arreglo y los estamos convirtiendo a objetos individuales de un arreglo  */
            const tareasActualizadas = [tarea, ...tareas]
            setTareas(tareasActualizadas)
        }
    }

    const eliminarTarea = id => {
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id)
        setTareas(tareasActualizadas)
    }

    const completarTarea = id => {
        const tareasActualizadas = tareas.map(tarea => {
        if (tarea.id === id){
            tarea.completada = !tarea.completada
        }
        return tarea
        setTareas(tareasActualizadas)
    })
    

    return(
        /* A las <> se les conoce como FRAGMENTOS y es lo que sustituye a los div */
        <>
            <Formulario onSubmit={agregarTarea}/>
            <div className="tareas-listas-contenedor">
                {
                    tareas.map((tarea) => 
                    <Task 
                    /* key debe ser unico */
                    key={tarea.id}
                    id={tarea.id}
                    texto= {tarea.texto}
                    completada = {tarea.completada}
                    completarTarea={tarea.completarTarea}
                    eliminarTarea = {eliminarTarea}
                    />
                    )
                }
            </div>
        </>
    )
    }
}

export default ListaTask;