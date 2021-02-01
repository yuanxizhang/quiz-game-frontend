import React, { Component } from 'react';
import { Form, Button, Row, Col, FormControl, Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addUser } from '../../actions/addUser.js';

class Signup extends Component {
  
    state = {
      username: '',
      password: '',
      passwordConfirmation: '',
    };
  
    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
        [name]: value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { username, password, passwordConfirmation } = this.state;
        const user = {
        username,
        password,
        passwordConfirmation,
        };
        this.props.addUser(user, this.handleSuccess);
    };

    handleSuccess = () => {
        this.setState({
        username: '',
        password: '',
        passwordConfirmation: '',
        });
        this.props.history.push('/');
    };
render() {
    const { username, password, passwordConfirmation } = this.state;
    
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="5">
            <h2>Sign Up</h2>
            <Form onSubmit={this.handleSubmit}>
              <FormControl
                placeholder="username"
                type="text"
                name="username"
                value={username}
                onChange={this.handleChange}
              />
              <br />
              <FormControl
                placeholder="password"
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
              />
              <br />
              <FormControl
                placeholder="password confirmation"
                type="password"
                name="passwordConfirmation"
                value={passwordConfirmation}
                onChange={this.handleChange}
              />
              <br />
              <Button variant="primary" type="submit">
                Signup
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => {
    return {
        addUser: () => { dispatch(addUser()) }
    }
};
export default connect(null, mapDispatchToProps)(Signup);