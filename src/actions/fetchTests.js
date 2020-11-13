export function fetchTests() {
  return ((dispatch) => {
    dispatch({ type: 'LOADING_TESTS' });
    fetch('https://online-quiz-api.herokuapp.com/api/v1/tests')
      .then(response => response.json())
      .then(data => dispatch({ type: 'ADD_TEST', tests: data }))
      .catch(error => console.log(error));
	})
}