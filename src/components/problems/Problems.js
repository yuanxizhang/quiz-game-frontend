import React from 'react';
import Problem from './Problem'

const Problems = (props) => {
  return (
    <div className="card-grid">
        {props.problems.map(problem => {
            return <Problem key={problem.id} deleteProblem={props.deleteProblem} problem={problem} />
        })}
    </div>
  );
  
};

export default Problems;