import React, { useState } from "react";
import "./question.css";

const Question = ({ question, onNextClicked }) => {
    const [answered, setAnswered] = useState(false);
    const [selectedOption, setSelectedOption] = useState({});

    const handleOptionClick = (option) => {
        setAnswered(true);
        setSelectedOption(option);
    };
    
    const isCorrect = (option) => {
        return option.item === question.answer;
    };
    
    const resetQuestion = () => {
        setAnswered(false);
        setSelectedOption({});
        onNextClicked(selectedOption);
    };

    return (
        <div className="question">
            <section>
            <div className="question-text-holder">
                {answered && <button onClick={resetQuestion}>Next</button>}
                <h4 className="question-text">{question.question}</h4>
            </div>
            {question.options.map((option, index) => {
                return (
                    <button
                        key={option.id}
                        onClick={() => handleOptionClick(option)}
                        className={`question-option 
                        // add a "correct" class to the option
                        ${answered && isCorrect(option) && "correct"}
                        
                        // add a "wrong" class to the option
                        ${selectedOption === option && !isCorrect(option) && "wrong"}`}
                    >
                        <span>
                        {answered ? (isCorrect(option) ? "✔" : "X") : (index + 1)}
                        </span>
                        {option.item}
                    </button>
                );
            })}
            </section>
        </div>
    );
};

export default Question;