import React from 'react';
import './scss/header.scss';
import axios from 'axios';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';




//redux
const FETCH_DATA = 'FETCH_DATA';
//actions
const initialState = {
	quote: '',
	author: '',
	id: ''
}

const reducer = (state=initialState, action) => {
	switch (action.type) {
		case FETCH_DATA:
			return {
				quote: action.quote,
				author: action.author,
				id: action.id,
			}
		default:
			return state;
	}
}

const store = createStore(reducer);

//store.dispatch({ type: FETCH_DATA })
axios.get('http://quotes.stormconsultancy.co.uk/random.json')
		.then(res => {
			
			const {quote, author, id} = res.data
			console.log(quote)
			store.dispatch({ type: FETCH_DATA, quote: quote, author: author, id: id})
		})
//react
const Comp = ({state, fetchNewQuote}) => {
	const {quote, author, id} = state
	const newQuote = () => fetchNewQuote()
	return (
		<header id='quote-box'>
	      <div id='quote-text'>
	        <span id='text' >{quote}</span>
	      </div>
	      <div id='quote-author'>
	        <span id='author'>{author}</span>
	      </div>
	      <div className='buttons'>
	        <button id='new-quote' onClick={newQuote} >New quote</button>
	        <a href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=hola%20mi`} id='tweet-quote'></a>
	      </div>
	    </header>
		)
}
//react redux
const mapStateToProps = state => {
	return {
		state: state,
	}
}
const mapDispatchToProps = dispatch => {
	return {
		fetchNewQuote: async () => {
			let res = await axios.get('http://quotes.stormconsultancy.co.uk/random.json');
			let data = await res.data
			const {author, quote, id} = data;
			dispatch({
				type: FETCH_DATA,
				author: author,
				quote: quote,
				id: id,
			})
		},
	}
}

const Container = connect(mapStateToProps, mapDispatchToProps)(Comp);
const Header = () => {
	return (
		<Provider store={store}>
			<Container />
		</Provider>
		)
}

export default Header