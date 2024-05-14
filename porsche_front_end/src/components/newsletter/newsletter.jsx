import React from 'react'
import './newsletter.css';
import image_7 from '../../assets/3whitecars.jpg'
const newsletter = () => {
  return (
    
   <div className='newsletter'>
    <div className='news-left'>
        <h3>Click to know more about us!</h3>
    
        <button type="submit" class="btn">About us</button>
    </div>
    <div className='news-right'>
        <img className="img" src={image_7}/>
    </div>
    
   </div>

  )
}

export default newsletter
