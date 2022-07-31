
import React from 'react';
import '../hojas-de-estilo/Testimonio.css';
//import imagenes from "../imagenes/Testimonio-Chica.png";


function Testimonio(props) {
  return (
    <div className='contenedor-testimonio'>
      
      <img 
        className ='imagen-testimonio'
        src={require(`../imagenes/Testimonio-${props.imagen}.png`)}
        alt='Foto de Emma' />
      <div className='contenedor-texto-testimonio'>

        
        <button type ='hover' className='button logo'>
          <a  href='https://www.instagram.com/galeriadeartesolidario/'>
          <img 
          
          className ='logo-testimonio'
          src={require(`../imagenes/${props.logopng}.png`)} alt='logo'/>
          </a>
        </button>
          

       
        
        <p className='nombre-testimonio'>
          <strong>Artista: {props.nombre}</strong> 
        </p>
       
        <p className='cargo-testimonio'>
          <strong>Obra: {props.obra} </strong>
        </p>
        <p className='texto-testimonio'>"{props.testimonio}"</p>
       
      </div>
      
      
    </div>
  );
}

export default Testimonio; 