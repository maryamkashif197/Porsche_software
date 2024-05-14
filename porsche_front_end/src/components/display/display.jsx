import React from 'react'
import './display.css';
import image_1 from '../../assets/grey.jpg'
import image_2 from '../../assets/lightpurple.jpg'
import image_3 from '../../assets/blue.jpg'
import image_4 from '../../assets/gold.jpg'
import image_5 from '../../assets/darkgrey.jpg'
import image_6 from '../../assets/white.jpg'
import image_7 from '../../assets/2022-cyberpunk-porsche-992-gt3-4k-8z-1366x768.jpg'


const display = () => {
  return (
<>
    <div className='text'>
        <h1>Models</h1>
    </div>
    <div className='cars_1'>
        <div className='car'>
            <div className="image-container">
                <img src={image_1} alt=""/>
                <div className='caption'><p>The iconic, rear-engine sports car with exceptional performance.</p>
                <text className='price'>From $114,000*</text></div>
                <button className="overlay-button">All 911 models</button>
               </div>
        </div>
        <div className='car'>
            <div className="image-container">
                <img src={image_2} alt=""/>
                <div className='caption'><p>All-electric SUV with impressive E-Performance.</p>
                <text className='price'>From $78,000*</text></div>
                <button className="overlay-button">All Macan models</button>
            </div>
        </div>
    </div>
    <div className='cars_2'>
        <div className='car'>
            <div className="image-container">
                <img src={image_3} alt=""/>
                <div className='caption'><p>The versatile SUV with sports car performance and up to five seats.</p>
                <text className='price'>From $79,200*</text></div>
                <button className="overlay-button">All Cayenne models</button>
            </div>
        </div>
        <div className='car'>
            <div className="image-container">
                <img src={image_4} alt=""/>
                <div className='caption'><p>The sports car sedan for an active lifestyle with highest comfort</p>
                <text className='price'>From $102,800*</text></div>
                <button className="overlay-button">All Panamera models</button>
            </div>
        </div>
    </div>
    <div className='cars_3'>
        <div className='car'>
            <div className="image-container">
                <img src={image_5} alt=""/>
                <div className='caption'><p>The mid-engine sports car for two made for pure driving pleasure.</p>
                <text className='price'>From $68,300*</text></div>
                <button className="overlay-button">All 718 models</button>
            </div>
        </div>
        <div className='car'>
            <div className="image-container">
                <img src={image_6} alt=""/>
                <div className='caption'><p>The pure expresssion of an electric sports car.</p>
                <text className='price'>From $99,400*</text></div>
                <button className="overlay-button">All Taycan models</button>
            </div>
        </div>
    </div>
    <div className='txt'>
        <p>*Manufacturer’s Suggested Retail Price. Excludes options; taxes; title; registration; delivery, processing and handling fee; dealer charges. Dealer sets actual selling price.</p>
    </div>
   
</>

  )
}

export default display
