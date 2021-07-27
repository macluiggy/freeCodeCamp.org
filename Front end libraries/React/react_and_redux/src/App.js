import React, { useEffect } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Redux, { createStore } from 'react-redux'
//components
//import Redux1 from './components/Redux1.jsx'
import Redux2 from './components/Redux2.jsx'
import AppWrapper from './components/Presentational'
function App() {
  return (
    <>
  {/*
    <Counter />
  */}
      {/*
        < Redux1 />
        <Redux2 />
      */}
      <AppWrapper />
    </>
  );
}

export default App;
