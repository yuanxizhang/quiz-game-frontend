import React, { Component } from 'react';
import QuestionsContainer from '../../containers/QuestionsContainer'

class Test extends Component {


  render() {
    const { test } = this.props;

    return (
      <div>
        <li>
          {test.text}
          <button onClick={() => this.props.deleteTest(test.id)}> X </button>
          <QuestionsContainer test={test}/>
        </li>
      </div>
    );
  }
};

export default Test;