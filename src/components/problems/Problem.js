import React, { useState, useEffect } from "react";
import DataService from "../../services/ProblemDataService";

const Problem = (props) => {
  const initialProblemState = {
    id: null,
    text: ""
  };
  const [currentProblem, setCurrentProblem] = useState(initialProblemState);
  const [message, setMessage] = useState("");

  const fetchProblem = (id) => {
    DataService.getProblem(id)
      .then(response => {
        setCurrentProblem(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    fetchProblem(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentProblem({ ...currentProblem, [name]: value });
  };

  const updateProblem = () => {
    DataService.updateProblem(currentProblem.id, currentProblem)
      .then(response => {
        console.log(response.data);
        setMessage("The problem was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteProblem = () => {
    DataService.deleteProblem(currentProblem.id)
      .then(response => {
        console.log(response.data);
        props.history.push("/problems");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentProblem ? (
        <div className="edit-form">
          <h4>Coding Challenges and Problems</h4>
          <form>
            <div className="form-group">
              <label htmlFor="text">Question: </label>
              <input
                type="text"
                className="form-control"
                id="text"
                name="text"
                value={currentProblem.text}
                onChange={handleInputChange}
              />
            </div>
          </form>

          <button className="badge badge-danger mr-2" onClick={deleteProblem}>
            Delete
          </button>

          <button
            type="submit"
            className="badge badge-success"
            onClick={updateProblem}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Problem...</p>
        </div>
      )}
    </div>
  );
};

export default Problem;
