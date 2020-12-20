import React, { useState } from 'react';
import DataService from "../../services/ProblemDataService";

const AddSolution = (props) => {
  const initialSolutionState = {
    id: null,
    language: '',
    text: ''
  }

  const [solution, setSolution] = useState(initialSolutionState);
  const [submitted, setSubmitted] = useState(false);  

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSolution({ ...solution, [name]: value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    let data = {
        text: solution.text,
        language: solution.language
    };
    
    let pid = props.problemId;
    DataService.createSolution(pid, data)
      .then(response => {
        setSolution({
          id: response.data.id,
          text: response.data.text,
          language: response.data.language
        });
        props.addSolution({
          id: response.data.id,
          text: response.data.text,
          language: response.data.language,
          problem_id: props.problemId
        })
        console.log("New solution added:", response.data);
        setSubmitted(true);
      })
      .catch(e => {
        console.log(e);
      });   
  };

  const newSolution = () => {
    setSolution(initialSolutionState);
    setSubmitted(false);
  };
    

  return (
    <div>
      {submitted ? (
        <div>
          <h6 className="success-alert">Solution submitted successfully!</h6>
          <button className="btn-flat" onClick={newSolution}>
            Add Solution
          </button>
        </div>
      ) : (
        <form className="form-group" onSubmit={handleSubmit}>
            <h5>Add a new solution</h5>
            <label htmlFor="language"> language:</label>
            <input className='input' type="text" name="language" placeholder='Enter a language'
                value={solution.language} onChange={handleInputChange} />
          
            <label htmlFor="text">Solution:</label>
            <textarea className='input' name="text" placeholder='Enter your solution'
                value={solution.text} onChange={handleInputChange}></textarea>
            <button className="btn-flat">
                Add Solution
            </button>
        </form>
      )}
      </div>
    );
};

export default AddSolution;
