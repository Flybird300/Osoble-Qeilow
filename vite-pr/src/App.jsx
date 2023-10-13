import React from 'react'
import Navbar from './componets/Navbar/Navbar';
import Hero from './componets/Hero/Hero';
import Group from './componets/Group/Group';
import './index.css'
import './App.css'
import Timeline from './componets/Timeline/Timeline';
import Faqs from './componets/faq/Faq'
function App() {

  return (
    <div>
      <div className='background'>
        <Navbar />
        <Hero />
      </div>
      <Timeline />
      <Faqs />
    </div>
  )
}
export default App;
