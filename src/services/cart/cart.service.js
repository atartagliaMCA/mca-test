import { instance } from "../axios";

export const addToCart = async ({ id, colorCode, storageCode }) => {
  return await instance
    .post("/api/cart", {
      id,
      colorCode,
      storageCode,
    })
    .then((resp) => resp.data);
};
