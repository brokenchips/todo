import React, { Component } from 'react';
import 'whatwg-fetch';

import Table from './Table.js';
import Form from './Form.js';
import './App.css';

class App extends Component {

  constructor(props)
  {
      super(props);

      this.state =
      {
          ready: false,
          todos : []
      }

      this.fetchData = this.fetchData.bind(this);
      this.createMessage = this.createMessage.bind(this);
  }

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
      var data = JSON.parse(results).data;
      this.setState({
        ready: true,
        todos : data
      });
    }).catch(error => {
      throw new Error(error);
    });
 
  }
  
  createMessage = function(message){

      var requestBody = "message=" + message;
      var _this = this;
      fetch('http://localhost:3333/save', {
       method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body:requestBody
  }).then(results => {
    debugger;
    _this.fetchData();
  }).catch(error => {
    throw new Error(error);
  })
  }

  componentDidMount(){
    this.fetchData();
  }
  render() {
    debugger;
    return (
      <div className="App">
        <Table
        todos = {this.state.todos} />
        <Form
        setMessage = {this.createMessage} />
      </div>
    );
  }
}

export default App;
