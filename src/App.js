import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import TestsContainer from './containers/TestsContainer';
import history from './services/history';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import "./App.css";


import './App.css';

function App() {
  return ((
    <Router history={history}>
	  	<div classNmae="App">
	  		
	  		
        <Switch>
          <Route exact path='/' component={TestsContainer} />
          <Route path="/login" component={Login} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>     
	     </div>
	  </Router>)
  );
}

export default App;
