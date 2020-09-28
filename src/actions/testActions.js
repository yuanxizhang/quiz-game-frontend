export default function fetchTests() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_TESTS' });
    fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(tests => dispatch({ type: 'ADD_TESTS', tests }))
      .catch(function (error) {
				if (error.response) {
					alert('Code: ' + error.response.data.error.code + '\r\nMessage: ' + error.response.data.error.message);
				} else {
					console.log('Error', error.message);
				}
			});
	}
}
export default fetchTests;