import React from 'react';
import { Router, Switch, Route, Link } from 'react-router-dom';
import FlashcardsContainer from './containers/FlashcardsContainer';
import JobsContainer from './containers/JobsContainer';
import history from './services/history';
import Home from './pages/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

const App = () => {

  return ((
    <Router history={history}>
	  	<div className="App">
        <nav className = "navbar navbar-default navbar-fixed-top navbar-expand-sm justify-content-between" role = "navigation">    
            <div className ="navbar-nav justify-content-end">  
               <ul className="nav navbar-nav">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/flashcards">Flashcards</Link></li>
                  <li><Link to="/jobs">Developer Jobs</Link></li>
               </ul>
            </div>
        </nav>     
	  		
        <div className="container">
          <Switch>
            <Route exact path='/' component={Home} />          
            <Route path="/flashcards" component={FlashcardsContainer} />
            <Route path="/jobs" component={JobsContainer} />
          </Switch> 
        </div>    
	     </div>
	  </Router>)
  );
}

export default App;
