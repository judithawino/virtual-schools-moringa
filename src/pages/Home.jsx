import React, { Fragment } from "react";
import HeroSection from "../components/LandingPage/Hero-Section/HeroSection";
import Header from "../components/LandingPage/Header/Header";
import AboutUs from "../components/LandingPage/About-us/AboutUs";
import CompanySection from "../components/LandingPage/Company-section/Company";
// import School from "../components/LandingPage/School/School";
import ChooseUs from "../components/LandingPage/Choose-us/ChooseUs";
import Features from "../components/LandingPage/Feature-section/Features";
import Testimonials from "../components/LandingPage/Testimonial/Testimonials";
import Newsletter from "../components/LandingPage/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";
import Drop from "../components/Dropdown";
//import Courses from "../components/Courses-section/Courses";
//import FreeCourse from "../components/Free-course-section/FreeCourse";

const Home = () => {
  return (
    <Fragment>      
      <Drop/> 
      <Header/>
      <HeroSection/>
      <CompanySection/>
      <AboutUs/>
      {/* <School/> */}   
      <ChooseUs/>
      <Features />
      <Testimonials />
      <Newsletter />
      <Footer />
    </Fragment>
  );
};

export default Home;
