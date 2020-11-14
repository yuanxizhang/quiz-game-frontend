import React, {useState} from 'react';
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

  const SAMPLE_FLASHCARDS = [
    {
      "id": 1,
      "question": "Q 1 - Which of the following is a disadvantage of using JavaScript?",
      "answer": "D - All of the above.",
      "explain": "All of the above options are correct.",
      "options": [
        {
          "id": 1,
          "item": "A - Client-side JavaScript does not allow the reading or writing of files."
        },
        {
          "id": 2,
          "item": "B - JavaScript can not be used for Networking applications because there is no such support available."
        },
        {
          "id": 3,
          "item": "C - JavaScript doesn't have any multithreading or multiprocess capabilities."
        },
        {
          "id": 4,
          "item": "D - All of the above."
        }
      ]
    },
    {
      "id": 2,
      "question": "Q 2 - Which built-in method returns the character at the specified index?",
      "answer": "C - charAt()",
      "explain": "charAt() method returns the character at the specified index.",
      "options": [
        {
          "id": 5,
          "item": "A - characterAt()"
        },
        {
          "id": 6,
          "item": "B - getCharAt()"
        },
        {
          "id": 7,
          "item": "C - charAt()"
        },
        {
          "id": 8,
          "item": "D - None of the above."
        }
      ]
    },
    {
      "id": 3,
      "question": "Q 3 - Which of the following function of String object returns the index within the calling String object of the first occurrence of the specified value?",
      "answer": "D - indexOf()",
      "explain": "charAt() method returns the character at the specified index.",
      "options": [
        {
          "id": 9,
          "item": "A - substr()"
        },
        {
          "id": 10,
          "item": "B - search()"
        },
        {
          "id": 11,
          "item": "C - lastIndexOf()"
        },
        {
          "id": 12,
          "item": "D - indexOf()"
        }
      ]
    },
    {
      "id": 4,
      "question": "Q 4 - Which of the following function of Array object creates a new array with the results of calling a provided function on every element in this array?",
      "answer": "D - map()",
      "explain": "map() − Creates a new array with the results of calling a provided function on every element in this array.",
      "options": [
        {
          "id": 13,
          "item": "A - push()"
        },
        {
          "id": 14,
          "item": "B - join()"
        },
        {
          "id": 15,
          "item": "C - pop()"
        },
        {
          "id": 16,
          "item": "D - map()"
        }
      ]
    },
    {
      "id": 5,
      "question": "Q 5 - Which of the following function of Array object returns a string representing the array and its elements?",
      "answer": "D - toString()",
      "explain": "toString() − Returns a string representing the array and its elements.",
      "options": [
        {
          "id": 17,
          "item": "A - toSource()"
        },
        {
          "id": 18,
          "item": "B - sort()"
        },
        {
          "id": 19,
          "item": "C - splice()"
        },
        {
          "id": 20,
          "item": "D - toString()"
        }
      ]
    }
  ]

  // Declare a new state variable, which we'll call "flashcards"
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS);

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
	  		
        <Switch>
          <Route exact path='/' render={() => (
                <FlashcardList flashcards={flashcards} />
          )} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
        </Switch>     
	     </div>
	  </Router>)
  );
}

export default App;
