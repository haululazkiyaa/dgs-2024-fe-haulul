import { get, post, put, remove } from "../lib/api.js";

export const getCategories = async () => {
  return await get("/categories");
};

export const getCategoryById = async (id) => {
  return await get(`/categories/${id}`);
};

export const addCategory = async (data) => {
  return await post("/categories", data);
};

export const updateCategory = async (id, data) => {
  return await put(`/categories/${id}`, data);
};

export const deleteCategory = async (id) => {
  return await remove(`/categories/${id}`);
};
