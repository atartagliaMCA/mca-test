import { instance } from "../axios";

export const getProducts = async () => {
  return await instance.get(`/api/product`).then((resp) => resp.data);
};

export const getProductDetail = async (id) => {
  return await instance.get(`/api/product/${id}`).then((resp) => resp.data);
};
