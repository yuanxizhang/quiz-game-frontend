import React from 'react';
import Problem from './Problem'

const Problems = (props) => {
  let problemList;
  if (props.problems) {
    problemList = props.problems.map(problem => {
      return <Problem key={problem.id} deleteProblem={props.deleteProblem} problem={problem} />
    })
  } else {
    problemList = "Loading...";
  }
  
  return (
    <div className="card-grid">
        { problemList}
    </div>
  );
  
};

export default Problems;