import React from 'react';

const Solution = (props) => {
    const handleOnClick = () =>{
        props.deleteSolution(props.solution.id)
    }

    return (
      <div>
        <p>Language: {props.solution.language}</p>
        <p>Solution: {props.solution.text}</p>
        
        <button onClick={handleOnClick}> X </button>
      </div>
    );
};

export default Solution;
