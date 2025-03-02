import { commonAPI } from "./commonAPI.js";
import { serverURL } from "./serverURL.js";

export const postProduct = async (reqBody) => {
  return await commonAPI("POST", serverURL, reqBody);
};

export const getProduct = async () => {
  return await commonAPI("GET", serverURL);
};

export const deleteProduct = async (id) => {
  return await commonAPI("DELETE", `${serverURL}/${id}`);
};

export const updateProduct = async (id, reqBody) => {
  return await commonAPI("PUT", `${serverURL}/${id}`, reqBody);
};