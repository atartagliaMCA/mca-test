import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "./Navbar.scss";
import { Breadcrumb } from "../Breadcrumb/Breadcrumb";
import { CartContext } from "../../context";

export const Navbar = () => {
  const { cartProducts } = useContext(CartContext);

  return (
    <div className="navbar">
      <div className="logo">
        <NavLink
          to="/"
          style={{ textDecoration: "none", color: "var(--darkBlue)" }}
        >
          MCAStore
        </NavLink>
        <Breadcrumb />
      </div>
      <div className="cart">
        <ShoppingCartOutlinedIcon style={{ color: "var(--darkBlue)" }} />
        <span className="cart-quantity">{cartProducts}</span>
      </div>
    </div>
  );
};
