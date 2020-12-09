import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios'
import Question from './components/flashcards//Question';
import './container.css';

const TestsContainer = () => {
  const [questions, setQuestions] = useState([]);
  const [tests, setTests] = useState([]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showFinished, setShowFinished] = useState(false);

  const currentQuestion = questions[currentIndex];

  const onNextClicked = (selectedOption) => {
    if (currentQuestion.answer === selectedOption) {
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
            alt="Greenland"
          />
          <h3>
            Your results are out. You scored {score} out of {questions.length}
          </h3>
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
    <p>Loading</p>
  );
};

export default TestsContainer;