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
import PrivateRoute from './components/PrivateRoute';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  
    return ((
      <Router history={history}>
        <div className="App">        
          <div className="container">
            <Navigation />
            <Main /> 
          </div>    
        </div>
      </Router>)
    ); 
}

const Navigation = () => (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div>
            <Link className="navbar-brand" to='/'>QuizBox</Link>
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
                        <li><Link className="nav-link" to="/logout">Log out</Link></li>
                        :
                        <li><Link className="nav-link" to="/login">Log in</Link></li>
                    }
                </ul>
            </div>
        </div>
    </nav> 
)

const Main = () => (
    <Switch>
        <Route exact path='/' component={Home} />  
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/signup" render={(props) => <Signup {...props} />} />        
        <Route path="/flashcards" component={FlashcardsContainer} />
        <Route path="/games" component={QuizGamesContainer} />         
        <Route path="/jobs" component={JobsContainer} />
        <Route path="/problems" component={ProblemsContainer} />
        <PrivateRoute path={"/profile"} component={Profile} />            
    </Switch> 
)

export default App;
