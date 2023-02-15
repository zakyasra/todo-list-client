import { Axios } from "./Axios";
import { camelizeKeys, decamelizeKeys } from "humps";

export const API_URL = "http://127.0.0.1:3333";

const client = (
  endpoint,
  { body, method, headers, params, responseType } = {}
) => {
  headers = {
    ...headers,
    "content-type": "application/json",
    accept: "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`
    // Authorization: `Bearer Mg.EZF3nOTsYSNtdXZNcz_F7csxXv1XcfPnSQ2_gBq-wJ1Iiu7Oz4AfmR0TCKji`,
  };

  const config = {
    url: `${API_URL}/${endpoint}`,
    headers: {
      ...headers
    },
    responseType: "json",
    method: method || "GET"
  };

  if (params) {
    config.params = decamelizeKeys(params);
  }

  if (body) {
    config.data = decamelizeKeys(body);
  }

  if (responseType) {
    config.responseType = responseType;
  }

  const onSuccess = (res) => {
    let data = res?.data || null;

    if (res.headers["content-type"].split(";")[0] !== "application/json") {
      return {
        isSuccess: true,
        error: false,
        data,
        fileName: res.headers["content-disposition"].split("filename=")[1],
        status: res?.status
      };
    }

    data = camelizeKeys(data);
    return {
      isSuccess: true,
      error: false,
      data,
      status: res?.status
    };
  };

  const onError = (err) => {
    let error = err?.response?.data;
    error = camelizeKeys(error);

    return {
      isSuccess: false,
      data: err?.data,
      error,
      status: err?.response?.status
    };
  };

  return Axios(config).then(onSuccess).catch(onError);
};

export default client;
