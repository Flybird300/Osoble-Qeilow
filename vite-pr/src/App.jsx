import React from 'react'
import Navbar from './componets/Navbar/Navbar';
import Hero from './componets/Hero/Hero';
import Group from './componets/Group/Group';
import './index.css'
import './App.css'
import Timeline from './componets/Timeline/Timeline';
import Faqs from './componets/faq/Faq'
import Price from './componets/Price/Price';
import Footer from './componets/footer/Footer'
import Info from './componets/Info/Info';
import Form from './componets/Form/Form'
import Portfolio from './componets/Portfolio/Portfolio';

function App() {

  return (

  <div>
    <div className='background'>
  <Navbar />
  <Hero />
  </div>
 {/* <Portfolio />*/}

 <Timeline/>
  <Info/>
 
  <div className='background-two'>
  <Price/>
  </div>
  <Faqs/>

  <Footer/>
   
  </div>
  )
     
}
   
    

export default App;
