import React, { useState, useEffect } from "react";
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import DataService from "../services/DataService";
import Solution from '../components/solutions/Solution';
import AddSolution from '../components/solutions/AddSolution';
import AddProblem from '../components/problems/AddProblem';
import 'bootstrap/dist/css/bootstrap.min.css'

const ProblemsContainer = () => {
  const [problems, setProblems] = useState([]);
  const [currentProblem, setCurrentProblem] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchTerm, setSearchTerm] = useState('');


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

  const fetchSearchedProblems = () => {   
    DataService.getSearchedProblems(searchTerm)
      .then(response => {
        setProblems(response.data.filter(problem => problem.text.toLowerCase().includes(searchTerm)));
        console.log(response.data.filter(problem => problem.text.toLowerCase().includes(searchTerm)));
      })
      .catch(e => {
        console.log(e);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchSearchedProblems();
    setSearchTerm('');
  }

  const handleChange = (event) => {
    setSearchTerm(event.target.value)
  }

  return (
    <div>
      <Row>
      <div className="search-section">
          <Form className="search-form" onSubmit={handleSubmit}>
            <Row>
              <Col>
                <Form.Group>
                  <input type="text" name ="text" value={searchTerm} placeholder="Enter key word" onChange={handleChange} />
                </Form.Group> 
              </Col>
              <Col>
                <Button type="submit" className="btn-search" size="sm">Find Problems</Button>
              </Col>
            </Row>    
          </Form>
      </div> 
      </Row>
      <Row>
        <div className="form-group new-problem-form">
            <AddProblem/>
        </div>
      </Row>
      
      <Row>
        <div className="list row">
          <div className="col-md-6">
            
             <h4>Coding Problems</h4>
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
                  <div>
                    <AddSolution problemId = {currentProblem.id}/>
                  </div>
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
        
       
      </Row>
    </div>   
  );
};

export default ProblemsContainer;