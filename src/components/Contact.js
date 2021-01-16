import React from 'react';
import './Contact.css';
function ContactPage(){
    return(
        <>
        <div className="container contact-form-container mb-8">  
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
            <form className="contact-form" action="" method="post">
                <fieldset>
                    <input placeholder="Your name" type="text" required />
                </fieldset>
                <fieldset>
                    <input placeholder="Your Email Address" type="email" required/>
                </fieldset>
                <fieldset>
                    <input placeholder="Your Phone Number (optional)"   required/>
                </fieldset>
                <fieldset>
                    <select name="concern" id="concern">
                        <option value="" selected>What are you getting in touch about?</option>
                        <option value="General">General inquiry</option>
                        <option value="saab">Press Inquiry</option>
                        <option value="mercedes">Marketing Inquiry</option>
                        <option value="audi">Donation Request</option>
                    </select>
                </fieldset>
                <fieldset>
                    <textarea placeholder="Type your message here...." rows="7" required></textarea>
                </fieldset>
                <fieldset>
                    <button className="contact-submit btn" name="submit" type="submit" id="contact-submit">Submit</button>
                </fieldset>
            </form>
        </div>
        </>
    );
}

export default ContactPage;