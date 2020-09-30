import React, { Component } from 'react';

class Question extends Component {
  handleOnClick = () =>{
    this.props.deleteQuestion(this.props.question.id)
  }
  
  render() {

    return (
      <div>
        <li>
          {this.props.text}
        </li>
        <button onClick={this.handleOnClick}> remove </button>
      </div>
    );
  }

};

export default Question;
