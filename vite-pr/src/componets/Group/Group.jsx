import React from 'react'
import './group.css'
import images from '../../assets/images'
const Group = () => {

    return (
        <div className='group' id="service">
        <div className='group-head'>
            <h1>
                All-in-one package
            </h1>
            <p> With my complete website solution i’ll take care of everything </p>
        </div>


        <div className='box-group'>

    
            <div className="boxs" >
                <div className='box-box'>
                <img src={images.respo} alt="respo" />
                <h1>Responsiveness</h1>
                </div>
                <p> make clean modern engaging designs that attract attention and make conversions</p>
            </div>
            <div className="boxs" >
            <div className='box-box'>
            <img src={images.seo} alt="seo" />
            <h1>Responsiveness</h1>
            </div>
                <p> I make clean modern engaging designs that attract attention and make conversions.</p>
            </div>
     

          
                <div className="boxs" >
                <div className='box-box'>
                <img src={images.maint} alt="maint" />
                    <h1>Responsiveness</h1>
                    </div>
                    <p> I make clean modern engaging designs that attract attention and make conversions.</p>
                </div>
                <div className="boxs" >
                <div className='box-box'>
                <img src={images.deve} alt="deve" />
                <h1>Responsiveness</h1>
                </div>
                    <p> I make clean modern engaging designs that attract attention and make conversions.</p>
                </div>
      
        
            <div className="boxs" >
            <div className='box-box'>
            <img src={images.design} alt="design" />
            <h1>Responsiveness</h1>
            </div>
                <p> make clean modern engaging designs that attract attention and make conversions</p>
            </div>
            <div className="boxs" >
            <div className='box-box'>
            <img src={images.cust} alt="cust" />
            <h1>Responsiveness</h1>
            </div>
                <p> make clean modern engaging designs that attract attention and make conversions</p>
            </div>
            </div>

        </div>
    )
}
export default Group;