import React, { useState } from 'react';
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';

function Header(){
    const[click, setClick] = useState(false);
    const handleClick = () => setClick(!click); 

    return (
        <>
            <header className="header-section">
                <nav>
                    <div >
                        <Link to="/Home" className="restaurant-name"> Voodoo Lounge </Link>
                    </div>
                    <div className="menu-toggle" onClick={handleClick}>
                        <i className="hamburger-menu"><FontAwesomeIcon icon={click ? faTimes : faBars} /></i>
                    </div>
                    <div>
                        <ul className={click ? 'menu open' : 'menu'}>
                            <li onClick={handleClick}><Link to="/About">About</Link></li>
                            <li onClick={handleClick}><Link to="/Location">Location</Link></li>
                            <li onClick={handleClick}><Link to="/Menu">Menu</Link></li>
                            <li onClick={handleClick}><Link to="/Group">Group Dining</Link></li>
                            <li onClick={handleClick}><Link to="/Order">Order online</Link></li>
                            <li onClick={handleClick}><Link to="/Contact">Contact</Link></li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>    
    );  
}

export default Header;