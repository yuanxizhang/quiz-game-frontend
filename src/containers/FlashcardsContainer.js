import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios'
import FlashcardList from '../components/flashcards/FlashcardList' 
import "./container.css";

const FlashcardsContainer = () => {
    const [flashcards, setFlashcards] = useState([]);
    const [subjects, setSubjects] = useState([]);

    const subjectEl = useRef()
    const baseURL = 'https://online-quiz-api.herokuapp.com//api/v1/';

    useEffect(() => {
        axios
        .get(`${baseURL}/tests`)
        .then(resp => {
            setSubjects(resp.data)
        })
        .catch((error) => {
            console.log('Error', error.message);
        })
            
    }, [])

    useEffect(() => {
    
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios
        .get(`${baseURL}/tests`)
        .then((resp) => {
            console.log(resp.data.filter(s => s.name === subjectEl.current.value)[0]);
            setFlashcards(resp.data.filter(s => s.name === subjectEl.current.value)[0].questions);
        })
        .catch((error) =>  {
            console.log('Error', error.message);
        })
    }

    return (
       <div>
        <div>
            <form className="header form-inline" onSubmit={handleSubmit}>
                <div className="form-group form-inline row">
                    <label htmlFor="subject" className="col-form-label col-md-10">Select a skill:</label>
                    <select id="subject" className ="custom-select col-md-10" ref={subjectEl}>
                    {subjects.map(subject => {
                        return <option value={subject.name} key={subject.id}>{subject.name}</option>
                    })}
                    </select>
                </div>
                
                <div className="form-group form-inline">
                    <button className="btn btn-primary">Find Flashcards</button>
                </div>
            </form>
        </div>
        <div className="card-grid">
            <FlashcardList flashcards={flashcards} />
        </div> 
      </div>
    );
    
}

export default FlashcardsContainer;