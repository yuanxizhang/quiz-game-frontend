export default function getQuestions() {
  return ((dispatch) => {
    dispatch({ type: 'LOADING_QUESTIONS' });
    fetch('ttps://online-quiz-api.herokuapp.com/api/v1/tests/1/questions/')
      .then(response => response.json())
      .then(data => dispatch({ type: 'ADD_QUESTION', questions: data.results }))
      .catch(error => console.log(error));
	})
}
