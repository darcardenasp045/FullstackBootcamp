import './App.css';
import Descripcion from './descripcion';

const Mensaje = () => {
  return <h1>Hola Mundo</h1>
}

const oper1 = 3
const oper2 = 4


function App() {
  

  return (
    <div className="App">
      <h1>Estamos trabajando en la pagina</h1>
      <div>
        <Mensaje />
        <br/>
        {oper1+oper2}
        <Descripcion color = 'red' message = 'Estamos trabajando'/>
        <Descripcion color = 'yellow' message = 'En un curso de React'/>
        <Descripcion color = 'blue' message = 'de midu dev por youtube'/>
      </div>
      
    </div>
  );
}

export default App;
