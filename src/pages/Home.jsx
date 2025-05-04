import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'
import About from '../components/About'
import Portfolio from '../components/Portfolio'
import Other from '../components/Other'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function Home() {
  return (
    
    <>
        <Header/>
        <Hero/>
        <Services/>
        <About/>
        <Portfolio/>
        <Other/>
        <Contact/>
        <Footer/>
  </>
  )
}

export default Home