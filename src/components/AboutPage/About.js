import React from 'react';
import Fade from 'react-reveal/Fade';
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './About.css';

function AboutPage(){
    return(
        <section className="about-page-container">
                <Fade clear duration={1000}> 
                    <div className="main-hero-container">
                        <div className="hero-title-container mb-2">
                            <h1 className="hero-title">About us</h1>
                        </div>
                    </div>
                </Fade>
                <Fade clear duration={1000}> 
                    <div className="about-us-story mb-8">
                            <h1 className="middle-title story-title">The Voodoo Lounge</h1>
                            <h2 className="small mb-1">To Our Guests</h2> 
                            <div className="asterisk mb-1"><FontAwesomeIcon icon={faAsterisk}/></div>
                            <p className="global-description mb-2 story-paragraph">
                            &nbsp;&nbsp;The idea for an upscale casual full-service dining experience with a fully customizable menu was born 10 years ago this year! Our first location Tavern on France on France Ave in Edina, MN, opened in 2009. Soon after, the first "Tavern Grill" in Blaine, MN opened, changing up the name but keeping the beloved food & service. Our doors then opened in Woodbury, MN, Arden Hills, MN, Fargo, ND, Apple Valley, MN, and soon in Minnetonka, MN, and Bismarck, ND.
                            </p>
                            <p className="global-description mb-2 story-paragraph">
                                The love of great food that fills you up and service that goes the extra step is what runs thick through our bloodstreams. Our menu includes an impressive selection of appetizers, salads, pasta, sandwiches, flatbread pizzas, seafood, steak, and of course, dessert. We also feature our very own concept of build-your-own burgers, salads, and pizzas – with thousands of combinations!
                            </p>
                            <p className="global-description mb-2 story-paragraph" style={{fontStyle:"italic"}}>
                                There is something for everyone at VoodooLounge.
                            </p>
                            <h2 className="small mb-1">Stay in the Now</h2>
                            <div className="asterisk mb-1"><FontAwesomeIcon icon={faAsterisk}/></div>
                            <p className="global-description mb-2 story-paragraph">We will continue to update our guests through 
                            email and our website as we navigate through this together.</p>
                            <p className="global-description story-paragraph updated-date">Updated 5/18/20</p>
                    </div>
                </Fade>
            

                <div className="picture-story-container">
                    <div className="picture-story">
                         <Fade left duration={1000}> 
                            <div className="story-img">
                                <img src="images/aboutImg.jpg" alt="story-picture-1"/>
                            </div>      
                         </Fade>
                         <Fade right duration={1000}>
                            <div className="learn-more">
                                <div className="cheers">
                                    <h2 className="learn-more-header">WHY BUILD YOUR OWN</h2>
                                    <p className="learn-more-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, possimus tenetur deleniti officia explicabo quia perferendis obcaecati molestiae tempore excepturi 
                                        assumenda rem. Error, quisquam reiciendis
                                        laudantium expedita saepe ducimus voluptates!
                                    </p>
                                    <div className="btn-container">
                                        <a href="#" className="btn inquire-btn">View build your own menu</a>   
                                    </div>
                                    
                                </div>
                            </div>         
                         </Fade>         
                    </div>
                </div>

                <div className="picture-story-container our-way">
                    <div className="picture-story">
                        <Fade right duration={1000}>
                            <div className="story-img">
                                <img src="/images/about/about-1.jpg" alt="story-picture-2"/> 
                            </div>
                        </Fade>  
                        <Fade left duration={1000}>
                            <div className="learn-more">
                                <div className="cheers">
                                    <div>
                                        <h2 className="learn-more-header">OUR WAY</h2>
                                        <p className="learn-more-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, possimus tenetur deleniti officia explicabo quia perferendis obcaecati molestiae tempore excepturi 
                                            assumenda rem. Error, quisquam reiciendis
                                            laudantium expedita saepe ducimus voluptates!
                                        </p>
                                    </div>
                        
                                </div>
                            </div>         
                        </Fade>
                    </div>
                </div>
        </section>
    );
}

export default AboutPage;