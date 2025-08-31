import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Context } from "../context/AuthContext";
import axios from "axios";
import { toast } from "react-toastify";

function Login() {
  const { isAuthenticated, setIsAuthenticated, setUser, loading } =
    useContext(Context);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigateTo = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/user/login",
        { email, password, role: "Admin" },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );

      toast.success(data.message);
      setIsAuthenticated(true);
      setUser(data.user);
      navigateTo("/");
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed");
    }
  };

  // ⏳ Wait for loading
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="loading loading-spinner text-cyan-500"></span>
      </div>
    );
  }

  // ✅ Already logged in → redirect to dashboard
  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  // 🚀 Render login form
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleLogin} className="p-6 bg-white rounded shadow-md">
        <h2 className="text-xl font-bold mb-4">Login (Admin)</h2>
        <input
          type="email"
          className="input mb-2"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          className="input mb-2"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-primary w-full">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
