const axios = require('axios').default;

const BASE_URL = 'http://localhost:5000/api/v1/problems';

const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  };

export function getProblems() {     
    return (dispatch) => {
      dispatch({ type: 'LOADING_PROBLEMS' });
      fetch(BASE_URL)
        .then(response => response.json())
        .then(responseJSON => dispatch({ type: 'ADD_PROBLEMS', jobs: responseJSON }))
        .catch(error => console.log(error));
      };
};  
  
export function addProblem(newProblem) {  
    return (dispatch) => {  
        fetch(BASE_URL, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(newProblem)
          })
        .then(resp => resp.json())
        .then(data => dispatch({ type: 'ADD_PROBLEM', payload: newProblem })) 
        .catch(error => console.log(error));       
    }  
};  
  
// export function editProblem(problemId) {  
//     return (dispatch) => {  
//         return dispatch({  
//             axios
//             .put(`BASE_URL/${problemId}`, updatedProblem)
//             .then(resp => dispatch({ type: 'EDIT_PROBLEM', payload: problemId})) 
//             .catch(error => console.log(error));       
//         });  
//     }  
// };  
  
export function deleteProblem(problemId) {  
    return dispatch => {  
        return dispatch({  
            fetch(`{BASE_URL}/{problemId}`, {
                method: 'DELETE',
                headers: headers,
                body: JSON.stringify(obj)
              })
            .then(resp => resp.json())
            .then( data => dispatch({ type: 'DELETE_PROBLEM', payload: problemId})) 
            .catch(error => console.log(error));   
        });  
    }  
}; 