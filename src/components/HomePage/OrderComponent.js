import React, { Component } from 'react';
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Order(){
    return(
        <>
            <section id="order_online" className="order-online">
                <div className="container mb-2 container-about">
                    <div className="global-header">
                        <div className="title mb-2">
                            <h1 className="global-large-title"> <span>L</span>ounge</h1>
                            <h2 className="global-middle-title mb-2">at home</h2>
                        </div>
                        <div className="asterisk mb-1"><FontAwesomeIcon icon={faAsterisk}/></div>
                        <p className="global-description mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur deleniti nesciunt commodi ad porro quam nisi voluptas, saepe accusamus nemo magni dolores voluptatum,
                            alias quis voluptatibus dicta ipsum cum debitis.</p>
                        <a href="#" className="global-header-btn">start your order</a>
                    </div>
                    <div className="section-img">
                        <img src="/images/order.jpg" alt="" />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Order;