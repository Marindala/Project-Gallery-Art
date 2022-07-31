
import './App.css';
import Testimonio from './componentes/Testimonio.jsx';
//import imagenes from './imagenes/Testimonio-Chica.png'

function App() {
  return (
    <div className="App">
       <div className='contenedor-principal'>
        <h1>Bienvenidos a Galeria de Arte Solidario</h1>
        <Testimonio
          nombre='López Marina MariLó'
          logopng='logopng'
          imagen='Chica'
          obra='Mujer con Trazo Infinito'
          testimonio='Obra realizada sobre soporte de  bastidor, Medidas de  30x40, técnica mixta, año 2021.' 
          />
        <Testimonio
          nombre='López Marina MariLó'
          logopng='logopng'
          imagen='Leon'
          obra='Corazón de León'
          testimonio='Obra realizada sobre soporte de  madera, Medidas de  80x90, técnica mixta, año 2018.' 
          />
        <Testimonio 
          nombre='López Marina MariLó'
          logopng='logopng'
          imagen='Suelta'
          obra='Soltar'
          testimonio='Obra realizada sobre soporte de  madera con marco, Medidas de  50x70, técnica mixta, año 2018.' 
          />
      </div>
    </div>
  );
}

 
export default App;
