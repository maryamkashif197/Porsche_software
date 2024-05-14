import React from 'react';
import './footer.css';
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <footer>
      <div className="row">
        <div className="col">
          
          <p className="footer_about">Porsche, a legendary marque in the automotive world, represents the epitome of performance, luxury, and precision engineering. Founded in 1931 by Ferdinand Porsche, this German automaker has left an indelible mark on the industry with its iconic sports cars and racing heritage. 
          </p>
        </div>
        <div className="col">
          <h3>Contact <div className="bottom_line"><span></span></div></h3>
          <ul>  <li><a href="">Porsche at a Glance</a></li>
            <li><a href="">Press</a></li>
            <li><a href="">Contact</a></li></ul>
        </div>
        <div className="col">
          <h3>Links <div className="bottom_line"><span></span></div></h3>
          <ul>
            <li><a href="">HOME</a></li>
            <li><a href="">MODELS</a></li>
            <li><a href="">ABOUT US</a></li>
           
          </ul>
        </div>
        <div className="col">
          <h3>Newsletter <div className="bottom_line"><span></span></div></h3>
          <form>
            <ion-icon className="icon" name="mail"></ion-icon>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit"><ion-icon className="icon_right" name="arrow-round-forward"></ion-icon></button>
          </form>
          <div className="social_icons">
            <ion-icon className="social_icon" name="logo-facebook"></ion-icon>
            <ion-icon className="social_icon" name="logo-whatsapp"></ion-icon>
            <ion-icon className="social_icon" name="logo-twitter"></ion-icon>
            <ion-icon className="social_icon" name="logo-instagram"></ion-icon>
          </div>
        </div>
      </div>
      <hr />
      <p className="copyright">© 2024 Porsche Cars North America, Inc. Legal notice. Privacy notice. California Privacy. Accessibility Statement. Open Source Software Notice. Do Not Sell or Share My Personal Information. Whistleblower System. Emergency Responders. Recall Information. 3G Wireless Turndown FAQs.</p>
    </footer>
  );
}

export default Footer;
