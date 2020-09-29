import React, { Component } from 'react';
import QuestionsContainer from '../../containers/QuestionsContainer'

class Test extends Component {


  render() {
    const { test } = this.props;

    return (
      <div className='card text-center'>
        <div className="overflow">
          <img src='image1' alt='image' />
        </div>
        <div className='card-body text-dark'>
          <li>
            <h4 className='card-title'>{test.text}</h4>
          
            
            <button onClick={() => this.props.deleteTest(test.id)}>remove</button>
            <QuestionsContainer test={test}/>
          </li>
        </div>
      </div>
    );
  }
};

export default Test;