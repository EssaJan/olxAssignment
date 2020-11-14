import React, { Component } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


class Header extends Component{
    render(){

            const nav =[
                {ID: 1, label: "Mobile Phones"},
                {ID: 2, label: "Cars"},
                {ID: 3, label: "Motorcycles"},
                {ID: 4, label: "Houses"},
                {ID: 5, label: "TV-Video-Audio"},
                {ID: 6, label: "Tablets"},
                {ID: 7, label: "Land & Plots"},
            ]
        return(
            <React.Fragment>
            <div className="header fixed flex aic">
                <div className="logo">
                <img src={require('../ui/logo.png')}/>
                </div>
                <div className="location rel flex aic ">
                    <div className="icondd ico s24" />
                    {/* <img src={require('../ui/ddIcon.png')}/> */}
                    <SearchIcon style={{margin:"10px -8px",fontSize:"30px"}} />
                    <input className="label s15 font" placeholder="Pakistan" />
                    <button className="iconDDbtn arrow s24"/>
                    <ExpandMoreIcon />
                    </div>
                   <div className="search flex aic">
                    <input type="text" placeholder="Find Cars, Mobile Phones and more. . ." className="query font s15"/>
                 
                    <button className="iconDDbtn go s30 b cff" style={{background:"#000"}}>
                    <SearchIcon className="cff s30" style={{fontSize:"40px"}} />
                    </button>
                  
                   </div>
                   <div className="actions flex aic">
                       {/* <link to="/account/signin" className="fontb s15">Sign in</link> */}
                       <h2 className="fontb s16 noul noulh color " id="lgn" style= {{ fontSize:"25px", marginTop:"18px"}}>Login</h2>
                       <button className="sell flex aic">
                        <div className="icon-plus ico s24" />
                        <AddIcon style= {{marginLeft: "8px", fontSize:"30px"}} />

                        <h2 className="s18 font" id="sellHeading" style= {{ fontSize:"25px", lineHeight:"0.6", marginTop:"10px"}} >Sell</h2>
                      

                       </button>

                   </div>
                
            </div>
            <div className="hnav fixed flex aic">
                <button className="view-cates flex aic color">
                    <h2 className="s18 font">All Categroies</h2>
                    
                    {/* <button className="icon-chevron-down arrow s24"/> */}
            <ExpandMoreIcon style={{color: "black", fontSize:"40px"}} />
                </button>
                 
                <Router>
                {
                    nav.map(item => {
                        return(
                        <Link to={"/browser" + item.ID} className="noul noulh color font s15">{item.label}
                    
                        </Link>
                            
                        )

                    })
                
    }
                
               </Router>
            </div>
            <div className="hclr" />
            </React.Fragment>
        )
    }
}
export default Header;