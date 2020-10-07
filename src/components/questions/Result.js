import React from 'react';

const Result = ({score, playAgain}) => {
    return (
        <div className="score-board">
            <div className="score">You scored {score} correct answers out of 10 questions.</div>
            <button className="playAgainButton">Play again!</button>
        </div>
    );
}
 
export default Result;