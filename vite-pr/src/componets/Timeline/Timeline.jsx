import React from 'react'
import images from '../../assets/images';
import './timeline.css'
const Timeline = () =>{


    return (
        <div className='app--timeline' id="timeline">

            <div className='timelineone'>

                <div className='head-text'>
                    <h1>Fast and easy Process</h1>
                    <p>3 to 10 days</p>
                </div>
                <img src={images.Timeline} className="timeline"alt="timeline" />

                <div className='app-under'>
                    <div className='under-text'>
                        <h1>Design & Preparation</h1>
                        <p></p>
                    </div>

                    <div className='under-text'>
                        <h1>Stage 1 Development</h1>
                        <p></p>
                    </div>
                    <div className='under-text'>
                        <h1>Stage 2 Development</h1>
                        <p></p>
                    </div>
                    <div className='under-text'>
                        <h1>Customer Interface and Publishment</h1>
                        <p></p>
                    </div>
                </div>
            </div>
      </div>

    )
}
export default Timeline;