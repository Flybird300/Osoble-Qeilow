import React from 'react'
import './form.css'
import images from '../../assets/images'
import { Formik } from 'formik';
import {useFormik} from "formik"; 
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Form = () => {
   
    const form = useRef();
    
    
    const formik = useFormik({

        initialValues: {
            name: "",
            lastName: "",
            email: "",
            phoneNumber:"",
            message: "",
    
            
        },

        validationSchema: Yup.object({
            name: Yup.string()
            .max(20, "Name must be 20 charracters or less.")
            .required("Name is required"),
            lastName: Yup.string()
            .max(20, "Last Name must be 20 charracters or less.")
            .required("Last Name is required"),
            email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
        }),
        
    });




    return (
        <div className='main-form'>
            <div className='form-headtext'>
                <h2>Contact Us</h2>
                </div>
            <div className='parent-form'>

                <div className='side-form'>
                <h2>Free Quote</h2>
                <h4>Free Quote for your project we will be glad to give you an exact estimate of your projects cost</h4>
                </div>
                <div className='app-form'>
                    

                    <form ref={form} onSubmit={ formik}>
        <div className='name-row'>
                        <div className='inputs'>
                    <label className={`name-label ${formik.errors.name && formik.touched.name ? 'Red' : ""}`} htmlFor='name'>

                {formik.touched.name && formik.errors.name ? formik.errors.name : "Name"}
                    </label>
                    {}
                    <input
                name="name"
                type="text"
                placeholder='Enter your name'
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                    />

                    </div>
                    <div>
                    <label className={`name-label ${formik.errors.lastName && formik.touched.lastName ? 'Red' : ""}`} htmlFor='lastName'>
                    {formik.touched.lastName && formik.errors.lastName ? formik.errors.lastName : "Last Name"}  
                    </label>
                    <input
                name="lastName"
                type="text"
                placeholder='Enter your Last name'
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onblur={formik.handleBlur}

                    />
                       </div>
            </div>
                      

                   

        <div className='name-row'>

                       <div className='inputs'>
                    <label className={` name-label ${formik.errors.email && formik.touched.email ? 'Red' : ""}`}  htmlFor='email'>
                    {formik.touched.email && formik.errors.email ? formik.errors.email : "Email"}  

                    </label>
                    <input
                name="email"
                type="email"
                placeholder='Enter your Email'
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}

                    />

                    </div>
                    <div>
                    <label className='name-label' htmlFor='phone-number'>
                        Phone Number
                    </label>
                    <input
                name="phoneNumber"
                type="tel"
                placeholder='optional'
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
                    />
                       </div>                      
                       </div>


                       <div>
                    <label className='name-label' htmlFor='message
                    '>
                    Message
                    </label>
                    <textarea
                name="message"
                type="text"
                placeholder='optional'
                className=''
                value={formik.values.message}
                onChange={formik.handleChange}

                    ></textarea>
                       </div>  
                       
                       <div className='form-butt-div'>
                        <button className='info-button' type="submit">Send</button>
                        </div>


                        <div className='send-img'> 
                        <img src={images.send} alt="send"></img>

                        </div>
                    </form>
                </div> 
            </div>
        </div>
    )
}
export default Form;