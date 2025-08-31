import React, { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Context } from "../context/AuthContext";
import { toast } from "react-toastify";
import axios from "axios";

function AddNewDoctor() {
  const { isAuthenticated } = useContext(Context);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cnic, setCnic] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [doctorDept, setDoctorDept] = useState("");
  const [doctorAvator, setDoctorAvator] = useState("");
  const [doctorAvatorPreview, setDoctorAvatorPreview] = useState("");

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

  const navigateTo = useNavigate();

  const handleAvator = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      setDoctorAvatorPreview(reader.result);
      setDoctorAvator(file);
    };
  };

  const handleRegisterDr = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("cnic", cnic);
      formData.append("dob", dob);
      formData.append("gender", gender);
      formData.append("password", password);
      formData.append("doctorDept", doctorDept);
      formData.append("docAvator", doctorAvator);
      const res = await axios.post(
        "http://localhost:4000/api/v1/user/doctor/addnew",
        formData,
        {
          withCredentials: true,
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      toast.success(res.data.message);

      navigateTo("/doctors");
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }
  return (
    <>
      <div className="bg-[url('/dr1.webp')] md:bg-cover md:bg-fit md:bg-fixed min-h-screen ">
        <div>
          <h1 className="md:text-6xl text-3xl flex justify-center align-center pt-6">
            PulseCare Medical Complex
          </h1>
        </div>
        <div className="hero  min-h-screen ">
          <div className="hero-content flex-col lg:flex-row-reverse ">
            <div className="text-center lg:text-left md:ml-35 ml-0 ">
              <h1 className="text-5xl font-bold text-cyan-500 ">
                Register Doctor
              </h1>
              <p className="py-6 text-justify  text-2xl">
                A PulseCare is a healthcare institution that provides treatment
                and care for sick and injured people, utilizing medical
                equipment and trained staff. If you want to manage this hospital
                management system then please
                <Link to={"/login"}>
                  <span className="link link-hover text-3xl text-cyan-600 hover:scale-110 duration-300 cursor-pointer ml-2">
                    Login
                  </span>
                </Link>
                .
              </p>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl md:mt-4 mt-0">
              <div className="card-body ">
                <form onSubmit={handleRegisterDr}>
                  <fieldset className="fieldset">
                    <div>
                      <img
                        src={
                          doctorAvatorPreview
                            ? `${doctorAvatorPreview}`
                            : "/avator.png"
                        }
                        alt="doctorAvatorPreview"
                      />
                      <br />
                      <input
                        className="file-input"
                        type="file"
                        onChange={handleAvator}
                      />
                    </div>
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

                    <label className="label">Password</label>
                    <input
                      type="password"
                      className="input"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <label className="label">Department</label>
                    <select
                      className="input"
                      value={doctorDept}
                      onChange={(e) => setDoctorDept(e.target.value)}
                    >
                      <option value="">Select Department</option>
                      {departmentsArray.map((element, index) => {
                        return (
                          <option value={element} key={index}>
                            {element}
                          </option>
                        );
                      })}
                    </select>
                    <div>
                      <span>if you have an account please</span>
                      <Link
                        to={"/login"}
                        className="link link-hover ml-2 text-cyan-500"
                      >
                        Login?
                      </Link>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-neutral mt-4  bg-cyan-500 hover:scale-110 duration-300"
                    >
                      Register Doctor
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

export default AddNewDoctor;
