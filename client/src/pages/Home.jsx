import React from 'react'
import Navbar from '../components/Navbar'
import Section1 from '../components/HomePage/Section1'
import Section2 from '../components/HomePage/Section2'
import Section3 from '../components/HomePage/Section3'
import Section4 from '../components/HomePage/Section4'
import Section5 from '../components/HomePage/Section5'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div style={{backgroundColor: "#ececec"}}>
        <Navbar/>
        <Section1 />
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>
        <Footer/>
    </div>
  )
}

export default Home