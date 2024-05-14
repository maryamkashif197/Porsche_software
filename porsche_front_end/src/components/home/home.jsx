import React from 'react'
import Video from '../../assets/Get to know the all-electric Porsche Taycan (1080p).mp4';
import './home.css';
const home = () => {
  return (
    <div>
        <div class="video-container">
        <video class="car_video" src={Video} controls loop muted autoplay height="150"></video>
    </div>
    <div className='home container'>
   
    </div>
    <script src="https://kit.fontawesome.com/ae360af17e.js" crossorigin="anonymous"></script>
    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
    <script src="head.js"></script>
      </div>
  )
}

export default home
