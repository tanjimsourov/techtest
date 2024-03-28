import React from "react";
import Navbar from "./../Shared/Navbar";
import Banner from "./../Shared/Banner";
import Footer from "../Shared/Footer";
import ServiceSection from "../Shared/ServiceSection";
import Plans from './../Shared/Plans';
import Contact from './../Shared/Contact';
import ProjectSection from "../Shared/ProjectSection";
import AdminPanal from "./admin/AdminPanal";
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Blogs from "../Shared/Blogs";




const Home = () => {
  return (
    <div>

        <Navbar />
        <Banner />

        <div className="bg">
          <ServiceSection/>
          <Plans/>
          <ProjectSection/>
          <Blogs/>
          <Contact 
          accordionTitle1 = "Why Should you choose us?"
          accordionTitle2 = "Our Tools and Hosting Services"
          accordionTitle3 = "Leave it to us, Take a nap" />
        </div>
        <Footer/>
        <hr/>



      



    </div>
  );
};

export default Home;
