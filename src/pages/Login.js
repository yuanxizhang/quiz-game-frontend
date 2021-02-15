import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import { Card } from 'react-bootstrap'
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: '',
      email: '',
      password: '',
      errors: ''
     };
  }

  handleChange = (event) => {
      const {name, value} = event.target
      this.setState({
        [name]: value
      })
  };

    handleSubmit = (event) => {
      event.preventDefault()
      const {username, password} = this.state
      let user = {
        username: username,
        password: password
      }
    
      axios.post('http://localhost:3001/login', {user}, {withCredentials: true})
      .then(response => {
        if (response.data.logged_in) {
          this.props.handleLogin(response.data)
          this.redirect()
        } else {
          this.setState({
            errors: response.data.errors
          })
        }
      })
      .catch(error => console.log('api errors:', error))
    };

    redirect = () => {
      const path = `/users/${this.state.username}`;
      this.props.history.push(path)
    }

    handleErrors = () => {
      return (
        <div>
          <ul>
            {this.state.errors.map(error => {
                return <li key={error}>{error}</li>
            })}
          </ul>
        </div>
      )
    };

  render() {
      const {username, password} = this.state
      
      return (
        <div>
          <Card className="card-login" style={{ width: '36rem' }}>
            <Card.Body>
            <Card.Title>Login</Card.Title>       
                  <form onSubmit={this.handleSubmit}>
                    <input
                      placeholder="username"
                      type="text"
                      name="username"
                      value={username}
                      onChange={this.handleChange}
                    />
                    <input
                      placeholder="password"
                      type="password"
                      name="password"
                      value={password}
                      onChange={this.handleChange}
                    />         
                    <button placeholder="submit" type="submit">
                      Log In
                    </button>          
                    <div>
                      or <Link to='/signup'>sign up</Link>
                    </div>
                    
                  </form>
          </Card.Body>
          </Card>   
        </div>
      );
    }
}
export default Login;