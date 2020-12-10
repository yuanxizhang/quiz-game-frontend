import React, {useState, useEffect, useRef} from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import TestDataService from "../services/TestDataService";
import FlashcardList from '../components/flashcards/FlashcardList' 
import "./container.css";

const FlashcardsContainer = () => {
    const [flashcards, setFlashcards] = useState([]);
    const [subjects, setSubjects] = useState([]);
    const [loading, setLoading] = useState(false);

    const subjectEl = useRef()

    useEffect(() => {
        let unmounted = false;
        setLoading(true);

        TestDataService
        .getAll()
        .then(resp => {
            if (!unmounted) {
                setSubjects(resp.data);
                setLoading(false);
            }
        })
        .catch((error) => {
            if (!unmounted) {
                console.log('Error', error.message);
                setLoading(false);
            }
        })

        return () => { unmounted = true };      
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();

        TestDataService
        .getAll()
        .then((resp) => {
            console.log(resp.data.filter(s => s.name === subjectEl.current.value)[0]);
            setFlashcards(resp.data.filter(s => s.name === subjectEl.current.value)[0].questions);
        })
        .catch((error) =>  {
            console.log('Error', error.message);
        })
    }

    return (
       <Container className="container">
        <Row className="search-section">
            <Form className="select-form" onSubmit={handleSubmit}>
                <Row>
                    <Col>
                        <Form.Group className="select-label">
                            <Form.Label>Select a subject: </Form.Label>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
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
        </Row>
        <Row className="card-grid">
            <FlashcardList flashcards={flashcards} />
        </Row> 
        <Row className="loading">
            {loading && <h4>Loading...</h4>}
        </Row>
      </Container>
    );
    
}

export default FlashcardsContainer;