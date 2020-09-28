import React, { Component } from 'react';
import Questions from './Questions';

class QuestionInput extends Component {
  state = {
    text: ''
  }

  handleOnChange = event => {
    this.setState({
      text: event.target.value,
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addQuestion({text: this.state.text, testId: this.props.testId });
    this.setState({
      text: '',
    });
  }
  
  render() {
    return (
      <div>
     <form onSubmit={this.handleOnSubmit} >
          <label>Add Question</label>
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleOnChange} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default QuestionInput;