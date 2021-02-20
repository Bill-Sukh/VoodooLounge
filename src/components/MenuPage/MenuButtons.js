import React from 'react'

function MenuButtons({categories,handleCategoryBtn}) {
        if(categories){
            const renderButtons = categories.map(function(item, index){
                return <div key={index}>
                            <button className="category-btn" onClick={() => handleCategoryBtn(item)}>
                                {item}
                            </button>
                        </div>
            })
        
            return (
                <div className="category-btns">
                    {renderButtons}
                </div>
            )
        }
}

export default MenuButtons;
