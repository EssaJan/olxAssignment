import React, { Component, useState } from 'react'



function AdItem(props){
    if("placeholder" in props){
        return(
            <div className="ad-item">
                <div className="poster anim placeholder" id="item1"  />
                
                {/* <img src={require('../ui/saylani.png')}/>  </div> */}
                <div className="title anim placeholder" id="item2"> 
                <h5>Hello</h5> </div>
                <div className="tagline anim placeholder">
                <h6>Hello</h6>
                </div>
                <div className="ftr anim flex">
                    <div className="location anim placeholder">
       
                    </div>
                    <div className="stamp anim placeholder" />
                    </div>
            </div>
        )
    }
    return(
        <div className="ad-item">
            
        </div>
    )
}
export default AdItem;