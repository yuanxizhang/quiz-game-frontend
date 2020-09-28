import React, { Component } from 'react';
import Question from './Question';

class Questions extends Component {
  render() {
    const { questions } = this.props;
    const testQuestions = questions.filter(question => question.testId === this.props.testId);
    const displayQuestions = testQuestions.map((question, index)=><li key={index}><Question question={question} deleteQuestion={this.props.deleteQuestion}/></li>)
    
    return (
      <ul>
        {displayQuestions}
      </ul>
    );
  }
};

export default Questions;