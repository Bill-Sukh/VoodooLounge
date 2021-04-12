import React from 'react';

function Location (){
        return (
            <>
               <section id="location">
                    <div className="location-section" >
                        <div className="container">
                            <div className="panel">
                                <h1 className="panel-title">Hours and Location</h1>
                                <div className="location-part panel-item">
                                    <h2 className="panel-item-header">Location</h2>
                                    <ul className="panel-item-list">
                                        <li>15435 Archmage Ln, </li>
                                        <li>Mystics Valley, Minnesota 55124</li>
                                        <li>(952) 683-1222</li>
                                        <li>MysticsValley@voodoolounge.com</li>
                                    </ul>   
                                </div>
                                <div className="hours-part">
                                    <h2 className="panel-item-header">Hours</h2>
                                    <ul className="panel-item-list">
                                        <li>Christmas Eve: 11 AM - 4 PM</li>
                                        <li>Christmas Day: Closed</li>
                                        <li>Monday - Saturday: 11 AM - 9 PM</li>
                                        <li>Sunday 11 AM - 8 PM</li>
                                    </ul>                 
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>    
        );  
}

export default Location;