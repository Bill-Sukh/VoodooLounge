import React from 'react';
import './About.css';
import './HomePage/HeroComponent.css';

function AboutPage(){
    return(
        <>
                <div className="hero about-hero" id="hero">
                    <div className="container">
                        <h2 className="middle-title about-title">About us</h2>
                    </div>
                </div>
                <div className="about-us-story mb-8">
                        <h1 className="middle-title story-title mb-2">The Voodoo Lounge</h1>
                        <h2 className="story-title small mb-2">To Our Guests</h2>  
                        <p className="global-description mb-2 story-paragraph">
                            The Voodoo Lounge restaurants would like to thank all of 
                            our Guests for their incredible support during
                            this public health crisis. Our Curbside Takeout 
                            and Home Delivery (DoorDash) has helped us not only
                            continue servicing our communities, but has also afforded us an opportunity to save some jobs.
                        </p>
                        <p className="global-description mb-2 story-paragraph">
                            We at Tavern continue to exercise great caution when producing
                            product and servicing our Guests. All sanitation and safety 
                            practices are elevated during this time, and our Guests are
                            assured continued safe products from a brand they trust.
                        </p>
                        <p className="global-description mb-2 story-paragraph">
                            That said, we ask for your patience during high volume periods, as it's more than just preparing the
                            ordered product, it also takes a little more time to comply with our
                            stringent internal standards and systems during this time.
                        </p>
                        <p className="global-description mb-5 story-paragraph">
                            We have looked forward to our eventual reopening for dine-in service,
                            and visiting with all of our regulars that we dearly miss. 
                            Again, thank you for all of your support. We look forward to 
                            fulfilling your Dine-In, Curbside Takeout, and Home Delivery needs.
                        </p> 

                        <h2 className="story-title small mb-2">Stay In the Know</h2>
                        <p className="global-description mb-2 story-paragraph">We will continue to update our guests through 
                        email and our website as we navigate through this together.</p>
                        <p className="global-description story-paragraph updated-date">Updated 5/18/20</p>
                </div>
        </>
    );
}

export default AboutPage;