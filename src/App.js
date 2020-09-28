import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import TestsContainer from './containers/TestsContainer';

import './App.css';

function App() {
  return ((
    <Router>
	  	<div classNmae="App">
	  		<TestsContainer />
	      
	     </div>
	  </Router>)
  );
}

export default App;
