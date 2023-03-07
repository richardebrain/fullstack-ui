import axios from "axios";
import { APIResponse } from "./types";

const baseUrl = "http://localhost:5000/";

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

const api = {
  async fetch(url: string, params: {}, auth = false) {
    try {
      const response = await axios.get<APIResponse>(`${baseUrl}${url}`, {
        headers: auth ? authHeader() : headers(),
        validateStatus: (status) => status >= 200 && status <= 500,
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },

  async post(url: string, data: any, auth = false) {
    const body = data;
    try {
      const response = await axios.post<APIResponse>(`${baseUrl}${url}`, body, {
        headers: auth ? authHeader() : headers(),
        validateStatus: (status) => status >= 200 && status <= 500,
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },

  async put(url: string, data: any, auth = false) {
    const body = data;
    try {
      const response = await axios.put<APIResponse>(`${baseUrl}${url}`, body, {
        headers: auth ? authHeader() : headers(),
        validateStatus: (status) => status >= 200 && status <= 500,
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  async delete(url: string, auth = false) {
    try {
      const response = await axios.delete<APIResponse>(`${baseUrl}${url}`, {
        headers: auth ? authHeader() : headers(),
        validateStatus: (status) => status >= 200 && status <= 500,
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
};
export default api;
