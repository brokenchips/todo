import React, { Component } from 'react';

class todoRow extends Component {

  componentDidMount(){
  //  alert('row mounted');
  }

  render() {

    //  let pio=['ciao','ciao2'];
    //  pio.map(label => alert(label));
      
    return (
      <div className="todoTable">
        <p className="">
          {this.props.message}
        </p>
      </div>
    );
  }
}

export default todoRow;
