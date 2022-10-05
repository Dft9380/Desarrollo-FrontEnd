import logo from './logo.svg';
import './App.css';

function Heading(){
  return(
    <h1>Este es un Encabezado</h1>
  )
}
function App() {
  return (
    <div className="App"> 
      Este es el código inicial para el laboratorio sin calificar "Su primer componente" 
      <Heading /> 
    </div> 
  );
}

export default App;
