import React, { Component } from 'react';
import Test from './Test';
 
class TestList extends Component {
  renderTestList() {
    return(
      this.props.tests.map(test => <Test key={test.id} questions={test.questions} deleteTest={this.props.deleteTest} test={test}/>)
    )
  }

  render() { 
    return (
      <div>
        <div className='card-deck'>  
          {this.renderTestList()}
        </div>
      </div>
    );
  }
}
 
export default TestList;