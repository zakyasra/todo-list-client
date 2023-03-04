import client from "./ApiClient";

export const getProject = () => {
  return client("project");
};
export const postProject = (body) => {
  return client("project", { body, method: "POST" });
};
export const putProject = (id, body) => {
  return client("project/" + id, { body, method: "PUT" });
};
export const putSelesai = (id, body) => {
  return client("project/selesai/" + id, { body, method: "PUT" });
};
export const deleterProject = (id) => {
  return client("project/" + id, { method: "DELETE" });
};
