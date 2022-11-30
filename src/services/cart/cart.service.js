import { instance } from "../axios";

export const addToCart = async ({ id, colorCode, storageCode }) =>
  instance
    .post("/api/cart", {
      id,
      colorCode,
      storageCode,
    })
    .then((resp) => {
      return resp.data;
    });
