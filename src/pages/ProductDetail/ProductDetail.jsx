import { Box, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Item } from "../../components/Item";
import "./ProductDetail.scss";
import { getProductDetail } from "../../services/product";
export const ProductDetail = () => {
  const [productDetail, setProductDetail] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    getProductDetail(id)
      .then((data) => {
        setProductDetail(data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div className="detail__container">
      {productDetail.length === 0 ? (
        <Box sx={{ display: "flex" }} className="loading">
          <CircularProgress />
        </Box>
      ) : (
        <Item productDetail={productDetail} />
      )}
    </div>
  );
};
