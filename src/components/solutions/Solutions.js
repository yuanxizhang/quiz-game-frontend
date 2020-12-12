import React, { Component } from 'react';
import Solution from './Solution';

class Solutions extends Component {
  render() {
    const { solutions } = this.props;
    const problemSolutions = solutions.filter(solution => solution.problemId === this.props.problemId);
    const solutionList = problemSolutions.map((solution, index)=><li key={index}><Solution solution={solution} deleteSolution={this.props.deleteSolution}/></li>)
    
    return (
      <ul>
        {solutionList}
      </ul>
    );
  }
};

export default Solutions;