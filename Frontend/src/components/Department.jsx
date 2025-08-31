import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Department() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div name="Department" className="bg-gray-900 ">
        <br />
        <h1 className="text-4xl text-red-500 text-center">Departments</h1>
        <br />
        <Carousel responsive={responsive}>
          <div>
            {" "}
            <div className="card  bg-black text-white w-96 shadow-sm md:ml-6 ml-0">
              <figure>
                <img src="/cardio.jpg" alt="Heart" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-2xl text-cyan-500">
                  Cardiology
                </h2>
                <p>
                  Cardiology is the study of the heart. Cardiology is a branch
                  of medicine that deals with disorders of the heart and the
                  cardiovascular system, and it is a sub-specialty of internal
                  medicine.
                </p>
              </div>
            </div>
          </div>
          <div>
            {" "}
            <div className="card  bg-black text-white w-96 shadow-sm md:ml-6 ml-0">
              <figure>
                <img src="neuro.jpg" alt="neuro" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-2xl  text-cyan-500">
                  Neurology
                </h2>
                <p>
                  Neurology is the branch of medicine dealing with diagnosis and
                  treatment of all categories of conditions and disease
                  involving the nervous system, which comprises the brain, and
                  the peripheral nerves
                </p>
              </div>
            </div>
          </div>
          <div>
            {" "}
            <div className="card bg-black text-white w-96 shadow-sm md:ml-6 ml-0">
              <figure>
                <img src="radio.jpg" alt="radio" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-2xl  text-cyan-500">
                  Radiology
                </h2>
                <p>
                  Radiology is the medical specialty that uses medical imaging
                  to diagnose diseases and guide treatment within the bodies of
                  humans and other animals. It began with radiography,
                </p>
              </div>
            </div>
          </div>
          <div>
            {" "}
            <div className="card  bg-black text-white w-96 shadow-sm md:ml-6 ml-0">
              <figure>
                <img src="derma.jpg" alt="derma" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-2xl  text-cyan-500">
                  Dermatology
                </h2>
                <p>
                  Dermatology is the branch of medicine dealing with the skin.
                  It is a specialty with both medical and surgical aspects. A
                  dermatologist is a doctor who has undergone diseases related
                  to skin
                </p>
              </div>
            </div>
          </div>

          <div>
            {" "}
            <div className="card  bg-black text-white w-96 shadow-sm md:ml-6 ml-0">
              <figure>
                <img src="therapy.jpg" alt="phiso" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-2xl  text-cyan-500">
                  Physiotherapy
                </h2>
                <p>
                  Physiotherapy uses physical methods to help people recover
                  from injury, illness, or disability, improve mobility, manage
                  pain, and enhance their overall physical, psychological, and
                  social well-being
                </p>
              </div>
            </div>
          </div>

          <div>
            {" "}
            <div className="card  bg-black text-white w-96 shadow-sm md:ml-6 ml-0">
              <figure>
                <img src="ent.jpg" alt="ent" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-2xl  text-cyan-500">
                  ENT (Ear, Nose, Throat)
                </h2>
                <p>
                  An ENT department, short for the Department of Ear, Nose, and
                  Throat, is a medical department that provides diagnosis,
                  medical, and surgical treatment for conditions affecting the
                  ear, nose, throat.
                </p>
              </div>
            </div>
          </div>
          <div>
            {" "}
            <div className="card  bg-black text-white w-96 shadow-sm md:ml-6 ml-0">
              <figure>
                <img src="onco.jpg" alt="onco" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-2xl  text-cyan-500">Oncology</h2>
                <p>
                  Oncology is a branch of medicine that deals with the study,
                  treatment, diagnosis, and prevention of cancer. A medical
                  professional who practices oncology is an oncologist
                </p>
              </div>
            </div>
          </div>
          <div className="card  bg-black text-white  w-96 shadow-sm md:ml-6 ml-0">
            <figure>
              <img src="ortho.jpg" alt="ortho" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl  text-cyan-500">
                Orthopedics
              </h2>
              <p>
                Orthopedic surgeons use both surgical and nonsurgical means to
                treat musculoskeletal trauma, spine diseases, sports injuries,
                degenerative diseases, infections, tumors and congenital
                disorders.
              </p>
            </div>
          </div>
          <div className="card bg-black text-white w-96 shadow-sm md:ml-6 ml-0">
            <figure>
              <img src="pedia.jpg" alt="pedia" />
            </figure>
            <div className="card-body">
              <h2 className="card-title  text-2xl  text-cyan-500">
                Pediatrics
              </h2>
              <p>
                Pediatrics is the branch of medicine that focuses on the health
                and medical care of infants, children, and adolescents. It
                encompasses preventive care, diagnosis, and treatment of acute
                ...
              </p>
            </div>
          </div>
        </Carousel>
        <br />
        <br />
        <br />
      </div>
    </>
  );
}

export default Department;
