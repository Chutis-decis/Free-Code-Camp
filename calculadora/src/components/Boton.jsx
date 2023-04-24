import '../style/boton.css'


const Boton = (props) => {
    const esOperador = valor => {
        /* Si valor no es un numero  */
        return isNaN(valor) && (valor != ".") && (valor != "=");
    }
    
    return (
        <div className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ""}`.trimEnd()}
        onClick={() => props.manejarClic(props.children)}
        >
            {props.children}
        </div>
    )
}

/* Cuando declaramos a children lo que le estamos diciento es que agarre la propiedad que no este definida en la clase App.jsx 
Las (``) comillas invertidas nos sirven para crear PLANTILLAS LITERALES (TEMPLATE LITERALS) nos permitiran crear una cadena de caracteres que puede contener cierto codigo de Java Script para definir el resultado
EsOperador = + - * / 

El metodo trim() es un metodo que te permite remover espacios en blanco del principio o del trimEnd() final de una cadena de caracteres

el operador es una clase que nos servira para css al igual que boton-contenedor

cuando en el onClick si queremos que nos regrese el valor de manejarClic() tenemos que pasarle una funcion para que nos lo imprima y esta funcion es anonima */

export default Boton