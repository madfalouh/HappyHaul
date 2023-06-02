import React, { useEffect, useState } from "react";
import Logo from "../../assets/HappyHulLogo.png";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import Person2Icon from "@mui/icons-material/Person2";
import "./Nav.css";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import nikeLogo from "../../assets/nikeLogo.png";

function Nav() {
  const CartItems = useSelector((state) => state.CartItem);

  const User = useSelector((state) => state.user);
  const { isUserLoading, user, userIsLogged } = User;

  const { cartLoading, cartItems } = CartItems;

  console.log(CartItems);

  console.log(cartItems?.[0]?.cartItems?.products?.length);

  return (
    <div className="navigation-container">
      <nav className="header">
        <a href="#"></a>
        <ul className="navbar">
          <li>
            <img src={nikeLogo}></img>
          </li>
          <li>
            <a className="active" href="#">
              Home
            </a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">News</a>
          </li>
          <li>
            <a href="#">Males</a>
          </li>
          <li>
            <a href="#">Females</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="/cart">
              <div className="cart-nav-notification"></div>
            </a>
          </li>
          <li className="a-sign-in">
            <a href="/login">
              <div className="sign-in-nav">
                {" "}
                <span className="sign-in">
                  {user ? user.name : "Sign in"}
                </span>{" "}
              </div>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
