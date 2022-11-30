import { instance } from "../axios";

export const getProducts = async () => instance.get("/api/product").then((resp) => resp.data);

export const getProductDetail = async (id) => instance.get(`/api/product/${id}`).then((resp) => resp.data);
