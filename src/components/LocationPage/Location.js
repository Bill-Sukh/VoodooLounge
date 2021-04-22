import React, { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import {FaPlay, FaPause} from 'react-icons/fa';
import { IconContext } from "react-icons";
import {LOCATION_IMAGES} from '../shared/carousel';
import Fade from 'react-reveal/Fade';
import './Location.css';

function LocationsComponent() {
    return (
        <div className="locations-container">
            <div className="side">
                    <div className="location-search">
                            <label>Enter zip code, city, or full address</label>
                            <input type="text" name="name" placeholder="Enter a location"/>
                            <button className="btn location-btn" type="submit" > Search</button>
                    </div>
                    <div className="location">
                        <p className="location-state">Minnetonka, MN</p>
                        <p className="location-address">12653 Wayzata Blvd, Minnetonka, Minnesota 55305</p>
                        <p className="phone-number">(555) 555-5555</p>
                        <div className="hours-container">
                            <p className="title">Hours of Operation</p>
                            <ul className="hours">
                                <li><span className="underscore">Monday - Thursday:</span> 11 AM - 9 PM</li>
                                <li><span className="underscore">Friday & Saturday:</span> 11 AM - 10 PM</li>
                                <li><span className="underscore">Sunday 10 AM - 8 PM</span></li>
                                <li><span className="underscore">Sunday Brunch* </span>10 AM - 2 PM</li>
                            </ul>
                        </div>
                        <p className="menu-availability">
                            Full Menu is available starting at 11 AM, every day.
                        </p>
                        <button className="btn location-btn">
                            View on map
                        </button>
                        <button className="btn location-btn">
                            Location details
                        </button>
                    </div>
                    <div className="location">
                        <p className="location-state">Minnetonka, MN</p>
                        <p className="location-address">12653 Wayzata Blvd, Minnetonka, Minnesota 55305</p>
                        <p className="phone-number">(555) 555-5555</p>
                        <div className="hours-container">
                            <p className="title">Hours of Operation</p>
                            <ul className="hours">
                                <li><span className="underscore">Monday - Thursday:</span> 11 AM - 9 PM</li>
                                <li><span className="underscore">Friday & Saturday:</span> 11 AM - 10 PM</li>
                                <li><span className="underscore">Sunday 10 AM - 8 PM</span></li>
                                <li><span className="underscore">Sunday Brunch* </span>10 AM - 2 PM</li>
                            </ul>
                        </div>
                        <p className="menu-availability">
                            Full Menu is available starting at 11 AM, every day.
                        </p>
                        <button className="btn location-btn">
                            View on map
                        </button>
                        <button className="btn location-btn">
                            Location details
                        </button>
                    </div>
                    <div className="location">
                        <p className="location-state">Minnetonka, MN</p>
                        <p className="location-address">12653 Wayzata Blvd, Minnetonka, Minnesota 55305</p>
                        <p className="phone-number">(555) 555-5555</p>
                        <div className="hours-container">
                            <p className="title">Hours of Operation</p>
                            <ul className="hours">
                                <li><span className="underscore">Monday - Thursday:</span> 11 AM - 9 PM</li>
                                <li><span className="underscore">Friday & Saturday:</span> 11 AM - 10 PM</li>
                                <li><span className="underscore">Sunday 10 AM - 8 PM</span></li>
                                <li><span className="underscore">Sunday Brunch* </span>10 AM - 2 PM</li>
                            </ul>
                        </div>
                        <p className="menu-availability">
                            Full Menu is available starting at 11 AM, every day.
                        </p>
                        <button className="btn location-btn">
                            View on map
                        </button>
                        <button className="btn location-btn">
                            Location details
                        </button>
                    </div>
                    <div className="location">
                        <p className="location-state">Minnetonka, MN</p>
                        <p className="location-address">12653 Wayzata Blvd, Minnetonka, Minnesota 55305</p>
                        <p className="phone-number">(555) 555-5555</p>
                        <div className="hours-container">
                            <p className="title">Hours of Operation</p>
                            <ul className="hours">
                                <li><span className="underscore">Monday - Thursday:</span> 11 AM - 9 PM</li>
                                <li><span className="underscore">Friday & Saturday:</span> 11 AM - 10 PM</li>
                                <li><span className="underscore">Sunday 10 AM - 8 PM</span></li>
                                <li><span className="underscore">Sunday Brunch* </span>10 AM - 2 PM</li>
                            </ul>
                        </div>
                        <p className="menu-availability">
                            Full Menu is available starting at 11 AM, every day.
                        </p>
                        <button className="btn location-btn">
                            View on map
                        </button>
                        <button className="btn location-btn">
                            Location details
                        </button>
                    </div>
            </div>
            <div className="map-image-container">
                <img src="images/locations/minnetonka.png"/>
            </div>
        </div>
    )
}

function LocationCarousel(){
    const[autoPlay, setAutoPlay] = useState(false);
    return(
        <>
            <Carousel 
                showThumbs={false}
                showStatus={false}
                dynamicHeight={true}
                autoPlay={autoPlay} 
                infiniteLoop={true}
                interval={2500}
            >
                {
                    LOCATION_IMAGES.map((item, index) => {
                        return( 
                            <div className="my-slides" key={index}>
                                <img src={item.path} alt={item.alt}/>
                                <div className="details">
                                    <div className="texts"> 
                                        <h1 className="title">LOCATIONS</h1>
                                        <p className="description">All locations are open for DINE-IN &amp; TAKE-OUT service! </p>
                                    </div>   
                                    <button className="play-button" onClick={() => { setAutoPlay(!autoPlay)}} key={item.index}>
                                        {autoPlay ?   
                                            <IconContext.Provider value={{ className: "play-icon", size: "3rem"}} >
                                                <FaPause></FaPause>
                                            </IconContext.Provider> : 
                                            <IconContext.Provider value={{ className: "play-icon", size: "3rem"}} >    
                                                <FaPlay></FaPlay>
                                            </IconContext.Provider>
                                        }
                                    </button>
                                </div>
                            </div>
                        );
                    })
                }  
            </Carousel>
        </>
    );
}

function ComingSoonComponent(){
    return(
        <div className="coming-soon">
            <h1 className="header">Coming soon!</h1>
            <div className="coming-soon-locations">
                <p className="location">
                    <span>Minnetonka, MN <br/></span>
                        Fall 2021
                </p>
                <p className="location">
                    <span>Portland, Maine<br/></span>
                        Fall 2021
                </p>

            </div>
        </div>
    );
}

function LocationPage(){
    return(
        <>
            <section className="location-page-container">
                <Fade clear>
                 <LocationCarousel />
                </Fade>
                <ComingSoonComponent />
                <LocationsComponent />
            </section>
        </>

    );
}

export default LocationPage;