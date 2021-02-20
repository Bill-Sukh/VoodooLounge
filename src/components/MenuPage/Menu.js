import React, { Component } from 'react'
import {MENU} from '../shared/menu'; 
import MenuButtons from './MenuButtons';
import MenuItems from './MenuItems';
import './Menu.css';

function MenuHeader(){
    return (
        <div className="menu-header">
            <h1>Our Menu</h1>
            <div className="yellow-line"></div>
        </div>
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