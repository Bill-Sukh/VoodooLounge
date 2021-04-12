import React from 'react';
import {useState} from 'react';
import { faCheck} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Form from './Form';
import './Contact.css';

function Modal({isSubmitted, submitForm, submittedUser}){ 
    return( 
        <div className="modal-overlay" style={isSubmitted ? {opacity: "100", zIndex: "2500"} : {opacity: "0", zIndex: "-20"}}>
            <div className="modal-body">
                <div className="modal" >
                    <div className="circle">
                        <i><FontAwesomeIcon icon={faCheck}/></i>    
                    </div>
                    <h1 >Awesome!</h1>
                    <p className="m-0">Hello <span className="submitted-user">{submittedUser}</span>, We have received your feedback. We will respond in few days!      
                    </p>
                    <p className="m-1">Thank you!</p>
                    <button onClick={() => submitForm(false)} className="m-1">OK</button>
                </div>
            </div>
        </div>

    )
}

function Contact(){
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submittedUser, setSubmittedUser] = useState(null);

    function submitForm(command){
        setIsSubmitted(command);
    }

    function getSubmittedUser(username){
        setSubmittedUser(username);
    }

    return(
        <div className="contact-page-container">  
            {!isSubmitted ? 
                (<Form submitForm={submitForm} getSubmittedUser={getSubmittedUser} />) : 
                (<div>
                    <Modal isSubmitted={isSubmitted} submitForm={submitForm} submittedUser={submittedUser}/>
                    <Form />
                </div>)
            }
        </div>
    );
}

export default Contact;