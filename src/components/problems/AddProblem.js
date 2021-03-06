import React, { useState } from "react";
import DataService from "../../services/ProblemDataService";

const AddProblem = (props) => {
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

  const saveProblem = () => {
    let data = {
      text: problem.text
    };

    DataService.createProblem(data)
      .then(response => {
        setProblem({
          id: response.data.id,
          text: response.data.text
        });
        props.addProblem({
          id: response.data.id,
          text: response.data.text
        })
        setSubmitted(true);
        console.log("New problem added:", response.data);
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
          <h6 className="success-alert">Your problem was submitted successfully!</h6>
          <button className="btn-flat" onClick={newProblem}>
            Add Problem
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group new-probem-form">
            <label htmlFor="text">New problem: </label>
            <input
              type="text"
              className="form-control"
              id="text"
              required
              value={problem.text}
              onChange={handleInputChange}
              name="text"
            />
          </div>

          <button onClick={saveProblem} className="btn-flat">
            Add Problem
          </button>
        </div>
      )}
    </div>
  );
};

export default AddProblem;