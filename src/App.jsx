import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle='Services' title ="What We Offer"/>
        <Programs />
        <Title subTitle='About' title ="Story of Us"/>
        <About/>
        <Title subTitle='Contact Us' title ="Get In Touch"/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
};

export default App;

