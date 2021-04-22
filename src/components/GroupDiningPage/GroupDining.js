import React from 'react';
import Fade from 'react-reveal/Fade';
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import backgroundOne from '../../img/LargeGroup/location-1.jpg';
import backgroundTwo from '../../img/LargeGroup/location-2.jpg';
import backgroundThree from '../../img/LargeGroup/location-3.jpg';
import backgroundFour from '../../img/LargeGroup/location-4.jpg';
import backgroundFive from '../../img/LargeGroup/location-5.jpg';
import backgroundSix from '../../img/LargeGroup/location-6.jpg';
import './GroupDining.css';

function GroupDiningHero(){
    return(
        <Fade clear duration={1000}> 
            <div className="main-hero-container">
                <div className="title-description-container hero-title-container mb-2">
                    <div>
                        <h1 className="hero-title">Large group dining</h1>
                        <p className="description">Learn more about booking your rehearsal dinner, company event, shower, & more with us! </p>
                    </div>
                </div>
            </div>
        </Fade>
    );
}

function GroupDiningLocations(){
    return(
        <>
            <div className="locations-container">
                <ul className="group-dining-locations">
                    <li className="location">
                        <div className="location-img-container"> 
                            <div className="location-img" style={{backgroundImage: `url(${backgroundOne})`}}></div>               
                        </div>
                        <div className="location-details">
                            <h1 className="location-heading">Mapple Valley, MN</h1>
                            <h2>Private dining room</h2>
                            <p>Our Apple Valley, MN location has a breathtaking private dining room space. Perfect for large group gatherings, rehearsal dinners, corporate dinners, and more. A bright, rustic feel with large windows looking out to the patio, a large barn door closes for privacy and a fireplace stands on the south side of the room. </p>
                            <h2>VALLEY ROOM (BANQUET ROOM)</h2>
                            <p>Additionally, this location offers a fully private banquet room. Accompanied by a private bar, terrace, and fireplace this space is ideal for larger group events such as company gatherings, presentations, rehearsal dinners, and beyond! This space is catered and booked through our parent company, <span className="bold-underline">Hemisphere Restaurants.</span> Please contact <span className="bold">Rajiv Kureshi</span> <span className="bold-underline">raj@vlounge.com</span> for booking and food and beverage minimums for our Valley Room. </p>
                            <p><span className="bold"> Capacity: </span> Contact for Details</p>
                        </div>
                    </li>
                    <li className="location">
                        <div className="location-img-container"> 
                            <div className="location-img" style={{backgroundImage: `url(${backgroundTwo})`}}></div>               
                        </div>
                        <div className="location-details">
                            <h1 className="location-heading">Wayne, MN</h1>
                            <h2>LARGE GROUP DINING / PRIVATE DINING ROOM</h2>
                            <p>Our Blaine location offers a private dining room with closable curtains. Great for private work events, rehearsal dinners, social gatherings, birthday parties, baby showers, and more. </p>
                            <p>Complimentary features: Black or white linens, use of TV, projection screen, gift & check-in table. </p>
                            <p>Available for brunch, lunch, happy hour, and/or dinner services. Buffet, plated, full or limited menu, or combination.</p>
                            <p>Minimums are available upon request. </p>
                            <p><span className="bold">Capacity:</span> Maximum of 50</p>
                        </div>
                    </li>
                    <li className="location">
                        <div className="location-img-container"> 
                            <div className="location-img" style={{backgroundImage: `url(${backgroundThree})`}}></div>               
                        </div>
                        <div className="location-details">
                            <h1 className="location-heading">Melinda, MN</h1>
                            <h2>LARGE GROUP DINING / SEPARATE DINING ROOM</h2>
                            <p>Complimentary features:
                                Black or white linens, use of TV, projection screen, gift & check-in table.</p>
                            <p>Available for brunch, lunch, happy hour, and/or dinner services. Buffet, plated, full or limited menu, or combination. </p>
                            <p>Minimums are available upon request.</p>
                            <p><span className="bold">Capacity:</span> Maximum of 50</p>
                        </div>
                    </li>
                    <li className="location">
                        <div className="location-img-container"> 
                            <div className="location-img" style={{backgroundImage: `url(${backgroundFour})`}}></div>               
                        </div>
                        <div className="location-details">
                            <h1 className="location-heading">Morgan Hills, CA</h1>
                            <h2>LARGE GROUP DINING</h2>
                            <p>Our Arden Hills location can accommodate large group dining with ease. Ideal for business dinners, rehearsal dinners, informal social gatherings, birthday dinners, and more. </p>
                            <p>Available for brunch, lunch, happy hour, and/or dinner services. Buffet, plated, full or limited menu, or combination.</p>
                            <p><span className="bold">Capacity:</span> Maximum of 50</p>
                        </div>
                    </li>
                    <li className="location">
                        <div className="location-img-container"> 
                            <div className="location-img" style={{backgroundImage: `url(${backgroundFive})`}}></div>               
                        </div>
                        <div className="location-details">
                            <h1 className="location-heading">Moonberry, MN</h1>
                            <h2>LARGE GROUP DINING</h2>
                            <p>Our Woodbury location can accommodate large group dining with ease. Ideal for business dinners, rehearsal dinners, informal social gatherings, birthday dinners, and more. </p>
                            <p>Available for brunch, lunch, happy hour, and/or dinner services. Buffet, plated, full or limited menu, or combination.</p>
                            <p><span className="bold">Capacity:</span> Contact for Details</p>
                        </div>
                    </li>
                    <li className="location">
                        <div className="location-img-container"> 
                            <div className="location-img" style={{backgroundImage: `url(${backgroundSix})`}}></div>               
                        </div>
                        <div className="location-details">
                            <h1 className="location-heading">Cargo, ND</h1>
                            <h2>LARGE GROUP DINING</h2>
                            <p>Our Fargo, ND location can accommodate large group dining with ease. Ideal for business dinners, rehearsal dinners, informal social gatherings, birthday dinners, and more. </p>
                            <p>Available for brunch, lunch, happy hour, and/or dinner services. Buffet, plated, full or limited menu, or combination.</p>
                            <p>An additional option is our Tavern Grotto space right next door. Please contact our Fargo location for more details by filling out the form or calling</p>
                            <p><span className="bold">Capacity: </span>Maximum of 50 / Grotto Contact for Details</p>
                        </div>
                    </li>
                </ul>
              
            </div>
            <button className="btn inquire-btn mx-auto">Inquire now</button>
        </>
        
    );
}

function GroupDiningMiddle(){
    return(
        <Fade clear duration={1000}> 
            <div className="group-dining-middle"> 
                <h1 className="middle-title story-title">The Voodoo Lounge</h1>
                <h2 className="small mb-1">Cheers!</h2> 
                <div className="asterisk mb-1"><FontAwesomeIcon icon={faAsterisk}/></div>
                <p className="global-description mb-2 story-paragraph">
                    We'd love to be a part of your next special large group gathering! 
                </p>
                <p className="global-description mb-2 story-paragraph">
                    View each of our locations below to decide which location will work best for your special occasion. 
                </p>
                <p className="global-description story-paragraph">
                    <span className="bold">Please note:</span> This form is reserved for <span className="bold">large groups (20+ persons)</span> that have special dining requests, such as a limited menu, buffet or semi-private space (where applicable). See locations contact info here.
                </p>
                <button className="btn inquire-btn">Inquire now</button>
            </div>
        </Fade>
    );
}

function GroupDiningPage(){
    return(
        <>
            <section className="group-dining-container">
                <GroupDiningHero/>
                <GroupDiningMiddle/>
                <GroupDiningLocations/>
            </section>
        </>

    );
}

export default GroupDiningPage;