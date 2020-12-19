import http from "./http-common";

const getProblems = () => {
    return http.get("/problems");
  };
  
const getSolutionsByProblemId = (id) => {
    return http.get(`/probelms/${id}/solutions`);
};

const createProblem = (data) => {
    return http.post("/problems", data);
};
  
const createSolution = (id, data) => {
    return http.post(`/problems/${id}/solutions`, data);
};

const updateProblem = (id, data) => {
    return http.put(`/problems/${id}`, data);
};

const deleteProblem = (id) => {
    return http.delete(`problems/${id}`);
};
  
const getProblem = (id) => {
    return http.get(`/problems/${id}`);
};

const getSearchedProblems = (query) => {
    return http.get(`/problems?text=${query}`);
};

export default {
    getProblems,
    getSolutionsByProblemId,
    createProblem,
    createSolution,
    updateProblem,
    deleteProblem,
    getProblem,
    getSearchedProblems
};