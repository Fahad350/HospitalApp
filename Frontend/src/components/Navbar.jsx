import React, { useContext } from "react";
import { Context } from "../main";

import { Link as Link1 } from "react-scroll";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";

function Navbar() {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const navigateTo = useNavigate();

  const handleLogout = async () => {
    await axios
      .get("http://localhost:5000/api/v1/user/patient/logout", {
        withCredentials: true,
      })
      .then((res) => {
        toast.success(res.data.message);
        setIsAuthenticated(false);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };
  const handleLogin = () => {
    navigateTo("/login");
  };
  return (
    <nav className="navbar fixed top-0 left-0 right-0 z-50  bg-cyan-600 shadow-sm px-4">
      {/* Left Section */}
      <div className="navbar-start ">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52 bg-cyan-600"
          >
            <Link to="/">Home</Link>

            <Link1 to="Biography" smooth={true} duration={500} offset={-70}>
              Biography
            </Link1>

            <Link1 to="Department" smooth={true} duration={500} offset={-70}>
              Departments
            </Link1>

            <Link1 to="Contact" smooth={true} duration={500} offset={-70}>
              Contact
            </Link1>
            <Link to="/appointment">Appointment</Link>

            <Link to="/About">About</Link>
          </ul>
        </div>

        {/* Logo */}
        <Link1 to="Home" smooth={true} duration={500} offset={-70}>
          <a className="flex items-center gap-2">
            <img
              src="/PulseCare.png"
              alt="logo"
              className="h-10 w-auto md:ml-4 ml-0 cursor-pointer hover:scale-110 duration-300"
            />
            <span className="font-bold text-xl md:text-2xl cursor-pointer hover:text-black hover:scale-110 duration-300">
              PulseCare
            </span>
          </a>
        </Link1>
      </div>

      {/* Center Links (md+) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg">
          <li className="  hover:bg-cyan-700 text-white  hover:scale-110 duration-300">
            <Link to="/">Home</Link>
          </li>
          <li className="  hover:bg-cyan-700 text-white hover:scale-110 duration-300">
            <Link1 to="Biography" smooth={true} duration={500} offset={-70}>
              Biography
            </Link1>
          </li>

          <li className="  hover:bg-cyan-700 text-white hover:scale-110 duration-300">
            <Link1 to="Department" smooth={true} duration={500} offset={-70}>
              Departments
            </Link1>
          </li>

          <li className="  hover:bg-cyan-700 text-white hover:scale-110 duration-300">
            <Link1 to="Contact" smooth={true} duration={500} offset={-70}>
              Contact
            </Link1>
          </li>
          <li className="  hover:bg-cyan-700 text-white hover:scale-110 duration-300">
            <Link to="/appointment">Appointment</Link>
          </li>
          <li className="  hover:bg-cyan-700 text-white hover:scale-110 duration-300">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>

      {/* Right Section: Search + Login */}
      <div className="navbar-end gap-3">
        {/* Search Icon */}
        <button className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>

        {/* Login Button */}
        {/* <button className="bg-black text-white hover:scale-110 duration-300 cursor-pointer px-6 py-2 rounded-lg text-lg hover:bg-blue-500 transition md:mr-6 mr-0">
          Login
        </button> */}
        {isAuthenticated ? (
          <button
            className="bg-black text-white hover:scale-110 duration-300 cursor-pointer px-6 py-2 rounded-lg text-lg hover:bg-blue-500 transition md:mr-6 mr-0"
            onClick={handleLogout}
          >
            Logout
          </button>
        ) : (
          <button
            className="bg-black text-white hover:scale-110 duration-300 cursor-pointer px-6 py-2 rounded-lg text-lg hover:bg-blue-500 transition md:mr-6 mr-0"
            onClick={handleLogin}
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
