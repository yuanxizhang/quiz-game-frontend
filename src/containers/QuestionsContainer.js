import React, { Component } from 'react'
import QuestionInput from '../components/questions/QuestionInput'
import Questions from '../components/questions/Questions'
import { fetchQuestions } from './actions/questionActions'
import {connect} from 'react-redux'

class QuestionsContainer extends Component {

  componentDidMount() {
    console.log(this.props)
    this.props.fetchQuestions()
  }

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
  fetchQuestions: () => dispatch(fetchQuestions())
  addQuestion: question => dispatch({type: 'ADD_QUESTION', question}),
  deleteQuestion: id => dispatch({type: 'DELETE_QUESTION', id})
})

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsContainer)
