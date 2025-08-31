import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUserMd,
  FaUsers,
  FaEnvelope,
  FaSignOutAlt,
} from "react-icons/fa";
import { Context } from "../context/AuthContext"; // ✅ import context

const Sidebar = () => {
  const navigate = useNavigate();
  const { setIsAuthenticated, setUser } = useContext(Context); // ✅ use context

  const handleLogout = () => {
    localStorage.clear();
    setIsAuthenticated(false); // ✅ reset auth
    setUser(null); // ✅ clear user
    navigate("/login"); // ✅ redirect
  };

  const linkClasses = ({ isActive }) =>
    `flex items-center px-4 py-2 rounded-lg transition-colors duration-200 ${
      isActive ? "bg-cyan-600 text-white" : "text-gray-700 hover:bg-cyan-100"
    }`;

  return (
    <div className="bg-white h-full shadow-md p-4 flex flex-col">
      <h2 className="text-2xl font-bold text-cyan-600 mb-6">PulseCare</h2>

      <nav className="flex-1 space-y-2">
        <NavLink to="/" className={linkClasses}>
          <FaTachometerAlt className="mr-2" /> Dashboard
        </NavLink>
        <NavLink to="/doctor/addNew" className={linkClasses}>
          <FaUserMd className="mr-2" /> Add Doctor
        </NavLink>
        <NavLink to="/admin/addNew" className={linkClasses}>
          <FaUsers className="mr-2" /> Add Admin
        </NavLink>
        <NavLink to="/doctors" className={linkClasses}>
          <FaUsers className="mr-2" /> Doctors
        </NavLink>
        <NavLink to="/messages" className={linkClasses}>
          <FaEnvelope className="mr-2" /> Messages
        </NavLink>
      </nav>

      <button
        onClick={handleLogout}
        className="flex items-center justify-center px-4 py-2 mt-4 text-white bg-red-500 rounded-lg hover:bg-red-600"
      >
        <FaSignOutAlt className="mr-2" /> Logout
      </button>
    </div>
  );
};

export default Sidebar;
