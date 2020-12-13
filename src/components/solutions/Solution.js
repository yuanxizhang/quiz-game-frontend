import React from 'react';

const Solution = (props) => {
    const handleOnClick = () =>{
        props.deleteSolution(props.solution.id)
    }

    return (
      <div>
        
        {props.solution.text}
        
        <button onClick={handleOnClick}> X </button>
      </div>
    );
};

export default Solution;
