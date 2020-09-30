export default function fetchTests() {
  return ((dispatch) => {
    dispatch({ type: 'LOADING_TESTS' });
    fetch('https://opentdb.com/api.php?amount=10&category=10&difficulty=medium&type=multiple')
      .then(response => response.json())
      .then(tests => dispatch({ type: 'ADD_TESTS', tests }))
      .catch(function (error) {
				if (error.response) {
					alert('Code: ' + error.response.data.error.code + '\r\nMessage: ' + error.response.data.error.message);
				} else {
					console.log('Error', error.message);
				}
			});
	})
}