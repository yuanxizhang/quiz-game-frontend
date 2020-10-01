export default function getQuestions() {
  return ((dispatch) => {
    dispatch({ type: 'LOADING_QUESTIONS' });
    fetch('https://opentdb.com/api.php?amount=10&category=10&difficulty=medium&type=multiple')
      .then(response => response.json())
      .then(data => dispatch({ type: 'ADD_QUESTION', questions: data.results }))
      .catch(error => console.log(error));
	})
}
