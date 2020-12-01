export function fetchJobs() {
    const BASE_URL = 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json'

    return (dispatch) => {
      dispatch({ type: 'LOADING_JOBS' });
      fetch(BASE_URL)
        .then(response => response.json())
        .then(responseJSON => dispatch({ type: 'ADD_JOBS', jobs: responseJSON }))
        .catch(error => console.log(error));
      };
}