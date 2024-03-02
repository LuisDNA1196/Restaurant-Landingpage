import React from 'react'
import Navbar from "./Navbar"
import BannerBackground from "../assets/home-banner-background.png"
import BannerImage from  "../assets/home-banner-image.png"
import {FiArrowRight} from "react-icons/fi"

const Home = () => {
  return (
    <div className='home-container'>
        <Navbar/>
        <div className='home-banner-container'>
        <div className='home-bannerImage-container'>
            <img className='BannerBackground' src={BannerBackground} alt="" />
        </div>
          <div className='home-text-section'>
          <h1 className='primary-heading'>
            Your favorite food Delivered Hot & Fresh
          </h1>
            <p className='primary-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi molestie, lectus ac rutrum molestie, nulla ex venenatis ex, vel imperdiet elit turpis in lorem.
            </p>
            <button className='secondary-button'>
              Order Now <FiArrowRight/>
            </button>
          </div>
          <div className='home-image-container'>
            <img src={BannerImage} alt="" />
        </div>
        </div>
    </div>
  )
}

export default Home