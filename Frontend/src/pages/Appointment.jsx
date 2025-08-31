import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AppointmentForm from "../components/AppointmentForm";
import Footer from "../components/Footer";

function Appointment() {
  return (
    <>
      <Navbar />
      <br />
      <br />
      <Hero
        title={"Book Your Appointment At PulseCare Medical Complex!"}
        imageUrl={"/appointment.png"}
      />
      <AppointmentForm />

      <Footer />
    </>
  );
}

export default Appointment;
