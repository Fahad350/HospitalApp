import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Biography from "../components/Biography";

function About() {
  return (
    <>
      <div>
        <Navbar />
        <br />
        <br />
        <Hero
          title={"Learn More About Us | PulseCare Medical Complex"}
          imageUrl={"/about.png"}
        />
        <Biography />
        <Footer />
      </div>
    </>
  );
}

export default About;
