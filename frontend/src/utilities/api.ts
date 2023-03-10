import axios from "axios";
import { APIResponse } from "./types";

const baseUrl = "http://localhost:5000";

const headers = () => {
  return { "Content-Type": "application/json", Accept: "application/json" };
};

const authHeader = () => {
  return {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
    "Content-Type": "application/json",
    Accept: "application/json",
  };
};
const parseResponse = (response: any): APIResponse => {
  return response;
};
const parseError = (error: Error): APIResponse => {
  return {
    status: false,
    message: error.message,
    data: null,
  };
};

const api = {
  fetch(url: string, params: {}, auth = false): Promise<APIResponse> {
    return axios
      .get<APIResponse>(`${baseUrl}${url}`, {
        headers: auth ? authHeader() : headers(),
        validateStatus: (status) => status >= 200 && status < 500,
      })
      .then(parseResponse)
      .catch(parseError);
  },

  post(url: string, data: any, auth = false): Promise<APIResponse> {
    const body = data;
    return axios
      .post<APIResponse>(`${baseUrl}${url}`, body, {
        headers: auth ? authHeader() : headers(),
        validateStatus: (status) => status >= 200 && status < 500,
      })
      .then(parseResponse)
      .catch(parseError);
  },

  put(url: string, data: any, auth = false): Promise<APIResponse> {
    const body = data;

    return axios
      .put<APIResponse>(`${baseUrl}${url}`, body, {
        headers: auth ? authHeader() : headers(),
        validateStatus: (status) => status >= 200 && status < 500,
      })
      .then(parseResponse)
      .catch(parseError);
  },
  delete(url: string, auth = false): Promise<APIResponse> {
    return axios
      .delete<APIResponse>(`${baseUrl}${url}`, {
        headers: auth ? authHeader() : headers(),
        validateStatus: (status) => status >= 200 && status < 500,
      })
      .then(parseResponse)
      .catch(parseError);
  },
};
export default api;
