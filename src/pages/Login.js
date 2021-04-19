import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
class Login extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const request = {"auth": {"email": email, "password": password}};

    Axios.post('http://localhost:3003/api/v1/login', request)
      .then(response => {
        localStorage.setItem("jwt", response.data.jwt);
        this.props.history.push("/");
      })
      .catch(error => console.log('error', error));
  }      

  render() {    
      return (
        <div className="container-sm border">         
          <form onSubmit={this.handleSubmit}>
              <h3>Log in</h3>
              <div className="form-group">
                  <label>Email</label>
                  <input
                      className="form-control"
                      placeholder="email"
                      type="text"
                      name="email"
                      id="email"
                  />
              </div>

              <div className="form-group">
                  <label>Password</label>
                  <input
                      className="form-control"
                      placeholder="password"
                      type="password"
                      name="password"
                      id="password"
                  />   
              </div>

              <button  placeholder="submit" type="submit" className="btn btn-primary btn-block">
                  Log in
              </button>          
              <div>
                  or <Link to='/signup'>sign up</Link>
              </div>                  
          </form>  
        </div>  
      );
    }
}

export default Login
