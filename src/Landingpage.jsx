import React from 'react'
import Navbar from './pages/Navbar'
import './style/Landing.css'
import Benefit from './pages/Benefit'
import About from './pages/About'
import Hero from './pages/Hero'
import Product from './pages/Product'
import Tujuan from './pages/Tujuan'
import Footer from './pages/Footer'

const Landingpage=()=> {
 return(
    <>
        <Navbar/>
        <Hero/>
        <About/>
        <Benefit/>
        <Product/>
        <Tujuan/>
        <Footer/>
    </>
 )
}

export default Landingpage