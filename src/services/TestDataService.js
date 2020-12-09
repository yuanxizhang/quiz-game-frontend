import http from "./http-common";

const getAll = () => {
  return http.get("/tests");
};

const get = (id) => {
  return http.get(`/tests/${id}`);
};

const create = (data) => {
  return http.post("/tests", data);
};

const update = (id, data) => {
  return http.put(`/tests/${id}`, data);
};

const remove = (id) => {
  return http.delete(`/tests/${id}`);
};

const removeAll = () => {
  return http.delete(`/tests`);
};

const findByName = (name) => {
  return http.get(`/tests?name=${name}`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByName
};