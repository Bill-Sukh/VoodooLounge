import React from 'react';
import {useState} from 'react';
import './ContactPage/Form.css';
import Success from './ContactPage/Success';
import Form from './ContactPage/Form';

function Contact(){
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm(){
        setIsSubmitted(true);
    }

    return(
        <>
            {!isSubmitted ? (
            <Form submitForm={submitForm} />
            ) : (
            <Success />
            )}
        </>
    );
}

export default Contact;