import React, { useContext, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Context } from "./context/AuthContext";
import Sidebar from "./components/SideBar";

import Dashboard from "./components/Dashboard";
import AddDoctor from "./components/AddNewDoctor";
import AddAdmin from "./components/AddNewAdmin";
import Doctors from "./components/Doctors";
import Messages from "./components/Messages";
import Login from "./components/Login";

import { FaBars } from "react-icons/fa";

function App() {
  const { isAuthenticated } = useContext(Context);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  if (!isAuthenticated) {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    );
  }

  return (
    <div className="flex h-screen w-full bg-gray-100">
      {/* Mobile sidebar overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden transition-opacity ${
          isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsSidebarOpen(false)}
      ></div>

      {/* Sidebar */}
      <aside
        className={`fixed z-50 inset-y-0 left-0 w-64 bg-white shadow-md border-r border-gray-200 transform transition-transform duration-300 md:static md:translate-x-0
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <Sidebar />
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto p-4 md:p-6">
        {/* Top bar (only mobile) */}
        <div className="md:hidden flex items-center justify-between mb-4">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 rounded-md text-gray-600 hover:bg-gray-200"
          >
            <FaBars size={20} />
          </button>
          <h1 className="text-lg font-bold text-cyan-600">PulseCare</h1>
        </div>

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/doctor/addNew" element={<AddDoctor />} />
          <Route path="/admin/addNew" element={<AddAdmin />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
