import React from "react";
import '../stylesheets/Testimonio.css'

export const Testimonio = (props) => {
    return(
        <div className="contenedor-testimonio">
            <img className="imagen-testimonio" src={props.image} alt={props.alt} />
            <div className="contenedor-texto-testimonio">
                <p className="nombre_testimonio"><strong>{props.nombre}</strong> en {props.pais}</p>
                <p className="cargo-testimonio">{props.cargo} en <strong>{props.empresa} </strong></p>
                <p className="texto-testimonio">"{props.testimonio}"</p>
            </div>
        </div>
    )
}
