import React from 'react';
import Problem from './Problem'

const Problems = ({ problems, deleteProblem }) => {
  let problemList;
  if (problems) {
    problemList = problems.map(problem => {
      return <Problem key={problem.id} deleteProblem={deleteProblem} problem={problem} />
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