import http from "./http-common";

const getTests = () => {
  return http.get("/tests");
};

const createTest = (data) => {
  return http.post("/tests", data);
};

const updateTest = (id, data) => {
  return http.put(`/tests/${id}`, data);
};

const deleteTest = (id) => {
  return http.delete(`tests/${id}`);
};

const getTestById = (id) => {
  return http.get(`/tests/${id}`);
};

const findTestByName = (testName) => {
  return http.get(`/tests?name=${testName}`);
};

export default {
  getTests,
  createTest,
  updateTest,
  deleteTest,
  getTestById,
  findTestByName
};