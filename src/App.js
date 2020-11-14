import React, { Component } from 'react';
// import { browserRouter as Router, Route, Link} from "react-router-dom";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import HomePage from './components/Home';
import Header from './components/Header'
import Items from './components/items'
import ProductDetails from './components/productDetails'
import './comp.css';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Footer from './components/footer'
import Product from './components/Product'


function App(){
  return(
    <BrowserRouter>
    <Header />
    <Product />
    <Footer />
    {/* <ProductDetails /> */}
      </BrowserRouter>
 
    
  )

}
export default App;
