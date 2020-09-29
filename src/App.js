import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import TestsContainer from './containers/TestsContainer';
import history from './services/history';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import "./App.css";

function App() {
  return ((
    <Router history={history}>
	  	<div classNmae="App">
	  		<nav className="navbar navbar-light">
               <ul className="nav navbar-nav">
                  <li><Link to="/">Quiz Game</Link></li>
                  <li><Link to="/login">Login</Link></li>
                  <li><Link to="/signup">Sign up</Link></li>
               </ul>
        </nav>
	  		
        <Switch>
          <Route exact path='/' component={TestsContainer} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
        </Switch>     
	     </div>
	  </Router>)
  );
}

export default App;
