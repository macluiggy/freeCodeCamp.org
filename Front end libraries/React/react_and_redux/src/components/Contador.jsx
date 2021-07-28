import {useState} from 'react';
import { connect, Provider} from 'react-redux';
import { createStore } from 'redux';

//redux
//empezamos con la accion que usara el dispatch
const INCREMENT = 'INCREMENT';
const increment = () => {
	return {
		type: INCREMENT,
	}
}
//ahora con el reductor
const incrementReducer = (state = 0, action) => {
	return {
		INCREMENT: state+1,
	}
}
//ahora creamos el store
const store = createStore(incrementReducer);

//react
const Comp = ({ state, increaseValue }) => {
	//const [state, setState] = useState(0) 
	return (
	 		<div>
	 			<button>+</button><button>-</button><button>reset</button>
	 			<p>{state}</p>
	 		</div>
		)
}

//react-redux
const mapStateToProps = state => {
	return {
		state: state,
	}
}
const mapDispatchToProps = dispatch => {
	return {
		increaseValue: (incrementDispatch) => {
			dispatch(incrementDispatch)
		},
	}
}

//ahora conectamos react con redux
const Connector = connect(mapStateToProps, mapDispatchToProps)(Comp)

const Contador = () => {
	return (
		<Provider store={store} >
			<Connector />
		</Provider>
		)
}
export default Contador