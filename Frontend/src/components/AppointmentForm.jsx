import React, { useEffect, useState } from "react";

import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function AppointmentForm() {
  const navigateTo = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cnic, setCnic] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [appointment_date, setAppointment_date] = useState("");
  const [department, setDepartment] = useState("");
  const [doctor_firstName, setDoctor_firstName] = useState("");
  const [doctor_lastName, setDoctor_lastName] = useState("");
  const [hasVisited, setHasVisited] = useState("");
  const [address, setAddress] = useState("");

  const departmentsArray = [
    "Cardiology",
    "Neurology",
    "Radiology",
    "Dermatology",
    "Physiotherapy",
    "ENT",
    "Oncology",
    "Orthopedics",
    "Pediatrics",
  ];

  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    const fetchDoctor = async () => {
      const { data } = await axios.get(
        "http://localhost:4000/api/v1/user/doctors",
        {
          withCredentials: true,
        }
      );
      setDoctors(data.doctors);
    };
    fetchDoctor();
  }, []);

  const handleAppointment = async (e) => {
    e.preventDefault();
    try {
      const hasVisitedBool = Boolean(hasVisited);
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/appointment/takeAppointment",
        {
          firstName,
          lastName,
          email,
          phone,
          cnic,
          dob,
          gender,
          appointment_date,
          department,
          doctor_firstName,
          doctor_lastName,
          hasVisited: hasVisitedBool,
          address,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toast.success(data.message);
      navigateTo("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <>
      <div className="bg-[url('/register.png')] md:bg-cover md:bg-fit md:bg-fixed min-h-screen ">
        <div>
          <h1 className="md:text-6xl text-3xl flex justify-center align-center pt-6">
            PulseCare Medical Complex
          </h1>
        </div>
        <div className="hero  min-h-screen ">
          <div className="hero-content flex-col lg:flex-row-reverse ">
            <div className="text-center lg:text-left md:ml-35 ml-0 ">
              <h1 className="text-5xl font-bold text-cyan-500 ">
                Book Your Appointment Here!
              </h1>
              <p className="py-6 text-justify text-black  text-2xl">
                A PulseCare is a healthcare institution that provides treatment
                and care for sick and injured people, utilizing medical
                equipment and trained staff. If you want to take appointment of
                your doctor then please
                <span className="link link-hover text-3xl text-cyan-600 hover:scale-110 duration-300 cursor-pointer ml-2">
                  fill this form
                </span>
                .
              </p>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl md:mt-4 mt-0">
              <div className="card-body ">
                <form onSubmit={handleAppointment}>
                  <fieldset className="fieldset">
                    <label className="label">First Name</label>
                    <input
                      type="text"
                      className="input"
                      placeholder="First Name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                    <label className="label">Last Name</label>
                    <input
                      type="text"
                      className="input"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                    <label className="label">Email</label>
                    <input
                      type="email"
                      className="input"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <label className="label">Phone Number</label>
                    <input
                      type="number"
                      className="input"
                      placeholder="Phone Number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    <label className="label">CNIC</label>
                    <input
                      type="number"
                      className="input"
                      placeholder="CNIC"
                      value={cnic}
                      onChange={(e) => setCnic(e.target.value)}
                    />
                    <label className="label">Date of Birth</label>
                    <input
                      type="date"
                      className="input"
                      placeholder="Date of Birth"
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
                    />
                    <label className="label">Gender</label>
                    <select
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      className="input"
                    >
                      <option value="">Select</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>

                    <label className="label">Appointment Date</label>
                    <input
                      type="date"
                      className="input"
                      placeholder="Appointment Date "
                      value={appointment_date}
                      onChange={(e) => setAppointment_date(e.target.value)}
                    />
                    <label className="label">Departments</label>
                    <select
                      className="input"
                      value={department}
                      onChange={(e) => {
                        setDepartment(e.target.value), setDoctor_firstName("");
                        setDoctor_lastName("");
                      }}
                    >
                      <option value={""}>Select Department</option>
                      {departmentsArray.map((depart, index) => {
                        return (
                          <option value={depart} key={index}>
                            {depart}
                          </option>
                        );
                      })}
                    </select>
                    <label className="label">Select Doctor</label>
                    <select
                      className="input"
                      value={`${doctor_firstName} ${doctor_lastName}`}
                      onChange={(e) => {
                        const [firstName, lastName] = e.target.value.split(" "); // split by single space
                        setDoctor_firstName(firstName);
                        setDoctor_lastName(lastName);
                      }}
                    >
                      <option value="">Select Doctor</option>
                      {doctors
                        .filter((doctor) => doctor.doctorDept === department) // filter by selected dept
                        .map((doctor, index) => (
                          <option
                            value={`${doctor.firstName} ${doctor.lastName}`}
                            key={index}
                          >
                            {doctor.firstName} {doctor.lastName}
                          </option>
                        ))}
                    </select>

                    <label className="label">Address</label>
                    <textarea
                      className="input h-22"
                      rows="10"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Your Adrees"
                    />
                    <div>
                      <span className="mr-2">Have You Visited Before?</span>
                      <input
                        type="checkbox"
                        checked={hasVisited}
                        onChange={(e) => setHasVisited(e.target.checked)}
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-neutral mt-4  bg-cyan-500 hover:scale-110 duration-300"
                    >
                      Get Appointment
                    </button>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AppointmentForm;
