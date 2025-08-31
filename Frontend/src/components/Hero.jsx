import React from "react";

function Hero({ title, imageUrl }) {
  return (
    <section className="w-full px-4 py-10 md:py-16 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:gap-10">
        {/* Left Content */}
        <div className="md:w-1/2 w-full order-2 md:order-1 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-blue-500 leading-snug">
            {title}
          </h1>
          <p className="mt-6 text-gray-700 text-base md:text-lg text-justify">
            PulseCare is a healthcare facility that provides around-the-clock
            medical care and attention to patients in need. Hospitals have
            medical experts who monitor patients, perform tests and procedures,
            administer medications, and tend to any health issues that arise.
            Patients can stay at PulseCare overnight or for extended periods of
            time while receiving continual care and observation. Hospitals offer
            services like emergency room care, surgery, intensive care, labor
            and delivery services, imaging and lab work, and more. Whether it is
            dealing with an unexpected injury, chronic disease, childbirth, or
            any other medical situation, a hospital has the staff and resources
            available to diagnose, treat, and support recovery.
          </p>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 w-full order-1 flex justify-center relative">
          <div className="relative">
            <img
              src={imageUrl}
              alt="pic"
              className="w-full max-w-md md:max-w-lg object-contain relative z-10 pt-8"
            />
            <img
              src="/Vector.png"
              alt="decorative background"
              className="absolute inset-0 w-72 md:w-96 mx-auto top-10 opacity-70 -z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
