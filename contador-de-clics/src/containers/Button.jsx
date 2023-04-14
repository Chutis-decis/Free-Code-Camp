import '../style/boton.css'

/* Si quieres evitar el props tienes que hacer lo siguiente */
const Button = ({texto, esBotonDeClic, manejarClic}) => {
    return(
        /* Operadores ternarios en el className */
        <button className={esBotonDeClic ? "boton-clic" : "boton-reiniciar"}
        onClick={manejarClic}>
            {texto}
        </button>
    )
}

export default Button