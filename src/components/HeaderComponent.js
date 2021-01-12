import React, { Component, useState } from 'react';
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import './HeaderComponent.css';
function Header(){
    const[click, setClick] = useState(false);
    const handleClick = () => setClick(!click); 
        return (
            <>
                <header className="header">
                    <nav>
                        <a href="index.html" className="restaurant-name"> Voodoo Lounge </a>
                        <div className="menu-toggle" onClick={handleClick}>
                            <i className="hamburger-menu"><FontAwesomeIcon icon={click ? faTimes : faBars} /></i>
                        </div>
                        <ul className={click ? 'menu open' : 'menu'}>
                            <li><Link to="/">About</Link></li>
                            <li><Link to="/">Location</Link></li>
                            <li><Link to="/">Menu</Link></li>
                            <li><Link to="/">Group Dining</Link></li>
                            <li><Link to="/">Order online</Link></li>
                            <li><Link to="/">Contact</Link></li>
                        </ul>
                    </nav>
                </header>
            </>    
        );  
}

export default Header;