import React, { Component } from 'react';

class Question extends Component {
  handleOnClick = () =>{
    this.props.deleteQuestion(this.props.question.id)
  }
  
  render() {
    const { question } = this.props

    return (
      <div>
        <li>
          {question.text}
        </li>
        <button onClick={this.handleOnClick}> X </button>
      </div>
    );
  }

};

export default Question;
