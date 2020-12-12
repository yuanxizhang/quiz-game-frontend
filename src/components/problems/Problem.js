import React, { Component } from 'react';
import SolutionsContainer from '../../containers/SolutionsContainer'

class Problem extends Component {

  render() {
    const { problem } = this.props;

    return (
      <div>
        <li>
          {problem.text}
          <button onClick={() => this.props.deleteproblem(problem.id)}> X </button>
          <SolutionsContainer problem={problem}/>
        </li>
      </div>
    );
  }
};

export default Problem;
