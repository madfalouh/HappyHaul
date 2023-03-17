import { useState } from 'react'

import './App.css'
import Banner from './component/banner/Banner'
import FeauturedProducts from './component/featuredProducts/FeauturedProducts'
import Features from './component/features/Features'
import LastBanner from './component/lastBanner/LastBanner'
import Nav from './component/nav/Nav'
import NewArrivals from './component/NewArrivals/NewArrivals'
import Sm_banner from './component/sm-banner/Sm_banner'
import WelcomSection from './component/welcome-section/WelcomSection'

function App() {

  return (
    <div className="App">

      <Nav></Nav>
      <WelcomSection></WelcomSection>
      <Features></Features>
      <FeauturedProducts></FeauturedProducts>
      <Banner></Banner>
      <NewArrivals></NewArrivals>
      <Sm_banner></Sm_banner>
      <LastBanner></LastBanner>
    </div>
  )
}

export default App
