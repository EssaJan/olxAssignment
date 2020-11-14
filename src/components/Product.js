import React, { Component } from "react";
import ProductDetails from './productDetails'
import 'bootstrap/dist/css/bootstrap.css';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
// import AppRouter  from '../config/router'
import { Link } from "react-router-dom";



class Product extends React.Component{
  details = ()=>{
   console.log(Component)
      
  }
  render(){
    return(
        <React.Fragment>
      <div>
        
          <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://statics.olx.com.pk/external/base/img/hero_bg_pk.jpg" className="d-block w-100" alt="..." style={{height:"200%"}} />
          </div>
        
         
        </div>
      </div>

      
       <div className="product">
        <div className="container">
        <div> <h3>Fresh recommendations</h3></div>
          <div className="row ">
            <div className="card1 col-sm-6 col-md-6 col-lg-3">
              <div className="card" onClick={this.details}>
                <img  src="https://apollo-singapore.akamaized.net/v1/files/0kv4pxj8q598-PK/image;s=300x600;q=60" style={{height: "220px", width:"70%", alignSelf:"center" }} class="card-img-top" alt="..."/>
              <FavoriteBorderIcon className="favIcon"/>
                <label >
                 <span className="proLabel">
                   FEATURED
                 </span>
               </label>
                <div className="card-body">
                  <div><h4 class="card-title">RS 34,000
                  <p className="subCat">New Bunk Bed</p>
                   </h4>
                   <div className="itemtitle">
                   <span >TAJ BAGH LAHORE</span>
                   <span>
                     <span>
                        4DAYS AGO
                       </span>
                     </span>
                   
                   
           
                  
                   </div>
                 
                  
                  
                  </div>
                 
                </div>
              </div>

            </div>
            <div className="col-sm-6 col-md-6 col-lg-3">
              <div className="card">
                <img src="https://apollo-singapore.akamaized.net/v1/files/72cchd4xq46g3-PK/image;s=300x600;q=60" style={{height: "220px", width:"70%", alignSelf:"center"}} class="card-img-top" alt="..."/>
                <FavoriteBorderIcon className="favIcon"/>
                <label >
                 <span className="proLabel">
                   FEATURED
                 </span>
               </label>
               <div className="card-body">
                  <div><h4 class="card-title">RS 9,000
                  <p className="subCat">Samsung note 10 plus lcd</p>
                   </h4>
                   <div className="itemtitle">
                   <span >GUJRANWALA PUNJAB</span>
                   <span>
                     <span>
                        YESTERDAY
                       </span>
                     </span>
                   
                   
           
                  
                   </div>
                 
                  
                  
                  </div>
                 
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3">
              <div className="card">
                <img src="https://apollo-singapore.akamaized.net/v1/files/xuen90v8l60x1-PK/image;s=300x600;q=60" className="card-img-top" style={{height: "220px", width:"70%", alignSelf:"center"}} alt="..."/>
                <FavoriteBorderIcon className="favIcon"/>
                <label >
                 <span className="proLabel">
                   FEATURED
                 </span>
               </label>
               <div className="card-body">
                  <div><h4 class="card-title">RS 6,862,500
                  <p className="subCat">Appartment and Shops </p>
                   </h4>
                   <div className="itemtitle">
                   <span >BAHRIA TWON RAWALPINDI</span>
                   <span>
                     <span>
                        8CT
                       </span>
                     </span>
                   
                   
           
                  
                   </div>
                 
                  
                  
                  </div>
                 
                </div>


              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3">
              <div className="card">
                <img src="https://apollo-singapore.akamaized.net/v1/files/2oxuyuiwqgza2-PK/image;s=300x600;q=60" className="card-img-top" style={{height: "228px", width:"70%", alignSelf:"center"}} alt="..."/>
                <FavoriteBorderIcon className="favIcon"/>
                <div className="card-body">
                  <div><h4 class="card-title">RS 30,000
                  <p className="subCat">hp Gamming Laptop 4th gen.  </p>
                   </h4>
                   <div className="itemtitle">
                   <span >ISLAMABAD</span>
                   <span>
                     <span>
                        TODAY
                       </span>
                     </span>
                   
                   
           
                  
                   </div>
                 
                  
                  
                  </div>
                 
                </div>
              </div>
            </div>
          </div>

        </div>

    </div>
    <div className="product">
        <div className="container">
          <div className="row ">
            <div className="card1 col-sm-6 col-md-6 col-lg-3">
              <div className="card">
                <img src="https://apollo-singapore.akamaized.net/v1/files/izcmnf354t5s1-PK/image;s=300x600;q=60" style={{height: "220px", width:"70%", alignSelf:"center"}} class="card-img-top" alt="..."/>
                <FavoriteBorderIcon className="favIcon"/>
                <div className="card-body">
                <div><h4 className="card-title">RS 60
                  <p className="subCat">Celender 2021 keychain with company  </p>
                   </h4>
                   <div className="itemtitle">
                   <span >MARIPUR KARACHI</span>
                   <span>
                     <span>
                        23 OCT
                       </span>
                     </span>
                   
                   
           
                  
                   </div>
                 
                  
                  
                  </div>
                </div>
              </div>

            </div>
            <div className="col-sm-6 col-md-6 col-lg-3">
              <div className="card">
                <img src="https://apollo-singapore.akamaized.net/v1/files/r0rp65igpp4o2-PK/image;s=300x600;q=60" style={{height: "240px", width:"70%", alignSelf:"center"}} class="card-img-top" alt="..."/>
                <FavoriteBorderIcon className="favIcon"/>
                <div className="card-body">
                <div><h4 class="card-title">RS 7,000
                  <p className="subCat">Orient water dispenser  </p>
                   </h4>
                   <div className="itemtitle">
                   <span >CIVIL DEFENCE LAHORE</span>
                   <span>
                     <span>
                        TODAY
                       </span>
                     </span>
                   
                   
           
                  
                   </div>
                 
                  
                  
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3">
              <div className="card">
                <img src="https://apollo-singapore.akamaized.net/v1/files/bjwg0t7depes-PK/image;s=300x600;q=60" className="card-img-top" style={{height: "240px", width:"40%", alignSelf:"center"}} alt="..."/>
                <FavoriteBorderIcon className="favIcon"/>
                <div class="card-body">
                <div><h4 class="card-title">RS 43,300
                  <p className="subCat">yamaha yb 100 full genuine  </p>
                   </h4>
                   <div className="itemtitle">
                   <span >HYDERABAD SINDH</span>
                   <span>
                     <span>
                        TODAY
                       </span>
                     </span>
                   
                   
           
                  
                   </div>
                 
                  
                  
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3">
              <div className="card">
                <img src="https://apollo-singapore.akamaized.net/v1/files/f5hle9c5qz643-PK/image;s=300x600;q=60https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSOntdX1eEfyqEwjfhdpTHcUlWBlUKUuXj4ezSvnDtZm4nwixzw&usqp=CAU" className="card-img-top" style={{height: "240px", width:"70%", alignSelf:"center"}} alt="..."/>
                <FavoriteBorderIcon className="favIcon"/>
                <div className="card-body">
                <div><h4 className="card-title">RS 52,000
                  <p className="subCat">Iphone 8+ non pta  </p>
                   </h4>
                   <div className="itemtitle">
                   <span >KARACHI SINDH</span>
                   <span>
                     <span>
                        TODAY
                       </span>
                     </span>
                   
                   
           
                  
                   </div>
                 
                  
                  
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

    </div>
    <div className="product">
        <div className="container">
          <div className="row ">
            <div className="card1 col-sm-6 col-md-6 col-lg-3">
              <div className="card">
                <img src="https://apollo-singapore.akamaized.net/v1/files/8y4u1evpwuj22-PK/image;s=300x600;q=60" style={{height: "200px", width:"40%", alignSelf:"center"}} class="card-img-top" alt="..."/>
                <FavoriteBorderIcon className="favIcon"/>
                <div className="card-body">
                <div><h4 className="card-title">RS 23,000
                  <p className="subCat">Canon camera kiss x2 </p>
                   </h4>
                   <div className="itemtitle">
                   <span >KARACHI</span>
                   <span>
                     <span>
                        TODAY
                       </span>
                     </span>
                   
                   
           
                  
                   </div>
                 
                  
                  
                  </div>
                </div>
              </div>

            </div>
            <div className="col-sm-6 col-md-6 col-lg-3">
              <div className="card">
                <img src="https://apollo-singapore.akamaized.net/v1/files/60ahcy6jr5va3-PK/image;s=300x600;q=60" style={{height: "200px", width:"70%", alignSelf:"center"}} class="card-img-top" alt="..."/>
                <FavoriteBorderIcon className="favIcon"/>
                <div className="card-body">
                <div><h4 class="card-title">RS 63,000
                  <p className="subCat">Samsung note 9 fresh  </p>
                   </h4>
                   <div className="itemtitle">
                   <span >NAZIMABAD KARACHI</span>
                   <span>
                     <span>
                        7 DAYS AGO
                       </span>
                     </span>
                   
                   
           
                  
                   </div>
                 
                  
                  
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3">
              <div className="card">
                <img src="https://apollo-singapore.akamaized.net/v1/files/7a5fscgfydaw-PK/image;s=300x600;q=60" className="card-img-top" style={{height: "200px", width:"70%", alignSelf:"center"}} alt="..."/>
                <FavoriteBorderIcon className="favIcon"/>
                <div className="card-body">
                <div><h4 class="card-title">RS 10,500
                  <p className="subCat">Canon geyser 8 litre  </p>
                   </h4>
                   <div className="itemtitle">
                   <span >PUNJAB</span>
                   <span>
                     <span>
                        TODAY
                       </span>
                     </span>
                   
                   
           
                  
                   </div>
                 
                  
                  
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3">
              <div className="card">
                <img src="https://apollo-singapore.akamaized.net/v1/files/2w38jxmjavam1-PK/image;s=300x600;q=60" className="card-img-top" style={{height: "200px", width:"70%", alignSelf:"center"}} alt="..."/>
                <FavoriteBorderIcon className="favIcon"/>
                <div className="card-body">
                <div><h4 className="card-title">RS 580
                  <p className="subCat">Parking tensil structure  </p>
                   </h4>
                   <div className="itemtitle">
                   <span >ISLAMABAD</span>
                   <span>
                     <span>
                        OCT 7
                       </span>
                     </span>
                   
                   
           
                  
                   </div>
                 
                  
                  
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

    </div>
    
    </div>
      
    <div>
            <button className="load-more fontb c333  anim s16" >Load more</button>
        
        </div>


    <div className="app-ribbon flex aic last" >
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
}
export default Product;
