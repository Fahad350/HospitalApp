import React from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import Department from "../components/Department";
import MessageForm from "../components/Contact";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <div name="Home">
        <Navbar />
        <Hero
          name={"/"}
          title={
            "Welcom to PulseCare Medical Complex | Your Trusted HealthCare Provider"
          }
          imageUrl={"/hero.png"}
        />
        <Biography />
        <Department />
        <MessageForm />
        <Footer />
      </div>
    </>
  );
}

export default Home;
