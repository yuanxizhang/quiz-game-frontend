import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const ProblemSearch = (props) => {
  const [state, setState] = useState({
    description: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;   
    setState({ ...state, [name]: value });
    
  };

  const handleSearch = (event) => {
    event.preventDefault();
    props.onSearch(state);
  };

  return (
    <div className="search-section">
      <Form className="search-form" onSubmit={handleSearch}>
        <Row>
          <Col>
            <Form.Group controlId="description">
              <Form.Control
                type="text"
                name="description"
                value={state.description || ''}
                placeholder="Enter search term"
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>         
          <Col>
            <Button variant="primary" type="submit" className="btn-search">
              Search
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default ProblemSearch;
