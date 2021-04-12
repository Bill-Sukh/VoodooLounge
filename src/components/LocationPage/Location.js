import React, { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import './Location.css';
import {FaPlay, FaPause} from 'react-icons/fa';
import { IconContext } from "react-icons";
import {LOCATION_IMAGES} from '../shared/carousel';
import Map from './Map';

function CarouselComponent(){
    const[autoPlay, setAutoPlay] = useState(false);
    const renderItems = () => {
        let items = [];
        items = LOCATION_IMAGES.map((item) => {
            return(
                <div className="my-slides" key={item.index}>
                    <img src={item.path} alt={item.alt} />
                    <div className="details">
                        <div className="texts"> 
                            <h1 className="title">LOCATIONS</h1>
                            <p className="description">All locations are open for DINE-IN &amp; TAKE-OUT service! </p>
                        </div>   
                        <button className="play-button" onClick={() => { setAutoPlay(!autoPlay)}}>
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

        return items;
    }
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
                    renderItems()
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
                <CarouselComponent />
                <ComingSoonComponent />
                <Map/>
            </section>
        </>

    );
}

export default LocationPage;