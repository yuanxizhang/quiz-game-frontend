import React, { Component } from 'react';
class Solution extends Component {
  handleOnClick = () =>{
    this.props.deleteSolution(this.props.solution.id)
  }
  
  render() {
    const { solution } = this.props

    return (
      <div>
        <li>
          {solution.text}
        </li>
        <button onClick={this.handleOnClick}> X </button>
      </div>
    );
  }

};

export default Solution;
