import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import TestsContainer from './containers/TestsContainer';

import './App.css';

function App() {
  return ((
    <Router>
	  	<div classNmae="App">
	  		<Navbar/>
	  		<h2>Start a quiz game!</h2>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={about}/>
          <Route path="/contact" component={Contact}/>
        </Switch>     
	     </div>
	  </Router>)
  );
}

export default App;
