import React from "react";
import { useNavigate } from "react-router-dom";
import Banner from "../../component/banner/Banner";
import FeauturedProducts from "../../component/featuredProducts/FeauturedProducts";
import Features from "../../component/features/Features";
import LastBanner from "../../component/lastBanner/LastBanner";
import Nav from "../../component/nav/Nav";
import NewArrivals from "../../component/NewArrivals/NewArrivals";
import Sm_banner from "../../component/sm-banner/Sm_banner";
import WelcomSection from "../../component/welcome-section/WelcomSection";
function WelcomePage() {



  return (
    <>
      
      <WelcomSection></WelcomSection>
      <Features></Features>
      <FeauturedProducts></FeauturedProducts>
      <Banner></Banner>
      <NewArrivals></NewArrivals>
      <Sm_banner></Sm_banner>
      <LastBanner></LastBanner>
    </>
  );
}

export default WelcomePage;
