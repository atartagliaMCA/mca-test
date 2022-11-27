import React from "react";
import { NavLink } from "react-router-dom";
import { useCurrency } from "../../hooks/useCurrency";
import "./ListItem.scss";

export const ListItem = ({ product }) => {
  const precio = useCurrency(product.price);
  return (
    <li className="list__item">
      <NavLink
        to={`/product/${product.id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div>
          <img src={product.imgUrl} alt="product" />
        </div>
        <div className="list__desc">
          <div className="list__model">
            <h4>{product.brand}</h4>
            <p>{product.model}</p>
          </div>
          <div className="list__price">
            <p>{precio}</p>
            <button>Ver producto</button>
          </div>
        </div>
      </NavLink>
    </li>
  );
};
