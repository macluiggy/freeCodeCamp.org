import logo from './logo.svg';
import './App.css';

function Saluda() {
  // body... 
  return (
    <div class="hello">hello world</div>
    )
}
function holamundo() {
  return (
    <div class="hello">Hola mundo</div>
    )
}

let noHayTexto = () => <div class="hello">No hay testo</div>

const ChaoMundo = () => <div class="hello">chao mundo</div>
function App() {
  return (
    <div className="App">This is my component: <Saluda/> {holamundo()} {noHayTexto()} <ChaoMundo/> </div>
  );
}

export default App;
