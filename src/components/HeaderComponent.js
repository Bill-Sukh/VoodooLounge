import React, { useState } from 'react';
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
                    <div >
                        <Link to="/Home" className="restaurant-name"> Voodoo Lounge </Link>
                    </div>
                    <div className="menu-toggle" onClick={handleClick}>
                        <i className="hamburger-menu"><FontAwesomeIcon icon={click ? faTimes : faBars} /></i>
                    </div>
                    <div>
                        <ul className={click ? 'menu open' : 'menu'}>
                            <li ><Link to="/About">About</Link></li>
                            <li><Link to="/Location">Location</Link></li>
                            <li><Link to="/Menu">Menu</Link></li>
                            <li><Link to="/Group">Group Dining</Link></li>
                            <li><Link to="/Order">Order online</Link></li>
                            <li><Link to="/Contact">Contact</Link></li>
                        </ul>
                    </div>

                </nav>
            </header>
        </>    
    );  
}

export default Header;