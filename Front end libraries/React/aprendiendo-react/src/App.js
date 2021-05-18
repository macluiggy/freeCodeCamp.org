/*import logo from './logo.svg';*/
import './App.css';
import React, {Component} from 'react';
import tasks from './sample/tasks.json';
import Tasks from './components/Tasks';


class App extends Component {
  state = {
    tasks: tasks
  }
  render() {
    return <div>
        <Tasks tasks={this.state.tasks}/>
    </div>
  }
}

export default App;

/*function Saluda() {
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

const ChaoMundo = () => <div class="hello">chao mundo</div>*/

/*function DiAlgo(props) {
    return (<div class="hello"> 
    <h3>{props.subtitle}</h3>
     {props.texto} 
     </div>)
}*/

/*class DiAlgo extends React.Component {

    toggleShow = () => {
        //if (this.state.mostrar) {
        //  // statement
        //  this.setState({ mostrar: false })
        //} else {
        //  // statement
        //  this.setState({ mostrar: true })
        //}
        this.setState({ mostrar: !this.state.mostrar })

    }

    state = {
        mostrar: true,
    }
    render() {
        if (this.state.mostrar) {
            return (
                <div class="hello"> 
    <h3>{this.props.subtitle}</h3>
     {this.props.texto}
     <button onClick={this.toggleShow}>Ocultar</button>
     </div>
            )
        }
        return (
            <div class="hello"> 
    <h3>{this.props.nada}</h3>
    <button onClick={this.toggleShow}>Mostrar</button>
     </div>
        )
    }
}

function App() {
    return (
        <div className="App">This is my component:
     <Saluda/> {holamundo()} {noHayTexto()} <ChaoMundo/> 
     <DiAlgo texto="hola mi compa"/>
     <DiAlgo texto="hola mi yabe" subtitle="Que mas" nada="no hay nada que mostrar"/>
     </div>
    );
}*/