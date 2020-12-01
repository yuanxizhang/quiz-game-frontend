export function findSearchedJobs(selection) {
    
    const SEARCH_URL = `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${selection.description}&location=${selection.location}${selection.full_time}`

    return (dispatch) => {
      dispatch({ type: 'LOADING_JOBS' });
      fetch(SEARCH_URL)
        .then(response => response.json())
        .then(responseJSON => dispatch({ type: 'ADD_JOBS', jobs: responseJSON }))
        .catch(error => console.log(error));
      };
}