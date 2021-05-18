import React, { Component } from 'react';
import './Task.css';

class Task extends Component {
	render() {
		console.log(this.props)
		const {id, title, description, done} = this.props.task;
		let border = {border: 'solid'}
		return <div className="yellow" style={border}>
        <p className="title">{title}</p> - 
        <p>{description}</p> - 
        <p>{done}</p> - 
        <p>{id}</p>
        <input type="checkbox"/>
        <button>x</button>
		</div>
	}
}

export default Task;