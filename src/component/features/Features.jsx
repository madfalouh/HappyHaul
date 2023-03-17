import React from "react";
import "./Features.css";
import feature1 from "../../assets/img/features/f1.png";
import feature2 from "../../assets/img/features/f2.png";
import feature3 from "../../assets/img/features/f3.png";
import feature4 from "../../assets/img/features/f4.png";
import feature5 from "../../assets/img/features/f5.png";
import feature6 from "../../assets/img/features/f6.png";
function Features() {
  return (
    <div className="feature">
      <div className="fe-box">
        <img src={feature1}></img>
        <h6  style={{backgroundColor :"#fddde4" , color: "#088178"}} >Free Shipping</h6>
      </div>
      <div className="fe-box">
        <img src={feature2}></img>
        <h6 style={{backgroundColor :"#cdebbc" , color: "#088178"}}>Free Shipping</h6>
      </div>
      <div className="fe-box">
        <img src={feature3}></img>
        <h6 style={{backgroundColor :"#d1e8f2" , color: "#088178"}}>Free Shipping</h6>
      </div>
      <div className="fe-box">
        <img src={feature4}></img>
        <h6 style={{backgroundColor :"#cdd4f8" , color: "#088178"}}>Free Shipping</h6>
      </div>
      <div className="fe-box">
        <img src={feature5}></img>
        <h6 style={{backgroundColor :"#f6dbf6" , color: "#088178"}}>Free Shipping</h6>
      </div>
      <div className="fe-box">
        <img src={feature6}></img>
        <h6 style={{backgroundColor :"#fff2e5" , color: "#088178"}}>Free Shipping</h6>
      </div>
    </div>
  );
}

export default Features;
