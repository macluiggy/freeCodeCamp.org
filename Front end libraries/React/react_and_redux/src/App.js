import React, { useEffect } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { createStore } from 'redux'


const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {

  switch (action.type) {
    case 'LOGIN': 
      return {
        authenticated: true
      }
    case 'LOGOUT': 
      return {
        authenticated: false
      }

    default:
      return state;

  }

};

const store = createStore(authReducer);

const loginUser = () => {
  return {
    type: 'LOGIN'
  }
};

const logoutUser = () => {
  return {
    type: 'LOGOUT'
  }
};
store.dispatch(logoutUser())
console.log(store.getState())
console.log(store.getState().authenticated)
function App() {

  useEffect(() => {
    console.log(store.getState().authenticated)
  }, [store.getState().authenticated])
  return (
    <div className="App">
      <button onClick={() => store.dispatch(loginUser())} >LOGIN</button>
      <button onClick={() => store.dispatch(logoutUser())} >LOGOUT</button>
    </div>
  );
}

export default App;
