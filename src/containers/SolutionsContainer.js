import React, { useState } from "react";
import TestDataService from "../services/TestDataService";

const NewTest = () => {  
  const [test, setTest] = useState(initialTestState);
  const [questions, setQuestions] = useState(emptyQuestion);
  const [submitted, setSubmitted] = useState(false);


  const initialTestState = {
    id: null,
    mame: '',
    questions_attributes: [Object.assign({}, this.emptyQuestion)]
  };

  const emptyQuestion = {  
    id: null,
    question: '',
    answer: '',
    explain: '',
    options_attributes: [Object.assign({}, this.emptyOption)]
  };

  const emptyOption = { 
    id: null,
    item: ''
  };  

  const handleInputChange = event => {
    const { name, value } = event.target;
    setTest({ ...test, [name]: value });
  };

  const saveTest = () => {
    var data = {
      name: test.name,
      questions: test.questions
    };

    TestDataService.create(data)
      .then(response => {
        setTest({
          id: response.data.id,
          name: response.data.name,
          questions: response.data.questions
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newTest = () => {
    setTest(initialTestState);
    setSubmitted(false);
  };

  const renderQuestionsForm = () => {
    let counter = 0;

    function handleRemoveQuestion(id) {
        const newQuestions = questions.filter((question) => question.id !== id);    
        setQuestions(newQuestions);
    }
    return test.questions_attributes.map((question, index) => {
      
        let questionDOM = (
          <div className="question-form" key={index}>
            <div className="form-group">
              <div className="clearfix" style={{ marginBottom: 5 }}>
                <label>
                  Question {counter + 1}
                </label>
                <button
                  className="btn btn-danger"
                  style={{ padding: '5px 10px', float: 'right' }}
                  onClick={handleRemoveQuestion}>
                  X
                </button>
              </div>
              <input
                placeholder="Question"
                onChange={handleInputChange}
                type="text"
                value={question.question}
                className="form-control"
              />
              
            </div>
          </div>
        );
        counter++;
  
        return questionDOM;
      }
    );
  }
  

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newTest}>
            New Quiz
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              required
              value={test.name}
              onChange={handleInputChange}
              name="name"
            />
          </div>

          
        <hr />
        <div className="questions-fieldset">
          <h3>Questions</h3>
          {renderQuestionsForm()}
          <button
            className="btn btn-success"
            onClick={e => handleAddQuestion()}>
            + Add Question
          </button>
        </div>
        <br />

          <button onClick={saveTest} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default NewTest;