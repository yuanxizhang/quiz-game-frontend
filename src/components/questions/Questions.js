import React, {useState} from 'react';
import Question from './Question';
import './question.css';

const Questions = ({ questions }) => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showFinished, setShowFinished] = useState(false);

  const currentQuestion = questions[currentIndex];

  const onNextClicked = (selectedOption) => {
    if (currentQuestion.answer === selectedOption.item) {
      setScore(score + 1);
    }

    if (currentIndex + 1 > questions.length - 1) {
      setShowFinished(true);
      return;
    }
    setCurrentIndex(currentIndex + 1);
  };

  const resetQuiz = () => {
    setCurrentIndex(0);
    setShowFinished(false);
    setScore(0);
  };

  return questions.length ? (
    <div>
      {showFinished ? (
        <div className="results">
          <img
            src="https://i.imgur.com/O55Rr9H.jpeg"
            alt="Iceburg"
          />
          <h3>Score: {Math.floor((score / questions.length) * 100)}%</h3>
          <h3>You answered {score} out of {questions.length} questions correct.</h3>
        </div>
      ) : (
        <Question
          onNextClicked={onNextClicked}
          question={currentQuestion}
          key={currentQuestion.id}
        />
      )}
      {showFinished ? (
        <button className="try-again" onClick={resetQuiz}>
          Try again
        </button>
      ) : (
        <div className="questions-progress">
          {currentIndex + 1}/{questions.length}
        </div>
      )}
    </div>
  ) : (
    <h4>loading...</h4>
  );
};

export default Questions;