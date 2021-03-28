import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchUser} from '../actions/userActions';

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
      this.props.fetchUser(this.state)
    };

  render() {
      const {email, password} = this.state
      
      return (
                  
          <form onSubmit={this.handleSubmit}>
              <h3>Log in</h3>
              <div className="form-group">
                    <label>Email</label>
                    <input
                      className="form-control"
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
                      className="form-control"
                      placeholder="password"
                      type="password"
                      name="password"
                      value={password}
                      onChange={this.handleChange}
                    />   
              </div>

              <button  placeholder="submit" type="submit" className="btn btn-primary btn-block">
                  Log in
              </button>          
                    <div>
                      or <Link to='/signup'>sign up</Link>
                    </div>
                    
          </form>   
      );
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
      fetchUser: (userInfo) => dispatch(fetchUser(userInfo))
  }
}

export default connect(null, mapDispatchToProps)(Login)
