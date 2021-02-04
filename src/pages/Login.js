import React, { Component } from 'react';
import { Form, Button, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import { loginUser } from '../actions/loginUser.js';

class Login extends Component {
  
    constructor(props) {
      super(props);
      this.state = {
        username: '',
        password: '',
      };
    }
  
    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
     };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.loginUser(this.state, this.handleSuccess);
    };

    handleSuccess = () => {
        this.setState({
            username: '',
            password: '',
        });
    };

    render() {
        const { username, password } = this.state;

    return (
      <div>
        <Form inline onSubmit={this.handleSubmit}>
          <FormControl
            type="text"
            placeholder="username"
            className="mr-sm-2"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
          <FormControl
            type="password"
            placeholder="password"
            className="mr-sm-2"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <Button variant="outline-success" type="submit">
            Login
          </Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  error: state.user.error,
});

const mapDispatchToProps = dispatch => {
    return {
        loginUser: () => { dispatch(loginUser()) }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
