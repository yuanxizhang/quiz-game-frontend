import React, { Component } from 'react'
import QuestionInput from '../components/questions/QuestionInput'
import Questions from '../components/questions/Questions'
import {connect} from 'react-redux'
class QuestionsContainer extends Component {
  render() {
    return (
      <div>
        <QuestionInput
          addQuestion={this.props.addQuestion}
          testId={this.props.test.id}
        />
        <Questions
          questions={this.props.questions}
          testId={this.props.test.id}
          deleteQuestion={this.props.deleteQuestion}
        />
      </div>
    );
  }
}

const mapStateToProps = ({questions}) => {
  return {questions}
}

const mapDispatchToProps = dispatch => ({
  addQuestion: question => dispatch({type: 'ADD_QUESTION', question}),
  deleteQuestion: id => dispatch({type: 'DELETE_QUESTION', id})
})

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsContainer)
