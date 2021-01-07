import React, { Component } from 'react';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Header extends Component{
    render(){
        return (
            <>
                <header className="header">
                    <nav>
                        <a href="index.html" className="restaurant-name"> Voodoo Lounge </a>
                        <div className="menu-toggle">
                            <div classNameName="fa-times">
                                <FontAwesomeIcon icon={faBars} />
                            </div>
                        </div>
                        <ul>
                            <li><a href="">About</a></li>
                            <li><a href="">Location</a></li>
                            <li><a href="">Menu</a></li>
                            <li><a href="">Group Dining</a></li>
                            <li><a href="">Order online</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                    </nav>
                </header>
            </>    
        );  

    }
}

export default Header;