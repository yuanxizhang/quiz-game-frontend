import DataService from "../services/DataService";

export function getProblems() {     
    return (dispatch) => {
      dispatch({ type: 'LOADING_PROBLEMS' });
      DataService
        .getProblems()
        .then(jsondata => dispatch({ type: 'ADD_PROBLEMS', problems: jsondata}))
        .catch(error => console.log(error));
      };
};  
  
export function addProblem(pro) {  
    return (dispatch) => {  
        DataService
        .createProblem(pro)
        .then(data => dispatch({ type: 'ADD_PROBLEM', payload: pro })) 
        .catch(error => console.log(error));       
    }  
};  
  
export function editProblem(problemId) {  
    return (dispatch) => {           
            DataService
            .updateProblem(problemId)
            .then(resp => dispatch({ type: 'EDIT_PROBLEM', payload: problemId})) 
            .catch(error => console.log(error));         
    } 
};  
  
export function deleteProblem(problemId) {  
    return (dispatch) => {  
            DataService
            .deleteProblem(problemId)
            .then( data => dispatch({ type: 'DELETE_PROBLEM', payload: problemId})) 
            .catch(error => console.log(error));   
    };  
     
}; 