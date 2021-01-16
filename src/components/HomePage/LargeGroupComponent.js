import React from 'react';
import './LargeGroupComponent.css';
 
function LargeGroup(){
    return(
        <>
            <section className="large-group" id="large_group">
                <div className="large-group-img"></div>
                <div className="learn-more">
                    <div className="cheers">
                        <h2 className="learn-more-header p-2">Cheers!</h2>
                        <p className="learn-more-description p-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, possimus tenetur deleniti officia explicabo quia perferendis obcaecati molestiae tempore excepturi 
                            assumenda rem. Error, quisquam reiciendis
                            laudantium expedita saepe ducimus voluptates!</p>
                        <div className="p-1">
                            <a href="#" className="btn inquire">Inquire now</a>   
                        </div> 
                    </div>
                </div>         
            </section>
        </>
    );
}

export default LargeGroup;