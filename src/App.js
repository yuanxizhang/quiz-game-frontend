import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import TestsContainer from './containers/TestsContainer';
import history from './services/history';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import "./App.css";

function App() {
  return ((
    <Router history={history}>
	  	<div classNmae="App">
      <nav class = "navbar navbar-default navbar-fixed-top navbar-expand-sm justify-content-between" role = "navigation">    
            <div class="navbar-nav justify-content-end">   
               <ul className="nav navbar-nav">
                  <li><Link to="/">Quiz Game</Link></li>
                  <li><Link to="/login">Login</Link></li>
                  <li><Link to="/signup">Sign up</Link></li>
               </ul>
            </div>
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
