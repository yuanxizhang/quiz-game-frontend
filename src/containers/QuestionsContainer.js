import React, { Component } from 'react'
import QuestionInput from '../components/questions/QuestionInput'
import QuestionList from '../components/questions/QuestionList'
import FlashcardList from '../FlashcardList' 
import getQuestions from '../actions/getQuestions'
import {connect} from 'react-redux'

class QuestionsContainer extends Component {

  state = {
    flashcards: [],
    loading: false
  }

  fetchQuestions = () =>{
    fetch(``)
    .then(response=> response.json())
    .then((data) => {
        this.setState({ 
          questionBank: data.results, 
          loading: false 
         })
    })
    .catch(error => console.log(error))
  }

  componentDidMount() {
    console.log(this.props)
    this.setState({ loading: true });
    this.fetchQuestions();
  }

  render() {

    return (
      
      <div class="container">
        <div id="home" class="flex-center flex-column">
        

         
          <QuestionInput
            addQuestion={this.props.addQuestion}
            testId={this.props.test.id}
          /> 
          <FlashcardList
            flashcards={this.state.flashcards}
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
