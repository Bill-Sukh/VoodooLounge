import React, { Component } from 'react';
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './HeroComponent.css';
class Hero extends Component{
    render(){
        return (
            <>
               <section className="hero" id="hero">
                    <div className="container">
                        <div className="title-wrapper">
                            <div className="titles">
                                <h1 className="large-title">Welcome</h1>
                                <h2 className="middle-title">The Voodoo Lounge</h2>
                            </div>
                            <div className="seperator">
                                <div className="line line-left"></div>
                                <div className="asterisk fa-asterisk"><FontAwesomeIcon icon={faAsterisk} /></div>
                                <div className="line line-right"></div>
                            </div>
                            <div className="description">
                                <h6 className="bottom-title">Ready To Be Opened</h6>
                                <a href="#" className="explore-btn">Explore</a>
                            </div>
                        </div>
                    </div>
                </section>
            </>    
        );  

    }
}

export default Hero;