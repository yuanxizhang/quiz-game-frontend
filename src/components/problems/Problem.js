import React from 'react';
import { Card, Button } from 'react-bootstrap'
import SolutionsContainer from '../../containers/SolutionsContainer'

const Problem = (props) => {
    const handleDeleteClick = () => {
        this.props.deleteProblem(props.problem.id)
    }

    return (
      <Card className="mb-3">
        <Card.Body>
            <div className="d-flex justify-content-between">
              <div>
                <Card.Title>
                  {props.problem.text} 
                </Card.Title>
                <Card.Subtitle className="text-muted mb-2">
                  Posted on: {new Date(problem.created_at).toLocaleDateString()}
                </Card.Subtitle>
              </div> 
            </div>
          </Card.Body>
          <Button onClick={handleDeleteClick}> X </Button>
          <SolutionsContainer problem={props.problem}/>
        
      </Card>
    );
};

export default Problem;
