import React, { Component } from 'react';
import Header from './HeaderComponent';
import Hero from './HeroComponent';

class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            icon: "Godzilla"
            // icontwo:  <FontAwesomeIcon icon={faCoffee} />,
            // iconthree:  <FontAwesomeIcon icon={faBars} />
        }
    }
    render(){
        return (
            <>
                <Header />
                <Hero />
            </>    
        );  

    }
}

export default Main;