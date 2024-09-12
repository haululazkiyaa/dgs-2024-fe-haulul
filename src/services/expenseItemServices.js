import { get, post, put, remove } from "../lib/api.js";

export const getExpenseItems = async () => {
  return await get("/expense-items");
};

export const getExpenseItemById = async (id) => {
  return await get(`/expense-items/${id}`);
};

export const addExpenseItem = async (data) => {
  return await post("/expense-items", data);
};

export const updateExpenseItem = async (id, data) => {
  return await put(`/expense-items/${id}`, data);
};

export const deleteExpenseItem = async (id) => {
  return await remove(`/expense-items/${id}`);
};
