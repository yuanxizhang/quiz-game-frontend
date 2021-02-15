import React from 'react';
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import FlashcardsContainer from './containers/FlashcardsContainer';
import QuizGamesContainer from './containers/QuizGamesContainer';
import ProblemsContainer from './containers/ProblemsContainer';
import JobsContainer from './containers/JobsContainer';
import history from './services/history';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Profile from './pages/userProfile';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLoggedIn: false,
      user: {}
     };
  }

  componentDidMount() {
    this.loginStatus()
  }

  loginStatus = () => {
      axios.get('http://localhost:3001/logged_in', 
          {withCredentials: true})    
      .then(response => {
            if (response.data.logged_in) {
              this.handleLogin(response)
            } else {
              this.handleLogout()
            }
          })
      .catch(error => console.log('api errors:', error))
  }

  handleLogin = (data) => {
      this.setState({
        isLoggedIn: true,
        user: data.user
      })
  }

  handleLogout = () => {
      this.setState({
      isLoggedIn: false,
      user: {}
      })
  }

  render() {
    return ((
      <Router history={history}>
        <div className="App">
          <nav className = "navbar navbar-default navbar-fixed-top navbar-expand-sm justify-content-between" role = "navigation">    
              <div className ="navbar-nav justify-content-between">  
                <ul className="nav navbar-nav mr-auto">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/flashcards">Flashcards</Link></li>
                    <li><Link to="/games">Quiz Games</Link></li>            
                    <li><Link to="/jobs">Developer Jobs</Link></li>
                    <li><Link to="/problems">Forum</Link></li>
                </ul>
                <ul className="nav navbar-nav">
                    <li><Link to='/login'>Log In</Link></li>
                    <li><Link to='/signup'>Sign Up</Link></li>
                </ul>
              </div>
          </nav>     
          
          <div className="container">
            <Switch>
              <Route exact path='/' component={Home} />  
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" render={(props) => <Signup {...props} />} />        
              <Route path="/flashcards" component={FlashcardsContainer} />
              <Route path="/games" component={QuizGamesContainer} />         
              <Route path="/jobs" component={JobsContainer} />
              <Route path="/problems" component={ProblemsContainer} />
              <Route path={"/users/:userId"} component={Profile} />            
            </Switch> 
          </div>    
        </div>
      </Router>)
    );
  }
}

export default App;