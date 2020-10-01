export default function fetchTests() {
  return ((dispatch) => {
    dispatch({ type: 'LOADING_TESTS' });
    fetch('https://opentdb.com/api.php?amount=10&category=10&difficulty=medium&type=multiple')
      .then(response => response.json())
      .then(data => dispatch({ type: 'ADD_TEST', test: {text: data.results[0].category, questions: data.results}}))
      .catch(error => console.log(error));
	})
}