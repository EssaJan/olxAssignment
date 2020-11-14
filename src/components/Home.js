import React, {  useEffect, useState } from 'react';

import { Button , Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
// import './App.css';
import Items from './items'

function HomePage(){

    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        if(loading){
            let _list = [];
            for(let i = 0; i < 13; i++){
                _list.push(<Items placeholder = {true} /> )
            }
            setList(_list)
        }
    },list);
    return(
        <React.Fragment>
        <div className = "home-page ">
            <div className="ad-list flex">
                {list}
            </div>
            <button className="load-more fontb c333  anim s16" >Load more</button>
        
        </div>

        <div className="app-ribbon flex aic" >
            <div className="img">
                <img className="bl" src="//statics.olx.com.pk/external/base/img/phone-app.png" />
            </div>
            <div className="meta ">
                <h2 className="title fontb s20 color">TRY THE OLX APP</h2>
                <h2 className="slogan font s18 color">Buy, sell and find just about anything using the app on your mobile </h2>
                </div>
            <div className="links">
            <h2 className="title fontb s30 color">Get your app today</h2>
            <div className="flex as">
                <a href="#" className="noul bl"> <img src ="//statics.olx.com.pk/external/base/img/appstore_2x.png" /></a>
                <a href="#" className="noul bl"> <img src ="//statics.olx.com.pk/external/base/img/playstore_2x.png" /></a>
                </div>
            </div>
        </div>

        </React.Fragment>


    )
}
export default HomePage;