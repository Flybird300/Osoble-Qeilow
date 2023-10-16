import React from 'react'
import './portfolio.css'
import images from '../../assets/images';
const Portfolio = ()=> {


    return (
        <div className='portfolio'>
            <div className='inside'>
                <div className='port-relative'>
            <img src={images.greenFrame} className="under" alt="" />
            <img src={images.greenPic} className="over"alt="" />
            </div>
            </div>
        </div>
    )
}
export default Portfolio;