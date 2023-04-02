import React, { useEffect, useState } from "react";
import Logo from "../../assets/HappyHulLogo.png";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import Person2Icon from "@mui/icons-material/Person2";
import "./Nav.css";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function Nav() {


//localStorage.clear()

  const CartItems = useSelector((state) => state.CartItem);
  
///const userInfo = useSelector((state) => state.user )

const User = useSelector((state) => state.user ) 
const {isUserLoading,user ,userIsLogged } = User

//const [userInfo , setUserInfo] = useState(null)


 const userInfo = JSON.parse(  localStorage.getItem("usertoken") )  


console.log(userInfo);





  const { cartLoading, cartItems } = CartItems;


console.log(CartItems);

  console.log(cartItems?.[0]?.cartItems?.products?.length);

  return (
    <div className="navigation-container">
      <nav className="header">
        <a href="#">
          <div className="nav-image"></div>
        </a>
        <ul className="navbar">
          <li>
            <a className="active" href="#">
              Home
            </a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="/cart">
               <div className="cart-nav-notification"  >

              <div className="nav-notification" >{cartItems?.[0]?.cartItems?.products?.length ? cartItems?.[0]?.cartItems?.products?.length:null }</div>
              <LocalMallIcon></LocalMallIcon>
                 </div>

            </a>
          </li>
          <li className="a-sign-in" >
            <a   href="/login">
            <div className="sign-in-nav" ><Person2Icon  style={{marginTop:"-4px"}}  className="sign-in-icon" ></Person2Icon>       <span className="sign-in"    >
     {user ? user.name : (userInfo ? userInfo.name : "Sign in")}

 </span> </div>   
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
