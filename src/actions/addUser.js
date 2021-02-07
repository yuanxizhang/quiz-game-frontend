import axios from 'axios';

export const addUser = (data, handleSuccess) => (dispatch) => {
  axios
    .post(
      'https://online-quiz-api.herokuapp.com/api/v1/users',
      { user: data },
      { withCredentials: true }
    )
    .then((response) => {
if (response.data.status === 500) {
      throw new Error(response.data.error)
    } 
    dispatch({ type: 'LOGIN_USER', user: response.data.user });
    dispatch({ type: 'CLEAR_ERROR' });
    handleSuccess();
  })
    .catch((response) =>
      dispatch({ type: 'ADD_ERROR', error: response.message })
    );
};