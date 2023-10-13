import React from 'react'
import images from '../../assets/images'
import'./faq.css'
const Faqs = () => {

    const [isActive, setIsActive] = React.useState(false);
    const [isActivee, setIsActivee] = React.useState(false);
    const [isActiveee, setIsActiveee] = React.useState(false);



    const handleClick = event => {
        setIsActive(current => !current)
    }
    const handleClickk = event => {
        setIsActivee(current => !current)
    }
    const handleClickkk = event => {
        setIsActiveee(current => !current)
        
    }

    return (
        <div className='app__faq'> 
        <h2 className='title'>Frequently Asked Questions</h2>


        <div className='faq-one'>
            <div className='question' onClick={handleClick}>
                <h3 className=''>How much will my project cost?</h3>
                <img src={images.faq} alt="faq" />
            </div>
            
        <div className={isActive ? 'faq-one.active .answer text' :'answer'} >
            <p>
            It all depends on your specific needs. On average you can expect to invest $1000 - $2000 for landing pages or $1500 - $3000 for up to 5 page websites.
            </p>
        </div>
        </div>



        <div className='faq-two'>
            <div className='question' onClick={handleClickk}>
                <h3 className=''>What is javascript?</h3>
                <img src={images.faq} alt="faq" />
            </div>
            
        <div className={isActivee ? 'faq-two.active .answer text' :'answer'} >
            <p>
                blahabladhaudhadadhadhadasudhaudfufbwgbewuvneauveugeguhfofififdnfisfnpdnoanodnodnoa ifnao fowndovnw
            </p>
        </div>
       </div>


       <div className='faq-three'>
            <div className='question' onClick={handleClickkk}>
                <h3 className=''>What is javascript?</h3>
                <img src={images.faq} alt="faq" />
            </div>
            
        <div className={isActiveee ? 'faq-three.active .answer text' : 'answer'} >
            <p>
                blahabladhaudhadadhadhadasudhaudfufbwgbewuvneauveugeguhfofififdnfisfnpdnoanodnodnoa ifnao fowndovnw
            </p>
        </div>
    </div>
    


    </div>
    )
}
export default Faqs;