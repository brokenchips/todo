import React, { Component } from 'react';
import 'whatwg-fetch';

import Table from './Table.js';
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

  }

  componentDidMount(){
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
      debugger;
      throw new Error(error);

    });
 
}
  render() {
    debugger;
    return (
      <div className="App">
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Table
        todos = {this.state.todos} />
      </div>
    );
  }
}

export default App;
