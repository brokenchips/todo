import React, { Component } from 'react';
import 'whatwg-fetch';

import Table from './Table.js';
import Form from './Form.js';
import './App.css';

class App extends Component {

	constructor(props) {
			super(props);
			this.state = {
					ready: false,
					todos : []
			}
			this.fetchData = this.fetchData.bind(this);
			this.createMessage = this.createMessage.bind(this);
	}

	componentDidMount(){

			this.fetchData();

	}
	
	/**
  * @desc Fetch data: retrieves existing data from web service.
  */
	fetchData = function(){

		fetch('http://localhost:3333/data/', {
				method: "GET",
				headers: {
						"Access-Control-Allow-Origin": "*",
						"Content-Type": "application/json"
				}
			}).then(response => {
				return response.text();
			}).then(results => {
				debugger;
				var responseData = JSON.parse(results);
				if (responseData.status === "OK") {
					var data = responseData.todo.data;
					this.setState({
							ready: true,
							todos : data
					});	
				}
			}).catch(error => {
				debugger;
				this.setState({
					ready: false,
					todos : undefined
			});	
				// throw new Error(error);
		});
 
	}
	
	/**
  * @desc Create Message: saves a new todo.
  */
 createMessage = function(message){
			
		var _message = escape(message);
			var requestBody = "message=" + _message;
			var _this = this;
			fetch('http://localhost:3333/save', {
			 method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body:requestBody
	}).then(results => {
		_this.fetchData();
	}).catch(error => {
		throw new Error(error);
	})
	}

	render() {
		if (this.state.ready){
			return (
				<div className="App">
					<Form
					setMessage = {this.createMessage} />
					<Table
					todos = {this.state.todos} />
				</div>
			);
				
		} else {
			return (
				<div className="App">
				<div className="error">
					Collegamento non disponibile, riprovare più tardi 
					</div>
				</div>

			);
	
		}
	}
}

export default App;