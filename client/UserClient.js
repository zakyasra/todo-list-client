import client from "./ApiClient";

export const register = (body) => {
  return client("register", {
    body,
    method: "POST"
  });
};
