import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import FlashcardsContainer from './containers/FlashcardsContainer';
import QuizGamesContainer from './containers/QuizGamesContainer';
import ProblemsContainer from './containers/ProblemsContainer';
import JobsContainer from './containers/JobsContainer';
import history from './services/history';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { fetchLoginStatus } from './actions/fetchLoginStatus';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

class App extends React.Component {
  componentDidMount() {
    this.props.fetchLoginStatus();
  }

  render() {
    return ((
      <Router history={history}>
        <div className="App">
          <nav className = "navbar navbar-default navbar-fixed-top navbar-expand-sm justify-content-between" role = "navigation">    
              <div className ="navbar-nav justify-content-end">  
                <ul className="nav navbar-nav">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/flashcards">Flashcards</Link></li>
                    <li><Link to="/games">Quiz Games</Link></li>            
                    <li><Link to="/jobs">Developer Jobs</Link></li>
                    <li><Link to="/problems">Forum</Link></li>
                </ul>
                <ul class="nav navbar-nav ml-auto">
                  <li><Link to="/login">Login</Link></li>
                  <li><Link to="/login">Signup</Link></li>
                </ul>
              </div>
          </nav>     
          
          <div className="container">
            <Switch>
              <Route exact path='/' component={Home} />  
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" render={(props) => <Signup {...props} />} />        
              <Route path="/flashcards" component={FlashcardsContainer} />
              <Route path="/games" component={QuizGamesContainer} />         
              <Route path="/jobs" component={JobsContainer} />
              <Route path="/problems" component={ProblemsContainer} />
            </Switch> 
          </div>    
        </div>
      </Router>)
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => {
    return {
        fetchLoginStatus: () => { dispatch(fetchLoginStatus()) }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
