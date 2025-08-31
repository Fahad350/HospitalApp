import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Context } from "../context/AuthContext";

function Dashboard() {
  const { isAuthenticated, user, loading } = useContext(Context);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <span className="loading loading-spinner text-cyan-500"></span>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800">
        Welcome {user?.firstName || "User"}!
      </h1>
      <p className="mt-2 text-gray-600">This is your dashboard.</p>
    </div>
  );
}

export default Dashboard;
