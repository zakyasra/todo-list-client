import client from "./ApiClient";

export const register = (body) => {
  return client("register", {
    body,
    method: "POST"
  });
};

export const login = (body) => {
  return client("login", {
    body,
    method: "POST"
  });
};

export const profile = () => {
  return client("profile");
};
