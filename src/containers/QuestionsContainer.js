import React, { Component } from 'react'
import QuestionInput from '../components/questions/QuestionInput'
import QuestionList from '../components/questions/QuestionList'
import getQuestions from '../actions/getQuestions'
import {connect} from 'react-redux'

class QuestionsContainer extends Component {

  state = {
    questionBank: [],
    score: 0,
    responses: 0,
    isLoading: false
  }

  fetchQuestions = () =>{
    fetch(`https://opentdb.com/api.php?amount=10&category=10&difficulty=medium&type=multiple`)
    .then(response=> response.json())
    .then((data) => {
        this.setState({ 
          questionBank: data.results, 
          loading: false 
         })
    })
    .catch(error => console.log(error))
  }

  checkAnswer = (answer, correct_answer) => {
    if (answer === correct_answer) {
      this.setState({
        score: this.state.score + 1
      })
    }
    this.setState({
      responses: this.state.responses < this.state.questionBank.length ? this.state.responses + 1 : this.state.questionBank.length
    })
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
          <QuestionList
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
