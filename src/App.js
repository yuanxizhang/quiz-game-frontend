import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import FlashcardsContainer from './containers/FlashcardsContainer';
import QuizGamesContainer from './containers/QuizGamesContainer';
import ProblemsContainer from './containers/ProblemsContainer';
import JobsContainer from './containers/JobsContainer';
import history from './services/history';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Profile from './pages/Profile';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  
    return ((
      <Router history={history}>
        <div className="App">
          <nav className = "navbar navbar-default navbar-fixed-top navbar-expand-sm justify-content-between" role = "navigation">  
              <a href="/" className="navbar-brand">QuizBox</a>  
              <div className ="navbar-nav justify-content-between">  
                <ul className="nav navbar-nav mr-auto">                 
                    <li><Link to="/flashcards">Flashcards</Link></li>
                    <li><Link to="/games">Quiz Games</Link></li>            
                    <li><Link to="/jobs">Developer Jobs</Link></li>
                    <li><Link to="/problems">Forum</Link></li>
                </ul>
                <ul className="nav navbar-nav ml-auto">
                    {
                      localStorage.getItem("jwt") ?
                        <li className="nav-item"><Link exact className="nav-link" to="/logout">Log Out</Link></li>
                        :
                        <li className="nav-item"><Link exact className="nav-link" activeClassName="active" to="/login">Log In</Link></li>
                    }
                </ul>
              </div>
          </nav>     
          
          <div className="container">
            <Switch>
              <Route exact path='/' component={Home} />  
              <Route path="/login" component={Login} />
              <Route path="/logout" component={Logout} />
              <Route path="/signup" render={(props) => <Signup {...props} />} />        
              <Route path="/flashcards" component={FlashcardsContainer} />
              <Route path="/games" component={QuizGamesContainer} />         
              <Route path="/jobs" component={JobsContainer} />
              <Route path="/problems" component={ProblemsContainer} />
              <Route path={"/users/:username"} component={Profile} />            
            </Switch> 
          </div>    
        </div>
      </Router>)
    );
}

export default App;