import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Home from './components/home/home';
import CarDisplay from './components/display/display';
import NewsLetter from './components/newsletter/newsletter';
import Footer from './components/footer/footer';
const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <CarDisplay/>
      <NewsLetter/>
      <Footer/>
     


    </div>
  )
}

export default App
