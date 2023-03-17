import React from "react";
import Logo from "../../assets/HappyHulLogo.png";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import './Nav.css'

function Nav() {
  return (
    <div className="navigation-container">
      <nav className="header">
        <a href="#">
          <div className="nav-image" ></div>
          
        </a>
        <ul className="navbar">

          <li>
            <a  className="active" href="#">Home</a>
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
          <li>          <a href="#">
            
            <LocalMallIcon></LocalMallIcon>
          </a></li>

        </ul>
      </nav>
    </div>
  );
}

export default Nav;
