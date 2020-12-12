import React from 'react';
import SolutionsContainer from '../../containers/SolutionsContainer'

const Problem = (props) => {
    const handleDeleteClick = () => {
        this.props.deleteProblem(props.problem.id)
    }

    return (
      <div>
        <li>
          {props.problem.text}
          <button onClick={handleDeleteClick}> X </button>
          <SolutionsContainer problem={props.problem}/>
        </li>
      </div>
    );
};

export default Problem;
