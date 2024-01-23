// import { useState } from 'react'
import './index.css'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import { Hero } from './components/Hero.jsx'
import LogoSlider from './components/LogoSlider.jsx'
import Products from './components/Products.jsx'
import Services from './components/Services.jsx'
import Slider from './components/Slider.jsx'

function App() {

  return (
    <>
      <Header />
      <Hero />
      <Slider />
      <Services />
      <hr />
      <LogoSlider />
      <hr />
      <Products />
      <hr />
      <Footer />
    </>
  )
}

export default App
