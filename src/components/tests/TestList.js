import React from 'react';
import Test from './Test';
 
const TestList = (props) => {
  
    return (
      <div>
        <div className='card-deck'>  
          {props.testCards.map(test => <Test key={test.id} questions={test.questions} deleteTest={this.props.deleteTest} test={test}/>)}
        </div>
      </div>
    );

}
 
export default TestList;