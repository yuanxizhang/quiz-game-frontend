import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import TestsContainer from './containers/TestsContainer';
import QuestionsContainer from './containers/QuestionsContainer';
import QuizGame from './components/questions/QuizGame';
import history from './services/history';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import FlashcardList from './FlashcardList' 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App() {

  const [flashcards, setFlashcards] = useState([]);
  const [subjects, setSubjects] = useState([])

  const subjectEl = useRef()
  const baseUrl = 'http://online-quiz-api.herokuapp.com/api/v1/';

  useEffect(() => {
    axios
      .get(`${baseUrl}/tests`)
      .then(resp => {
        setSubjects(resp.data)
      })
  }, [])

  useEffect(() => {
   
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    axios
    .get(`${baseUrl}/tests`)
    .then((resp) => {
      setFlashcards(resp.data[subjectEl.current.value-1].questions
      .map((questionItem, index) => {
        return {
          id: questionItem.id,
          question: questionItem.question,
          answer: questionItem.answer,
          explain: questionItem.explain,
          options: questionItem.options
        }       
      }))
    })
  }
  
  
  return ((
    <Router history={history}>
	  	<div className="App">
        <nav className = "navbar navbar-default navbar-fixed-top navbar-expand-sm justify-content-between" role = "navigation">    
            <div className ="navbar-nav justify-content-end">   
               <ul className="nav navbar-nav">
                  <li><Link to="/">Quiz Game</Link></li>
                  <li><Link to="/login">Login</Link></li>
                  <li><Link to="/signup">Sign up</Link></li>
               </ul>
            </div>
        </nav>

        <form className="header" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="subject">Select topic:</label>
            <select id="subject" ref={subjectEl}>
              {subjects.map(subject => {
                return <option value={subject.id} key={subject.id}>{subject.name}</option>
              })}
            </select>
          </div>
          
          <div className="form-group">
            <button className="btn">Get</button>
          </div>
        </form>
	  		
        <div className="main">
          <Switch>
            <Route exact path='/' render={() => (
                  <FlashcardList flashcards={flashcards} />
            )} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
          </Switch> 
        </div>    
	     </div>
	  </Router>)
  );
}

export default App;
