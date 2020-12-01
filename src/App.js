import React from 'react';
import { Router, Switch, Route, Link} from 'react-router-dom';
import FlashcardsContainer from './containers/FlashcardsContainer';
import JobsContainer from './containers/JobsContainer';
import history from './services/history';
import Login from './pages/Login';
import SignUp from './pages/SignUp'; 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

const App = () => {

  return ((
    <Router history={history}>
	  	<div className="App">
        <nav className = "navbar navbar-default navbar-fixed-top navbar-expand-sm justify-content-between" role = "navigation">    
            <div className ="navbar-nav justify-content-end">   
               <ul className="nav navbar-nav">
                  <li><Link to="/">Quiz Game</Link></li>
                  <li><Link to="/jobs">Find Jobs</Link></li>
                  <li><Link to="/signup">Sign up</Link></li>
               </ul>
            </div>
        </nav>     
	  		
        <div className="main">
          <Switch>
            <Route exact path='/' component={FlashcardsContainer} />
            <Route path="/jobs" component={JobsContainer} />
            <Route path="/signup" component={SignUp} />
          </Switch> 
        </div>    
	     </div>
	  </Router>)
  );
}

export default App;
