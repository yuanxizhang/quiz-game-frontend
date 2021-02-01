import axios from 'axios';

export const logoutUser = (data) => (dispatch) => {
  axios
    .delete('https://online-quiz-api.herokuapp.com/api/v1/logout', { withCredentials: true })
    .then((response) => {
      dispatch({ type: 'LOGOUT_USER' });
      dispatch({ type: 'CLEAR_ERROR' });
    })
    .catch((error) =>
      dispatch({ type: 'ADD_ERROR', error: 'Something went wrong. Try again.' })
    );
};