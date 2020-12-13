import DataService from "../services/DataService";

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
        .then(responseJSON => dispatch({ type: 'ADD_PROBLEMS', problems: responseJSON }))
        .catch(error => console.log(error));
      };
};  
  
export function addProblem(newProblem) {  
    return (dispatch) => {  
        DataService
        .createProblem(newProblem)
        .then(data => dispatch({ type: 'ADD_PROBLEM', payload: newProblem })) 
        .catch(error => console.log(error));       
    }  
};  
  
// export function editProblem(problemId) {  
//     return (dispatch) => {           
//             DataService
//             .updateProblem(problemId)
//             .then(resp => dispatch({ type: 'EDIT_PROBLEM', payload: problemId})) 
//             .catch(error => console.log(error));       
//         });  
//     }  
// };  
  
export function deleteProblem(problemId) {  
    return (dispatch) => {  
            DataService
            .deleteProblem(problemId)
            .then( data => dispatch({ type: 'DELETE_PROBLEM', payload: problemId})) 
            .catch(error => console.log(error));   
    };  
     
}; 