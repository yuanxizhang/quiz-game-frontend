import React, { Component } from 'react';
import Test from './Test'

class Tests extends Component {

  renderTests = () => {
    return(
      this.props.tests.map(test => <Test key={test.id} deleteTest={this.props.deleteTest} test={test}/>)
    )
  }

  render() {
    return(
      <ul>
        {this.renderTests()}
      </ul>
    );
  }
};

