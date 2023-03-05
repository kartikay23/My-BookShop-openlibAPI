import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About My BookShop</h2>
            <p className='fs-17'>My BookShop is a website where you can find books of your choice and their details. The book covers and its details are fetched from Open Library using openlirary API. (cover api, search api, books api) </p>
            <p className='fs-17'>This application is made with react and openlibrary api. If you find it great, then check out my profile and connect with me on socials.  </p>
            <p className='fs-17'>Click here: <a href="https://github.com/kartikay23">Github</a> ,  <a href="https://www.linkedin.com/in/kartikay-kapil/">Linkedin </a> </p>
            <p className= 'fs-17'>With love, Kartikay Kapil</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About