import React from 'react'
import Product from  '../components/Product'
import ProductDetails from  '../components/productDetails'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  class AppRouter extends React.Component{
      render(){
          return(
              <Router>
                  <Route  path='Product' component = {ProductDetails} />
              </Router>
          )
      }
  }
  export default AppRouter;