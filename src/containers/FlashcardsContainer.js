import React, {useState, useEffect, useRef} from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
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
        <div className="search-section">
            <Form className="select-form" onSubmit={handleSubmit}>
                <Row>
                    <Col>
                        <Form.Group controlId="selectLabel" className="select-label">
                            <Form.Label>Select a subject: </Form.Label>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="selectSubject">
                            <Form.Control as="select" ref={subjectEl} id="subject">
                                {subjects.map(subject => {
                                    return <option value={subject.name} key={subject.id}>{subject.name}</option>
                                })}
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Button variant="primary" type="submit" className="btn-select">
                            Find Flashcards
                        </Button>
                    </Col>  
                </Row>    
            </Form>
        </div>
        <div className="card-grid">
            <FlashcardList flashcards={flashcards} />
        </div> 
      </div>
    );
    
}

export default FlashcardsContainer;