import { get, post, put, remove } from "../lib/api.js";

export const getWallets = async () => {
  return await get("/wallets");
};

export const getWalletById = async (id) => {
  return await get(`/wallets/${id}`);
};

export const addWallet = async (data) => {
  return await post("/wallets", data);
};

export const updateWallet = async (id, data) => {
  return await put(`/wallets/${id}`, data);
};

export const deleteWallet = async (id) => {
  return await remove(`/wallets/${id}`);
};
