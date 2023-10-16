import React from 'react'
import './price.css'
import images from '../../assets/images'
const Price = () => {

   
    return (
        <div className='app__price' id="price">
            <div className="price-textt"> 
            <h2>Chosse A Plan Thats Right For You</h2>
             <p>Maintenance will be charged monthly to keep your website from crashing & for updates</p>
            </div>
        <div className='box-group'>
            <div className='box box-one'>
                <h4>Small bussniess</h4>
                <p><strong>$</strong>55/mo</p>
                <div className='relative'>
                    <h3><span className="main-price">$</span>400</h3>
                    </div>
               
                <div className='price-info'>
                    <div className='price-text'> 
                    <img src={images.sub} alt="sub" />
                    <p>Informational Website</p>
                        </div>
                    <div className='price-text'>
                        <img src={images.sub} alt="sub" />
                         <p>Gallery</p>
                         </div>
                    <div className='price-text'> 
                    <img src={images.sub} alt="sub" />
                    <p>1 page</p>
                    </div>
                    <div className='price-text'> 
                    <img src={images.sub} alt="sub" />
                    <p>Worldwide</p>
                        </div>
                        <div className='price-text'> 
                        <img src={images.sub} alt="sub" />
                    <p>Google Booking</p>
                    </div>
                
                 <button className="price-button"type="button">Get Plan</button>

                </div>
            </div>
            <div className='box box-two'>
            <h4>Basic</h4>
                <p><strong>$</strong>70/mo</p>
                <div className='relative'>
                    <h3><span className="main-price">$</span> 540</h3>
                    </div>
               
                <div className='price-info'>
                    <div className='price-text'> 
                    <img src={images.sub} alt="sub" />
                    <p>Contact Page</p>
                        </div>
                    <div className='price-text'>
                        <img src={images.sub} alt="sub" />
                         <p>Gallery Seprate Page</p>
                         </div>
                    <div className='price-text'> 
                    <img src={images.sub} alt="sub" />
                    <p> 3 pages</p>
                    </div>
                    <div className='price-text'> 
                    <img src={images.sub} alt="sub" />
                    <p>World Wide</p>
                        </div>
                    <div className='price-text'> 
                    <img src={images.sub} alt="sub" />
                    <p>Google Booking</p>
                    </div>
                    <button className="price-button"type="button">Get Plan</button>

                </div>
                

            </div>
            <div className='box box-three'>

            <h4>Premimum</h4>
                <p><strong>$</strong>85/mo</p>
                <div className='relative'>
                    <h3><span className='main-price'>$</span>700</h3>
                    </div>
               
                <div className='price-info'>
                    <div className='price-text'> 
                    <img src={images.sub} alt="sub" />
                    <p>Custom</p>
                        </div>
                    <div className='price-text'>
                        <img src={images.sub} alt="sub" />
                         <p>Gallery Seprate Page</p>
                         </div>
                    <div className='price-text'> 
                    <img src={images.sub} alt="sub" />
                    <p>5 pages</p>
                    </div>
                    <div className='price-text'> 
                    <img src={images.sub} alt="sub" />
                    <p>WorldWide</p>
                        </div>
                    <div className='price-text'> 
                    <img src={images.sub} alt="sub" />
                    <p>Google Booking</p>
                    </div>
                    <button className="price-button"type="button">Get Plan</button>

                </div>

            </div>
        </div>
                </div>

    )
}
export default Price;