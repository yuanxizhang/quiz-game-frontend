import React from 'react';
import { Card, Button } from 'react-bootstrap'
import SolutionsContainer from '../../containers/SolutionsContainer'

const Problem = ({ problem }) => {
    const handleDeleteClick = () => {
        this.props.deleteProblem(problem.id)
    }

    return (
      <Card className="mb-3">
        <Card.Body>
            <div className="d-flex justify-content-between">
              <div>
                <Card.Title>
                  {problem.text} 
                </Card.Title>
                <Card.Subtitle className="text-muted mb-2">
                  Posted on: {new Date(problem.created_at).toLocaleDateString()}
                </Card.Subtitle>
              </div> 
            </div>
          </Card.Body>
          <Button onClick={handleDeleteClick}> Delete </Button>
          <SolutionsContainer problem={problem}/>
        
      </Card>
    );
};

export default Problem;
