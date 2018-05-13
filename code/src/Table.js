import React, { Component } from 'react';
import Row from './Row.js';

class todoTable extends Component {

  componentDidMount(){

}

  render() {
    var rows = [];
    this.props.todos.map(item => {
        debugger;
        var markup = <Row
        message = {item.message} />;
        return rows.push(markup);
    });

return (
    <div className="todoTable">
        {rows}
    </div>
    );
  }
}

export default todoTable;