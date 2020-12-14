import React, { useState, useEffect } from "react";
import { Container, Row } from 'react-bootstrap';
import DataService from "../services/DataService";
import Solution from '../components/solutions/Solution';
import AddProblem from '../components/problems/AddProblem';
import AddSolution from '../components/solutions/AddSolution';
import 'bootstrap/dist/css/bootstrap.min.css'

const ProblemsContainer = () => {
  const [problems, setProblems] = useState([]);
  const [currentProblem, setCurrentProblem] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);

  useEffect(() => {
    fetchProblems();
  }, []);

  const fetchProblems = () => {
    DataService.getProblems()
      .then(response => {
        setProblems(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const setActiveProblem = (problem, index) => {
    setCurrentProblem(problem);
    setCurrentIndex(index);
  };

  return (
    <Container>     
     <Row className="search-section">
        <AddProblem/>
    </Row>
    <div className="list">
    <div className="list row">
      <div className="col-md-6">
        <h4>Coding Problem List</h4>
        <ul className="list-group">
          {problems &&
            problems.map((problem, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActiveProblem(problem, index)}
                key={index}
              >
                {problem.text}
              </li>
            ))}
        </ul>
      </div>
      <div className="col-md-6">
        
        {currentProblem ? (
          <div>
            <h4>Problem Detail</h4>
            <div>
              <label>
                <strong>Question:</strong>
              </label>{" "}
              {currentProblem.text}
            </div>
            <AddSolution problemId={currentProblem.id}/>
            <div>
              <label>
                <strong>Solutions:</strong>
              </label>{" "}
              {currentProblem.solutions && currentProblem.solutions.map( solution => <Solution key={solution.id} solution={solution} />)}
            </div>
      
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a problem to see detail...</p>
          </div>
        )}
      </div>
    </div>
    </div>
    </Container> 
  );
};

export default ProblemsContainer;