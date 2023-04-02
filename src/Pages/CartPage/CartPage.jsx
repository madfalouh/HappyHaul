import React, { useRef } from "react";
import { useSelector } from "react-redux";


import "./CartPage.css";

import CartFirstSection from "../../component/CartFirstSection/cartFirstSection";
import CartSecondSection from "../../component/CartFirstSection/CartSecondSection";

function CartPage() {
  const CartItems = useSelector((state) => state.CartItem);
  
  const { cartLoading, cartItems } = CartItems;
     
console.log("ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff")

  console.log(cartItems?.[0]?.cartItems?.products);

//product: "641b5cc1a556a0763a20d8c5" qty : 12 
  return (
    <div className="cart-container">
      <div className="cart-first-section">
    
        {   Array.isArray(cartItems?.[0]?.cartItems?.products) ?  cartItems?.[0]?.cartItems?.products?.map((pr , index )=>{
             console.log(pr);
             return   <CartFirstSection  props={ {ProductId : pr.product , index  , qty :cartItems[0].cartItems.products[index].qty  } }   ></CartFirstSection>

          }) : console.log(cartItems?.[0]?.cartItems?.products.products)    }
         
      </div>

      <div className="cart-second-section">
  <CartSecondSection></CartSecondSection>
      </div>
    </div>
  );
}

export default CartPage;
