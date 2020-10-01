import React from 'react';
import Question from './Question';

const QuestionList = (props) => {

    const testQuestions = props.questions.filter(question => question.testId === props.testId);
    const displayQuestions = testQuestions.map((question, index)=><li key={index}><Question question={question} deleteQuestion={props.deleteQuestion}/></li>)
    
    return (
      <ol>
        {displayQuestions}
      </ol>
    );
};

export default QuestionList;