import React from "react";
import "./NewArivals.css";
import productimg1 from "../../assets/img/products/n1.jpg";
import productimg2 from "../../assets/img/products/n2.jpg";
import productimg3 from "../../assets/img/products/n3.jpg";
import productimg4 from "../../assets/img/products/n4.jpg";
import productimg5 from "../../assets/img/products/n5.jpg";
import productimg6 from "../../assets/img/products/n6.jpg";
import productimg7 from "../../assets/img/products/n7.jpg";
import productimg8 from "../../assets/img/products/n8.jpg";
import StarIcon from "@mui/icons-material/Star";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function NewArrivals() {
  return (
    <div className="product-section">
      <h2>New Arrivals</h2>
      <p>Summer Collection New Modern Design</p>
      <div className="product-wrapper">
        <div className="product-container">
          <div className="product">
            <img src={productimg1}></img>
            <div className="des">
              <span>adidas</span>
              <h5>Cartoon Astronaut T-shirt</h5>
              <div className="star">
                <StarIcon></StarIcon>
                <StarIcon></StarIcon>
                <StarIcon></StarIcon>
                <StarIcon></StarIcon>
                <StarIcon></StarIcon>
                 <span>121 review</span> 
              </div>
            </div>
            <div className="price-wrapper">
              <h4>78$</h4>
              <a href="#">
                {" "}
                <ShoppingCartIcon className="cart-now"></ShoppingCartIcon>{" "}
              </a>
            </div>
          </div>
        </div>

        <div className="product-container">
          <div className="product">
            <img src={productimg2}></img>
            <div className="des">
              <span>adidas</span>
              <h5>Cartoon Astronaut T-shirt</h5>
              <div className="star">
                <StarIcon></StarIcon>
                <StarIcon></StarIcon>
                <StarIcon></StarIcon>
                <StarIcon></StarIcon>
                <StarIcon></StarIcon>
                <span>121 review</span> 
              </div>
            </div>
            <div className="price-wrapper">
              <h4>78$</h4>
              <a href="#">
                {" "}
                <ShoppingCartIcon className="cart-now"></ShoppingCartIcon>{" "}
              </a>
            </div>
          </div>
        </div>

        <div className="product-container">
          <div className="product">
            <img src={productimg3}></img>
            <div className="des">
              <span>adidas</span>
              <h5>Cartoon Astronaut T-shirt</h5>
              <div className="star">
                <StarIcon></StarIcon>
                <StarIcon></StarIcon>
                <StarIcon></StarIcon>
                <StarIcon></StarIcon>
                <StarIcon></StarIcon>
                <span>121 review</span> 
              </div>
            </div>
            <div className="price-wrapper">
              <h4>78$</h4>
              <a href="#">
                {" "}
                <ShoppingCartIcon className="cart-now"></ShoppingCartIcon>{" "}
              </a>
            </div>
          </div>
        </div>
        <div className="product-container">
          <div className="product">
            <img src={productimg4}></img>
            <div className="des">
              <span>adidas</span>
              <h5>Cartoon Astronaut T-shirt</h5>
              <div className="star">
                <StarIcon></StarIcon>
                <StarIcon></StarIcon>
                <StarIcon></StarIcon>
                <StarIcon></StarIcon>
                <StarIcon></StarIcon>
                <span>121 review</span> 
              </div>
            </div>
            <div className="price-wrapper">
              <h4>78$</h4>
              <a href="#">
                {" "}
                <ShoppingCartIcon className="cart-now"></ShoppingCartIcon>{" "}
              </a>
            </div>
          </div>
        </div>

        <div className="product-container">
          <div className="product">
            <img src={productimg5}></img>
            <div className="des">
              <span>adidas</span>
              <h5>Cartoon Astronaut T-shirt</h5>
              <div className="star">
                <StarIcon></StarIcon>
                <StarIcon></StarIcon>
                <StarIcon></StarIcon>
                <StarIcon></StarIcon>
                <StarIcon></StarIcon>
                <span>121 review</span> 
              </div>
            </div>
            <div className="price-wrapper">
              <h4>78$</h4>
              <a href="#">
                {" "}
                <ShoppingCartIcon className="cart-now"></ShoppingCartIcon>{" "}
              </a>
            </div>
          </div>
        </div>
        <div className="product-container">
          <div className="product">
            <img src={productimg6}></img>
            <div className="des">
              <span>adidas</span>
              <h5>Cartoon Astronaut T-shirt</h5>
              <div className="star">
                <StarIcon></StarIcon>
                <StarIcon></StarIcon>
                <StarIcon></StarIcon>
                <StarIcon></StarIcon>
                <StarIcon></StarIcon>
                <span>121 review</span> 
              </div>
            </div>
            <div className="price-wrapper">
              <h4>78$</h4>
              <a href="#">
                {" "}
                <ShoppingCartIcon className="cart-now"></ShoppingCartIcon>{" "}
              </a>
            </div>
          </div>
        </div>
        <div className="product-container">
          <div className="product">
            <img src={productimg7}></img>
            <div className="des">
              <span>adidas</span>
              <h5>Cartoon Astronaut T-shirt</h5>
              <div className="star">
                <StarIcon></StarIcon>
                <StarIcon></StarIcon>
                <StarIcon></StarIcon>
                <StarIcon></StarIcon>
                <StarIcon></StarIcon>
                <span>121 review</span> 
              </div>
            </div>
            <div className="price-wrapper">
              <h4>78$</h4>
              <a href="#">
                {" "}
                <ShoppingCartIcon className="cart-now"></ShoppingCartIcon>{" "}
              </a>
            </div>
          </div>
        </div>
        <div className="product-container">
          <div className="product">
            <img src={productimg8}></img>
            <div className="des">
              <span>adidas</span>
              <h5>Cartoon Astronaut T-shirt</h5>
              <div className="star">
                <StarIcon></StarIcon>
                <StarIcon></StarIcon>
                <StarIcon></StarIcon>
                <StarIcon></StarIcon>
                <StarIcon></StarIcon>
                <span>121 review</span> 
              </div>
            </div>
            <div className="price-wrapper">
              <h4>78$</h4>
              <a href="#">
                {" "}
                <ShoppingCartIcon className="cart-now"></ShoppingCartIcon>{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewArrivals;
