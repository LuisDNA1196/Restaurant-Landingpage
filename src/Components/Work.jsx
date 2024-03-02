import React from 'react'
import PickMeals from '../assets/pick-meals-image.png'
import ChooseMeals from '../assets/choose-image.png'
import DeliveryMeals from '../assets/delivery-image.png'

const Work = () => {
        const workInfoData = [
                {
                        image: PickMeals,
                        title: "PickMeals",
                        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi molestie, lectus ac rutrum molestie, nulla ex venenatis ex, vel imperdiet elit turpis in lorem."
                },
                {
                        image: ChooseMeals,
                        title: "Choose How Often",
                        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                },
                {
                        image: DeliveryMeals,
                        title: "Fast Deliveries",
                        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                },
        ];
  return (
    <div className='work-section-wrapper'>
        <div className='work-section-top'>
                <p className='primary-subheading'>
                Work
                </p>
                <h1 className='primary-heading'>
                How it works
                </h1>
                <p className='primary-text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
        </div>
        <div className='work-section-bottom'>
                {
                        workInfoData.map((data) =>(
                         <div className='work-section-info'>
                                <div className='info-boxes-img-container'>
                                <img src={data.image} alt="" />
                                </div>
                                <h2>{data.title}</h2>
                                <p>{data.text}</p>
                         </div>
                        )
                        )
                }
        </div>
    </div>
  )
}

export default Work