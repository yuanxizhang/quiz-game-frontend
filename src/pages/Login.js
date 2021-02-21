import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import { Card } from 'react-bootstrap'
class Login extends Component {
  
    state = {
      email: "",
      password: ""
    }
  
    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
          [name]: value
        })
    };

    handleSubmit = (event) => {
      event.preventDefault()
      let request = {"auth": {"email": this.state.email, "password": this.state.password}}
    
      axios.post('http://localhost:3001/login', request)
      .then(response => {
        localStorage.setItem("jwt", response.data.jwt);
        this.props.history.push("/");
      })
      .catch(error => console.log('API errors:', error))
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
      const {email, password} = this.state
      
      return (
        <div>
          <Card className="card-login" style={{ width: '36rem' }}>
            <Card.Body>
            <Card.Title>Login</Card.Title>       
                  <form onSubmit={this.handleSubmit}>
                    <input
                      placeholder="email"
                      type="text"
                      name="email"
                      value={email}
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