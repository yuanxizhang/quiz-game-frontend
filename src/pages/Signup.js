import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { signUserUp } from '../actions/userActions'
class Signup extends Component {
  
  state = { 
      username: '',
      email: '',
      password: '',
      password_confirmation: ''
  };

  handleChange = (event) => {
      const {name, value} = event.target
      this.setState({
        [name]: value
      })
  };

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.signUserUp(this.state)
  };

  render() {
    const {username, email, password, password_confirmation} = this.state

    return (
      <div className="container-sm border"> 
        <h3>Sign Up</h3>        
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
              <label>Username</label>
              <input
                placeholder="username"
                type="text"
                name="username"
                value={username}
                onChange={this.handleChange}
              />
          </div>
          <div className="form-group">
              <label>Email address</label>
              <input
                  placeholder="email"
                  type="text"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
              />
          </div>
          <div className="form-group">
              <label>Password</label>
              <input 
                placeholder="password"
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
              />
          </div> 
          <div className="form-group">
              <label>Password Confirmation</label>         
              <input
                placeholder="password confirmation"
                type="password"
                name="password_confirmation"
                value={password_confirmation}
                onChange={this.handleChange}
              />
          </div> 
        
          <button placeholder="submit" type="submit" className="btn btn-primary btn-block" >
            Sign Up
          </button>
          <p className="text-right">
              Already registered? <Link to='/login'>Log in</Link>
          </p>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      signUserUp: (userInfo) => dispatch(signUserUp(userInfo))
  }
}

export default connect(null, mapDispatchToProps)(Signup)
