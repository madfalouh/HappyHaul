import React, { useRef } from "react";
import { useSelector } from "react-redux";


import "./CartPage.css";

import CartFirstSection from "../../component/CartFirstSection/cartFirstSection";
import CartSecondSection from "../../component/CartFirstSection/CartSecondSection";

function CartPage() {
  
     


//product: "641b5cc1a556a0763a20d8c5" qty : 12 
  return (
    <div className="cart-container">
      <div className="cart-first-section">

      </div>

      <div className="cart-second-section">
  <CartSecondSection></CartSecondSection>
      </div>
    </div>
  );
}

export default CartPage;
