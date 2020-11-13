export default function getQuestions() {
  return ((dispatch) => {
    dispatch({ type: 'LOADING_QUESTIONS' });
    fetch('http://localhost:3000/api/v1/tests/2/questions')
      .then(response => response.json())
      .then(data => dispatch({ type: 'ADD_QUESTION', questions: data.results }))
      .catch(error => console.log(error));
	})
}
