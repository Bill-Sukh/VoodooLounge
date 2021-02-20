import React from 'react'

function MenuItems(props) {
    if(props){
        const renderMenu = props.menu.map(function(item){
            return <div className="menu-item" key={item.id}>
                    <div className="menu-item-image"> 
                          <img src={item.img} alt={item.img}/>
                    </div>
                    <div className="menu-item-details">
                          <div className="price-and-title">
                            <h4>{item.title}</h4>
                            <p>{"$" + item.price}</p>
                          </div>
                          <p>{item.desc}</p>
                    </div>    
            </div>      
        });
        
        return (
            <div className="menu-items">
                {renderMenu}
            </div>
        )
    }

}

export default MenuItems;