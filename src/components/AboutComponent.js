import React from 'react';
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function About(){
        return ( 
            <>  
                <section id="about" className="about">
                    <div className="container container-about">
                        <div className="global-header">
                            <div className="title mb-2">
                                <h1 className="global-large-title"> <span>D</span>iscover</h1>
                                <h2 className="global-middle-title mb-2">The Voodoo Lounge</h2>
                            </div>
                            <div className="asterisk fa-asterisk"><FontAwesomeIcon icon={faAsterisk} /></div>
                            <p className="global-description mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur deleniti nesciunt commodi ad porro quam nisi voluptas, saepe accusamus nemo magni dolores voluptatum,
                                alias quis voluptatibus dicta ipsum cum debitis.</p>
                            <a href="#" className="global-header-btn">About us</a>

                        </div>
                        <div className="section-img">
                            <img src="/img/aboutImg.jpg"  alt="aboutImg" />
                        </div>
                    </div>
                </section>       
            </>
        );  
}

export default About;