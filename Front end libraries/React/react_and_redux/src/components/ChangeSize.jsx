import React from 'react';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
//redux
const CHANGE_WIDTH = 'CHANGE_WIDTH';
const CHANGE_HEIGHT= 'CHANGE_HEIGHT';
const SHOW_WARNING = 'SHOW_WARNING';

 const initialState = {
 	width: '100px',
 	height: '100px',
 	warning: ''
 }
const changeSizeReducer = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_WIDTH:
			return {
				...state,
				width: action.width,
				warning: '',
			}
		case CHANGE_HEIGHT:
			return {
				...state,
				height: action.height,
				warning: '',
			}
		case 'SHOW_WARNING':
			return {
				...state,
				warning: 'please enter a number'
			}
		default:
			return state;
	}
}

const store = createStore(changeSizeReducer);

//react
const Comp = ({ changeWidth, changeHeight, showWarning, state}) => {
	const {width, height, warning} = state

	const changeWidthSize = e => {
		//console.log(props)
		if (!/[1-9]+/g.test(e.target.value)) {
			return showWarning()
		}
		changeWidth(e.target.value)
		
	}
	const changeHeightSize = e => {
		console.log(/[1-9]+/g.test(e.target.value))
		if (!/[1-9]+/g.test(e.target.value)) {
			return showWarning()
		}
		changeHeight(e.target.value)
	}
	return (
		<div>
			<from >
				<label htmlFor="width">Enter the width</label>
				<input id='width' type="text" onInput={changeWidthSize} />
				<button type='submit' >Submit</button>
				<br />
				<label htmlFor="height">Enter the height</label>
				<input id='height' type="text" onInput={changeHeightSize} />
				<button type='submit' >Submit</button>
				<span style={{color: 'red'}} >{warning}</span>
			</from>

			<div style={{
				border: 'solid',
				width: width,
				height: height,
			}}>
			</div>
		</div>
		)
}

//React Redux
const mapDispatchToProps = dispatch => {
	return {
		changeWidth: width => dispatch({ type: CHANGE_WIDTH, width: `${width}px` }),
		changeHeight: height => dispatch({ type: CHANGE_HEIGHT, height: `${height}px`}),
		showWarning: () => dispatch({ type: SHOW_WARNING })
	}
}
const mapStateToProps = state => {
	return {
		state: state,
	}
}

const Container = connect(mapStateToProps, mapDispatchToProps)(Comp);

const ChangeSize = () => {
	return (
		<Provider store={store} >
			<Container />
		</Provider>
		)
}


export default ChangeSize