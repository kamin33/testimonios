import React from "react";
  function Testimonio(props) {
  return(
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        src={require(`../imagenes/testimonio-${props.imagen}.jpg`)}
        alt={props.nombre}/>
        <div className='contenedor-texto-testimonio'>
          <p className='nombre-testimonio'><strong>{props.nombre}</strong><br/>{props.pregunta}</p>
          <p className='cargo-testimonio'>{props.cargo} en <strong>{props.empresa}</strong></p>
          <p className='texto-testimonio'>"{props.Testimonio}"</p>
        </div>
    </div>
  );
}
export default Testimonio;