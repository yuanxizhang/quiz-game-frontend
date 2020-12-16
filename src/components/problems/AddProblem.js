import React, { useState } from "react";
import DataService from "../../services/DataService";

const AddProblem = () => {
  const initialProblemState = {
    id: null,
    text: ""
  };
  const [problem, setProblem] = useState(initialProblemState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setProblem({ ...problem, [name]: value });
  };

  const handleSubmit = () => {
    let data = {
      text: problem.text
    };

    DataService.createProblem(data)
      .then(response => {
        setProblem({
          id: response.data.id,
          text: response.data.text
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newProblem = () => {
    setProblem(initialProblemState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-flat" onClick={newProblem}>
            Add Problem
          </button>
        </div>
      ) : (
        <div>
          <form className="submit-form">
        
            <label htmlFor="text">New coding problem: </label>
            <input
              type="text"
              className="form-control"
              id="text"
              required
              value={problem.text}
              onChange={handleInputChange}
              name="text"
            />
               
            <button onClick={handleSubmit} className="btn-flat">
              Add
            </button>
          </form>

          
        </div>
      )}
    </div>
  );
};

export default AddProblem;