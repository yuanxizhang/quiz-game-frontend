import React, { Component } from 'react';
import Question from './Question';

 
class QuizGame extends Component {
    state = {
        questionBank: [],
        responses: 0,
        score: 0,
        loading: false
    }

    getQuestions = () => {
        fetch(`../../../public/bookQuiz.json`)
        .then(response=> response.json())
        .then((data) => {
            console.log(data.results)
            this.setState({ 
                questionBank: data.results, 
                loading: false 
            })
        })
        .catch(error => console.log(error))
    }

    componentDidMount() {
        this.getQuestions()
    }

    render() { 
        return (
            <div className="container">
                <div className="title">Quiz Game</div>
                
                {this.state.questionBank.length > 0 &&
                    this.state.questionBank.map(({category, type, difficulty, question, correct_answer, incorrect_answers}) =>
                    <h4>{question}</h4>)}
            </div>
        );
    }
}
 
export default QuizGame;