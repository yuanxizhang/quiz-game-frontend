import React, { Component } from 'react';

class QuestionInput extends Component {
  state = {
    question: '',
    answer: '',
    options: []
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addQuestion({question: this.state.question, answer: this.state.answer, testId: this.props.testId });
    this.setState({
      question: '',
      answer: '',
      options: []
    });
  }
  
  render() {
    return (
      <div>
     <form onSubmit={this.handleOnSubmit} >
          <label>Add Question</label>
          <input
            type="text"
            id="name"
            name="question" 
            value={this.state.question}
            onChange={(event) => this.handleOnChange(event)}/>
          <input
            type="text"
            name="answer" 
            id="name"
            value={this.state.answer}
            onChange={(event) => this.handleOnChange(event)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default QuestionInput;