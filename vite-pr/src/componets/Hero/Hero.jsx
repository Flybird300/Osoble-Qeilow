import React from 'react';
import './hero.css'
import images from '../../assets/images'

import { useEffect, useState } from 'react';

const Hero = () => {
    



    

    return (

        <div className='app__hero '>
          
            <div className='hero-section'>
                <div className='hero-text'>
                  <p> OSOBLE QEILOW - WEB DEVELOPER</p> 
                </div>

                <div className='hero-text-under'>
                    <h1>I help local business owners make more money through making good Responsive websites</h1>
                </div>
                <p>Do you need a functional website?</p>

               <div className='buttons'>
                <button type="button" className='button'>Yes, make me a website</button>
            <button type="button" className='buttontwo'>Learn more first</button>
            </div>
            </div>
            <div>
     
     
    </div>

            

        </div>
    )
}
export default Hero;