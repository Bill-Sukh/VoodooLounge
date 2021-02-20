import React, { Component } from 'react';
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './MenuComponent.css';

function Menu(){
    return (
        <>
            <section id="menu">
                <div className="container container-about">
                    <div className="global-header">
                        <div className="title mb-2">
                            <h1 className="global-large-title"> <span>D</span>iscover</h1>
                            <h2 className="global-middle-title mb-2">Our Menu</h2>
                        </div>
                        <div className="asterisk mb-1"><FontAwesomeIcon icon={faAsterisk}/></div>
                        <p className="global-description mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur deleniti nesciunt commodi ad porro quam nisi voluptas, saepe accusamus nemo magni dolores voluptatum,
                            alias quis voluptatibus dicta ipsum cum debitis.
                        </p>
                        <a href="#" className="global-header-btn">View the full menu</a>
                    </div>
                    <div className="menu-images">
                        <div className="menu-img"><img src="/images/menu-group-1.jpg" alt=""/></div>
                        <div className="menu-img"><img src="/images/menu-group-2.jpg" alt=""/></div>
                        <div className="menu-img"><img src="/images/menu-group-3.jpg" alt=""/></div>
                        <div className="menu-img"><img src="/images/menu-group-4.jpg" alt=""/></div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Menu;