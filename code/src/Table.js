import React, { Component } from 'react';
import Row from './Row.js';

class todoTable extends Component {

  componentDidMount(){

}

  render() {
    var rows = [];
    //  looppare le righe
    //  let pio=['ciao','ciao2'];
    //  pio.map(label => alert(label));
    this.props.todos.map(item => {
        debugger;
        var markup = <div>{item.message}</div>;
        rows.push(markup);
    });

return (
    <div className="todoTable">
        {rows}
        <Row />
    </div>
    );
  }
}

export default todoTable;