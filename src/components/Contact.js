import React from 'react';
import {useState} from 'react';
import './ContactPage/Form.css';
import Success from './ContactPage/Success';
import Form from './ContactPage/Form';

function Contact(){
    const [isSubmitted, SetIsSubmitted] = useState(false);
    function submitForm(){
        SetIsSubmitted(true);
    }

    return(
        <>
            {!isSubmitted ? (
            <Form submitForm={submitForm} />
            ) : (
            <Success />
            )}
            <h1>{isSubmitted}</h1>
        </>
    );
}
export default Contact;