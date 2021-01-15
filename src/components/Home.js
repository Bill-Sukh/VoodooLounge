import React from 'react';
import Hero from './HomePage/HeroComponent';
import About from './HomePage/AboutComponent';
import Location from './HomePage/LocationComponent';
import Menu from './HomePage/MenuComponent';
import LargeGroup from './HomePage/LargeGroupComponent';
import Order from './HomePage/OrderComponent';

function Home(){
    return (
        <>
            <Hero />
            <About />
            <Location />
            <Menu />
            <LargeGroup />
            <Order />
        </>
    );
}

export default Home;