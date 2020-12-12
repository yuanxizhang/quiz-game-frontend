import React, { Component } from 'react';
import Problem from './Problem'

class Problems extends Component {

  renderProblems = () => {
    return(
      this.props.problems.map(problem => <Problem key={problem.id} deleteProblem={this.props.deleteProblem} problem={problem}/>)
    )
  }

  render() {
    return(
      <ul>
        {this.renderProblems()}
      </ul>
    );
  }
};

export default Problems;