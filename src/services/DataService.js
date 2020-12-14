import http from "./http-common";

const getTests = () => {
  return http.get("/tests");
};

const getProblems = () => {
  return http.get("/problems");
};

const getSolutionsByProblemId = (id) => {
  return http.get("/probelms/:id/solutions");
};

const createTest = (data) => {
  return http.post("/tests", data);
};


const createProblem = (data) => {
  return http.post("/problems", data);
};

const createProblemSolution = (data) => {
  return http.post("/problems/:id/solutions", data);
};

const updateTest = (id, data) => {
  return http.put(`/tests/${id}`, data);
};

const updateProblem = (id, data) => {
  return http.put(`/problems/${id}`, data);
};

const updateSolution = (id, data) => {
  return http.put(`/solutions/${id}`, data);
};

const deleteTest = (id) => {
  return http.delete(`/tests/${id}`);
};

const deleteProblem = (id) => {
  return http.delete(`problems/${id}`);
};

const deleteSolution = (id) => {
  return http.delete(`solutions/${id}`);
};

const deleteAllTests = () => {
  return http.delete(`/tests`);
};

const deleteAllProblems = () => {
  return http.delete(`/problems`);
};

const getTestById = (id) => {
  return http.get(`/tests/${id}`);
};

const getProblem = (id) => {
  return http.get(`/problems/${id}`);
};

const findTestByName = (name) => {
  return http.get(`/tests?name=${name}`);
};

const findSearchedProblems = (term) => {
  return http.get(`/problems?text=${term}`);
};

export default {
  getTests,
  getProblems,
  getSolutionsByProblemId,
  createTest,
  createProblem,
  createProblemSolution,
  updateTest,
  updateProblem,
  updateSolution,
  deleteTest,
  deleteProblem,
  deleteSolution,
  deleteAllTests,
  deleteAllProblems,
  getTestById,
  getProblem,
  findTestByName,
  findSearchedProblems
};