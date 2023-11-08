import logo from './logo.svg';
import './App.css';
import './styles/Testimonio.css';
import Testimonio from './componentes/Testimonios'
function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen los programadores gosus</h1>
      <Testimonio
      nombre='Miles Morales'
      imagen='miles'
      pregunta='programando?¡'
      cargo='Ingeniero de Software'
      empresa='Disney'
      Testimonio='no seeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'/>
      <Testimonio
      nombre='Simone'
      imagen='simone'
      pregunta='guadafa el negro del manual de supervivencia escolar de ned?¡'
      cargo='Ingeniero de sistemas'
      empresa='Essalud'
      Testimonio='Esooooooooooooooooooooooooooooooooooooooooooooooooooooo'/>
      <Testimonio
      nombre='Luis Miguel'
      imagen='luismiguel'
      pregunta='Argentino?¡¡¡'
      cargo='Ingeniero de IA'
      empresa='Yo soy'
      Testimonio='che boludo por mi que se vayan todos bien a la mi#$a la p##a que los pario'/>
      </div>  
    </div>
  );
}

export default App;
