import React from 'react'
import images from '../../assets/images'
import './footer.css'

const Footer = () => {

    return (
    <div className='app--footer'>
        <div className='flex-start'>
            
          
            <h4>Upgrade Your Reach & Your Business</h4>
            <p>qeilowosoblw@gmail.com</p>
             <p>Qeilow 2023 ©</p>
        </div>
        <div className='object-footer'>
            <h1>Qeilow</h1>
            <img src={images.insta} alt=""/>
            <img src={images.twitter} alt=""/>
            </div>
        </div>
    
    )
}
export default Footer;