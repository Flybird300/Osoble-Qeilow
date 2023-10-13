import React from 'react'
import images from '../../assets/images';
import './timeline.css'
const Timeline = () =>{


    return (
        <div className='app--timeline'>

            <div className='timelineone'>

                <div className='head-text'>
                    <h1>Fast and easy process</h1>
                    <p>This is how we will build you a responsive website. </p>
                </div>
                <img src={images.Timeline} className="timeline"alt="timeline" />

                <div className='app-under'>
                    <div className='under-text'>
                        <h1>Day 7-17</h1>
                        <p>Possible to take trips on new engineering architecture</p>
                    </div>

                    <div className='under-text'>
                        <h1>Day 7-17</h1>
                        <p>Possible to take trips on new engineering architecture</p>
                    </div>
                    <div className='under-text'>
                        <h1>Day 17-20</h1>
                        <p>Possible to take trips on new engineering architecture</p>
                    </div>
                    <div className='under-text'>
                        <h1>Next steps..</h1>
                        <p>Possible to take trips on new engineering architecture</p>
                    </div>
                </div>
            </div>
            <div className='index'>
        <img src={images.poly} className="polyy"alt='el' />
        <img src={images.elip} className="eclipp"alt='el' />
        </div>
        <div className='app--timelinetwodiv'>
            <div className='app--timelinetow'> 

            <div className='head-text-two'>
            <h1>Fast and easy process</h1>
             <p>This is how we will build you a responsive website. </p>            </div>
           
            <div className='one'>
            <h1>Day 7-17</h1>
                        <p>Possible to take trips on new engineering architecture</p>
            </div>

            <div className='one'>
                <h1>Day 7-17</h1>
                <p>Possible to take trips on new engineering architecture</p>
            </div>

            <div className='one'>
            <h1>Day 7-17</h1>
            <p>Possible to take trips on new engineering architecture</p>
            </div>

            <div className='one'>
            <h1>Day 7-17</h1>
            <p>Possible to take trips on new engineering architecture</p>
            </div>


            </div>
            </div>
        </div>

    )
}
export default Timeline;