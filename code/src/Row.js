import React, { Component } from 'react';

class todoRow extends Component {
  render() {      
    return (
      <li className="todoRow">
        <div className="todo">
          {this.props.message}
        </div>
      </li>
    );
  }
}

export default todoRow;
