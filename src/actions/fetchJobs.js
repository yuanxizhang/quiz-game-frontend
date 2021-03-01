export function fetchJobs() {
    const BASE_URL = 'https://app.cors.bridged.cc/https://jobs.github.com/positions.json'

    return (dispatch) => {
      dispatch({ type: 'LOADING_JOBS' });
      fetch(BASE_URL)
        .then(response => response.json())
        .then(json => dispatch({ type: 'ADD_JOBS', jobs: json.jobs }))
        .catch(error => console.log(error));
      };
}