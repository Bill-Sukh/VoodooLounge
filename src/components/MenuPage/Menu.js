import React, { useState, Component } from 'react'
import {MENU} from '../shared/menu'; 
import MenuButtons from './MenuButtons';
import MenuItems from './MenuItems';
import {FaPlay, FaPause} from 'react-icons/fa';
import { IconContext } from "react-icons";
import { Carousel } from 'react-responsive-carousel';
import {MENU_IMAGES} from '../shared/menuCarousel';
import Fade from 'react-reveal/Fade';
import './Menu.css';

function MenuHeader(){
    return (
        <div className="menu-header">
            <h1>Menu</h1>
        </div>
    );
}

function MenuCarousel(){
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
                className={"menu-carousel-container"}
            >
                {
                    MENU_IMAGES.map((item, index) => {
                        return( 
                            <div className="my-slides" key={index}>
                                <img src={item.path} alt={item.alt}/>
                                <div className="details">
                                    <div className="texts"> 
                                        <h1 className="title">MENUS</h1>
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

class MenuPage extends Component {
    constructor(){
        super();
        this.state = {
            menu: MENU,
            selectedCategory: null
        }
        this.handleCategoryBtn = this.handleCategoryBtn.bind(this);
    }

    handleCategoryBtn(selectedCategory){
        let filteredMenu = [];

        if(selectedCategory){
            if(selectedCategory === "all"){
                filteredMenu = this.state.menu;
            }
            else{
                this.state.menu.forEach(element => {
                    if(element.category === selectedCategory){
                        filteredMenu.push(element);
                    }
                });
            }
        }

        this.setState({selectedCategory: filteredMenu});
    }

    render() {
        return (
            <div className="menu-container">
                <Fade clear>
                 <MenuCarousel/>
                </Fade>  
                <MenuHeader />
                <MenuButtons categories={this.state.menu.reduce(function(prev, curr){
                        if(!prev.includes(curr.category)){
                            prev.push(curr.category);
                        }
                    return prev;
                },["all"])} 
                        handleCategoryBtn = {this.handleCategoryBtn}
                />
                <MenuItems menu={this.state.selectedCategory ? this.state.selectedCategory : this.state.menu}/>
            </div>
        )
    }
}

export default MenuPage;