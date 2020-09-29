export default function getQuestions() {
  return ((dispatch) => {
    dispatch({ type: 'LOADING_QUESTIONS' });
    fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(questions => dispatch({ type: 'ADD_QUESTIONS', questions }))
      .catch(function (error) {
				if (error.response) {
					alert('Code: ' + error.response.data.error.code + '\r\nMessage: ' + error.response.data.error.message);
				} else {
					console.log('Error', error.message);
				}
			});
	})
}
