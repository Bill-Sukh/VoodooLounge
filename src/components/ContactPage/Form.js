import React from 'react';
import validateForm from './validateForm';
import FormSignUp from './FormSignUp';

const Form = ({ submitForm, getSubmittedUser }) => {
    const { handleChange, handleSubmit, values, errors } = FormSignUp(
      getSubmittedUser,
      submitForm,
      validateForm
    );
    
    return(
        <>
            <div className="contact-form-container mb-8">  
                <div className="form-title mb-5">               
                    <h1 className="middle-title story-title mb-5">Contact Us</h1>
                    <h6 className="contact-title small mb-2">Please note: </h6> 
                    <p className="global-description mb-2 story-paragraph">If you have feedback or concerns regarding your recent
                        visit please refer to our feedback form here.</p>
                    <p className="global-description mb-2 story-paragraph">
                        Reservations, of any kind, cannot be placed via this contact form. Please use our online 
                        waitlist or give your preferred location a call.
                    </p>
                </div>
                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                    <fieldset>
                        <input 
                            id = "name"
                            name = "name"
                            type = "text"
                            placeholder="Your name"
                            value = {values.name}
                            onChange={handleChange}
                        />
                        <div className="error-message">
                            {errors.name && <p>{errors.name}</p>}   
                        </div>
                    </fieldset>
                    <fieldset>
                        <input 
                            id = "email"
                            name = "email"
                            type="email"
                            placeholder="Your Email Address"
                            value = {values.email}
                            onChange={handleChange}
                        />
                        <div className="error-message">
                            {errors.email && <p>{errors.email}</p>}   
                        </div>
                    </fieldset>
                    <fieldset>
                        <input 
                            id = "phonenumber"
                            name = "phonenumber"
                            type="text"
                            placeholder="Your Phone Number"   
                            value = {values.phonenumber}
                            onChange={handleChange}
                        />
                        <div className="error-message">
                            {errors.phonenumber && <p>{errors.phonenumber}</p>}   
                        </div>
                    </fieldset>
                    <fieldset>
                        <select id = "inquiry" name="inquiry" >
                            <option value="default" defaultValue>What are you getting in touch about?</option>
                            <option value="General">General inquiry</option>
                            <option value="Press">Press Inquiry</option>
                            <option value="Marketing">Marketing Inquiry</option>
                            <option value="Donation">Donation Request</option>
                        </select>
                    </fieldset>
                    <fieldset>
                        <textarea id="feedback" name="feedback" placeholder="Type your message here...." rows="7" 
                            value = {values.feedback}
                            onChange={handleChange}>
                        </textarea>
                        <div className="error-message">
                            {errors.feedback && <p>{errors.feedback}</p>}   
                        </div>
                    </fieldset>
                    <fieldset>
                        <button className="contact-submit btn mx-auto" name="submit" type="submit" id="contact-submit">Submit</button>
                    </fieldset>
                </form>
            </div>
        </>
    );
}

export default Form;