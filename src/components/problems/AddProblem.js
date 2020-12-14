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
    var data = {
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
          <button className="btn btn-success" onClick={newProblem}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="text">Question:</label>
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

          {/* <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              required
              value={problem.description}
              onChange={handleInputChange}
              name="description"
            />
          </div> */}

          <button onClick={handleSubmit} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddProblem;