import React, { Component } from 'react';

class Question extends Component {
  handleOnClick = () =>{
    this.props.deleteQuestion(this.props.question.id)
  }
  
  render() {

    return (
      <div id="container">
        <div id="container-container" class="hide">
          <div id="question">{this.props.questionText}
          
        
            <button onClick={this.handleOnClick}> remove </button>
          </div>
        </div>
      </div>
    );
  }

};

export default Question;
