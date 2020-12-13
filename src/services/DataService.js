import http from "./http-common";

const getTests = () => {
  return http.get("/tests");
};

const getProblems = () => {
  return http.get("/problems");
};

const createTest = (data) => {
  return http.post("/tests", data);
};

const createProblem = (data) => {
  return http.post("/problems", data);
};

const updateTest = (id, data) => {
  return http.put(`/tests/${id}`, data);
};

const updateProblem = (id, data) => {
  return http.put(`/problems/${id}`, data);
};

const deleteTest = (id) => {
  return http.delete(`/tests/${id}`);
};

const deleteProblem = (id) => {
  return http.delete(`probles/${id}`);
};

const deleteAllTests = () => {
  return http.delete(`/tests`);
};

const getTestById = (id) => {
  return http.get(`/tests/${id}`);
};

const findTestByName = (name) => {
  return http.get(`/tests?name=${name}`);
};

export default {
  getTests,
  getProblems,
  createTest,
  createProblem,
  updateTest,
  updateProblem,
  deleteTest,
  deleteProblem,
  deleteAllTests,
  getTestById,
  findTestByName
};