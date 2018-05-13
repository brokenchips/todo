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
				if (response.ok) {
                    return response.text();
				} else {
					throw new Error('Si è verificato un problema con la richiesta');
				}
			}).then(results => {
				var responseData = JSON.parse(results);
				if (responseData.status === "OK") {
					var data = responseData.todo.data;
					this.setState({
							ready: true,
							todos : data
					});	
				}
			}).catch(error => {
				this.setState({
					ready: false,
					todos : 'no-content'
			});	
				// throw new Error(error);
		});
 
	}
	
	/**
  * @desc Create Message: saves a new todo.
  * @return promise.
  */
 createMessage = function(message){
		  var _message = escape(message);
			var requestBody = "message=" + _message;
			var _this = this;
			var call = fetch('http://localhost:3333/save', {
			    method: 'POST',
			    headers: {
				     'Content-Type': 'application/x-www-form-urlencoded'
			    },
			    body:requestBody
	    		}).then(results => {
						if (results.ok) {
							_this.fetchData();
						} else {
							throw new Error('Si è verificato un problema con la richiesta');
						}
    			}).catch(error => {
						throw new Error(error);
		  });
			return call;
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
				
		} else if (this.state.todos==="no-content") {
			return (
				<div className="App">
				<div className="error">
					Al momento il web service non è disponibile.<br />
                    Verifica che il server sia correttamente avviato e prova a ricaricare la pagina.<br /><br />
                    Se il server non è avviato:<br />
					<br />
					1.<br />entra nella cartella "src"<br /><br />
					2.<br />esegui il comando: <code> node Server.js </code><br /><br />
					3.<br />ricarica questa pagina
					</div>
				</div>

			);
	
		} else {
			return (
				<div className="App">
				<div className="error">
					Loading
				</div>
				</div>

			);
			
		}
	}
}

export default App;