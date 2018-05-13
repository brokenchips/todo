import React, { Component } from 'react';
import Row from './Row.js';

class todoTable extends Component {

  render() {

    var rows = [];
    this.props.todos.map(item => {
        var markup = <Row
                        key = {rows.length}
                        message = {item.message} />;
        return rows.push(markup);
    });

    return (
        <ul className="todoTable">
            {rows}
        </ul>
    );
  }
}

export default todoTable;