import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import './App.css';

function App() {
  return ((
    <Router>
	  	<div classNmae="App">
	      <Route path="/" component={Home} />
	      <Route exact path="/about" component={About} />
	      <Route exact path="/login" component={Login} />
	     </div>
	  </Router>)
  );
}

export default App;
