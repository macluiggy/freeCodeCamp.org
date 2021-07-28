import {createStore} from 'redux';
import { Component, useState, useEffect } from 'react';
import { connect, Provider } from 'react-redux';

// Redux:
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message: message
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};

const store = createStore(messageReducer);

// React:
function Presentational({submitNewMessage, messages}) {
  const [input, setInput] = useState('')
  const handleChange = (event) => {
    /*this.setState({
      input: event.target.value
    });*/
    setInput(event.target.value);
  }
  const submitMessage = () => {
    /*this.setState((state) => {
      const currentMessage = state.input;
      return {
        input: '',
        messages: state.messages.concat(currentMessage)
      };
    });*/
    //props.submitNewMessage(input);
    submitNewMessage({
      type: ADD,
      message: input,
    });
  }
  return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={input}
          onChange={handleChange}/><br/>
        <button onClick={submitMessage}>Submit</button>
        <ul>
          {messages.map( (message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }
        </ul>
      </div>
    );
};

// React-Redux:
const mapStateToProps = (state) => {
  return { messages: state }
};

/*const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (newMessage) => {
       dispatch(addMessage(newMessage))
    }
  }
};*/
const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (dispatchObject) => {
       dispatch(dispatchObject)
    }
  }
};


// Define the Container component here:
const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational)

const AppWrapper2 = () => {
  return (
      <Provider store={store} >
        <Container />
      </Provider>
    );
};

export default AppWrapper2;