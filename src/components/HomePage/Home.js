import React from 'react';
import Hero from './HeroComponent';
import About from './AboutComponent';
import Location from './LocationComponent';
import Menu from './MenuComponent';
import LargeGroup from './LargeGroupComponent';
import Order from './OrderComponent';

function Home(){
    return (
        <div className="home-page-container">
            <Hero />
            <About />
            <Location />
            <Menu />
            <LargeGroup />
            <Order />
        </div>
    );
}

export default Home;