import React, { Component } from 'react'
import QuestionInput from '../components/questions/QuestionInput'
import Questions from '../components/questions/Questions'
import getQuestions from '../actions/getQuestions'
import {connect} from 'react-redux'

class QuestionsContainer extends Component {

  componentDidMount() {
    console.log(this.props)
    this.props.fetchQuestions()
  }

  render() {
    return (
      <div class="container">
        <div id="home" class="flex-center flex-column">
          <h2>Start a quiz game!</h2>
         
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
      </div>
    );
  }
}

const mapStateToProps = ({questions}) => {
  return {questions}
}

const mapDispatchToProps = dispatch => ({
  getQuestions: () => dispatch(getQuestions()),
  addQuestion: question => dispatch({type: 'ADD_QUESTION', question}),
  deleteQuestion: id => dispatch({type: 'DELETE_QUESTION', id})
})

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsContainer)
