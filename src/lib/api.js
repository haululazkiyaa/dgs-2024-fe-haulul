import { BASE_URL } from "../constants/baseUrl";
import axios from "axios";

const axiosReq = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const get = async (url) => {
  try {
    const response = await axiosReq.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const post = async (url, data) => {
  try {
    const response = await axiosReq.post(url, data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const put = async (url, data) => {
  try {
    const response = await axiosReq.put(url, data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const remove = async (url) => {
  try {
    const response = await axiosReq.delete(url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
