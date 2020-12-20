import React, { useState, useEffect, useRef } from "react";
import { Form, Button, Row, Col, Spinner } from 'react-bootstrap';
import DataService from "../services/ProblemDataService";
import Solution from '../components/solutions/Solution';
import AddSolution from '../components/solutions/AddSolution';
import AddProblem from '../components/problems/AddProblem';
import 'bootstrap/dist/css/bootstrap.min.css'

const ProblemsContainer = () => {
  const [problems, setProblems] = useState([]);
  const [currentProblem, setCurrentProblem] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchTerm, setSearchTerm] = useState('');
  const [showLoading, setShowLoading] = useState(true);
  const isMountedRef = useRef(null);

  useEffect(() => {
    isMountedRef.current = true;
    fetchProblems();
    return () => isMountedRef.current = false;
  }, []);

  const fetchProblems = () => {   
    setShowLoading(true);

    DataService.getProblems()
      .then(response => {
        if(isMountedRef.current){
            setProblems(response.data);
            setShowLoading(false);
        }  
      })
      .catch(e => {
        console.log('Error', e.message);
        setShowLoading(false);
      });
  };

  const setActiveProblem = (problem, index) => {
    setCurrentProblem(problem);
    setCurrentIndex(index);
  };

  const fetchSearchedProblems = () => {   
    setShowLoading(true);

    DataService.getSearchedProblems(searchTerm)
      .then(response => {
        setProblems(response.data.filter(problem => problem.text.toLowerCase().includes(searchTerm)));
        setShowLoading(false);
        console.log(response.data.filter(problem => problem.text.toLowerCase().includes(searchTerm)));
      })
      .catch(e => {
        console.log('Error', e.message);
        setShowLoading(false);
      });
  };

  const handleSearch = (event) => {
    event.preventDefault();
    fetchSearchedProblems();
    setSearchTerm('');
  }

  const handleChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const handleAddProblem = (problem) => {
    setProblems([...problems, problem])
  }

  return (
    <div>
      <Row>
      <div className="search-section">
          <Form className="search-form" onSubmit={handleSearch}>
            <Row>
              <Col>
                <Form.Group>
                  <input type="text" name ="text" value={searchTerm} placeholder="Enter a key word to find a problem" onChange={handleChange} />
                </Form.Group> 
              </Col>
              <Col>
                <Button type="submit" className="btn-search" size="sm">Search Problems</Button>
              </Col>
            </Row>    
          </Form>
      </div> 
      </Row>
      <Row>
        <div className="form-group new-problem-form form-submit">
            <AddProblem addProblem={handleAddProblem} />
        </div>
      </Row>
      
      <Row>
        <div className="list row">
          <div className="col-md-6 list-view">
            
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
        
          
        <div className="col-md-6 detail-view">
          
              {currentProblem ? (
                <div>
                  <h4>Problem Detail</h4>
                  <div className="problem-text">
                    <label>
                      <strong>Question:</strong>
                    </label>{" "}
                    {currentProblem.text}
                  </div>
                  
                  <div>
                    <label>
                      { <h5>{currentProblem.solutions && currentProblem.solutions.length} Solutions</h5>}
                    </label>{" "}
                    {currentProblem.solutions && currentProblem.solutions.map( solution => <Solution key={solution.id} solution={solution} />)}
                  </div>
                  <div className="new-solution-form">
                    <AddSolution problemId={currentProblem.id} />
                  </div>
                </div>
              ) : (
                <div>
                  <br /><br />
                  {!showLoading && <p>Please click on a problem to see detail...</p>}
                </div>
              )}
           </div>
          </div>     
      </Row>
      <Row className="loading-problem">
          {showLoading && <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
          </Spinner> }
      </Row>
    </div>   
  );
};

export default ProblemsContainer;