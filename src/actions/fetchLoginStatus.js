import axios from 'axios';

export const fetchLoginStatus = () => (dispatch) => {
  axios
    .get('https://online-quiz-api.herokuapp.com/api/v1/logged_in', { withCredentials: true })
    .then((response) => {
      if (response.data.logged_in) {
        dispatch({
          type: 'LOGIN_USER',
          user: response.data.user.data.attributes,
        });
        dispatch({ type: 'CLEAR_ERROR' });
      }
    })
    .catch((error) =>
      dispatch({ type: 'ADD_ERROR', error: 'Something went wrong. Try again.' })
    );
};