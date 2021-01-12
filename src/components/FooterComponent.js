import React from 'react';
import { faAsterisk, faChevronUp, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconContext } from "react-icons";
import { Link } from 'react-router-dom';
import {FaTwitter, FaFacebookSquare, FaPinterest, FaLinkedinIn, FaTripadvisor} from 'react-icons/fa';
import './FooterComponent.css';

function Footer(){
    return(
        <>
            <footer>
                <div className="container">
                    <div className="back-to-top">
                        <a href="#hero" className="up-button"><FontAwesomeIcon icon={faChevronUp}/></a>
                    </div>
                    <div className="footer-content">
                        <div className="global-header">
                            <div className="title mb-2">
                                <h2 className="footer-title global-middle-title">About us</h2>
                            </div>
                            <div className="asterisk"><FontAwesomeIcon icon={faAsterisk}/></div>
                            <p className="global-description mb-2">Lorem ipsum dolor sit 
                                amet consectetur adipisicing elit. Consectetur
                                deleniti nesciunt commodi ad porro quam nisi voluptas, 
                                saepe accusamus nemo magni dolores voluptatum,
                                alias quis voluptatibus dicta ipsum cum debitis.
                            </p>
                        </div>
                        <div className="footer-content-divider animate-bottom">
                            <div className="social-menu">
                                <h4>Follow along</h4>
                                <ul className="social-icons">
                                    <li className="icon-list-item">
                                        <Link to="/">
                                            <IconContext.Provider value={{className: "icon"}}>
                                                <FaTwitter></FaTwitter>
                                            </IconContext.Provider>    
                                        </Link>
                                    </li>
                                    <li className="icon-list-item">
                                        <IconContext.Provider value={{className: "icon"}}>
                                            <Link to="/"><FaFacebookSquare></FaFacebookSquare></Link>
                                        </IconContext.Provider>                                         
                                    </li>
                                    <li className="icon-list-item">
                                        <IconContext.Provider value={{className: "icon"}}>
                                            <Link to="/"><FaPinterest></FaPinterest></Link>
                                        </IconContext.Provider>                                           
                                    </li>
                                    <li className="icon-list-item">
                                        <IconContext.Provider value={{className: "icon"}}>
                                          <Link to="/"><FaLinkedinIn></FaLinkedinIn></Link>
                                        </IconContext.Provider>        
                                    </li>
                                    <li className="icon-list-item">
                                        <IconContext.Provider value={{className: "icon"}}>
                                            <Link to="/"><FaTripadvisor></FaTripadvisor></Link>
                                        </IconContext.Provider>        
                                    </li>
                                </ul>
                            </div>
                            <div className="newslettter-container">
                                <h4>Newsletter</h4>
                                <form action="" className="newsletter-form">
                                    <input type="text" className="newsletter-input" placeholder="Your email address..."/>
                                    <button className="newsletter-btn" type="submit">
                                        <FontAwesomeIcon icon={faEnvelope}/>
                                    </button>
                                </form>
                            </div>     
                        </div>
                    </div>
                    <div className="copyright">
                                <p> Powered by Bill-Sukh </p>
                    </div> 
                </div> 
            </footer>
        </>
    );
}

export default Footer;