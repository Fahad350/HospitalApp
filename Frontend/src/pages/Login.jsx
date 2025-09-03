import React, { useContext, useState } from "react";
import { Context } from "../main";
import { Navigate, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function Login() {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigateTo = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/v1/user/login",
        { email, password, confirmPassword, role: "Patient" },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(res.data.message);
      setIsAuthenticated(true);
      navigateTo("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (isAuthenticated) {
    return <Navigate to={"/"} />;
  }
  return (
    <>
      <div className="hero bg-base-200 min-h-screen  bg-[url('/login1.png')] sm:w-full sm:h-screen sm:object-cover">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left md:ml-30 ml-0">
            <h1 className="text-5xl font-bold text-cyan-700 md:mt-33">
              Login now!
            </h1>
            <p className="py-6 text-justify text-2xl">
              A PulseCare is a healthcare institution that provides treatment
              and care for sick and injured people, utilizing medical equipment
              and trained staff. If you want to take appointment of your doctor
              then please
              <Link to={"/register"}>
                <span className="link link-hover text-3xl text-cyan-900 hover:scale-110 duration-300 cursor-pointer ml-2">
                  Register
                </span>{" "}
              </Link>
              .
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm md:mt-30 mt-0 shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <fieldset className="fieldset">
                  <label className="label">Email</label>
                  <input
                    type="email"
                    className="input"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label className="label">Password</label>
                  <input
                    type="password"
                    className="input"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label className="label">Confirm Password</label>
                  <input
                    type="password"
                    className="input"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <div>
                    <span>if you don't have an account please</span>
                    <Link to={"/register"}>
                      {" "}
                      <a className="link link-hover ml-2 text-cyan-500">
                        Register?
                      </a>
                    </Link>
                  </div>
                  <button className="btn btn-neutral mt-4 bg-cyan-500 hover:scale-110 duration-300">
                    Login
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
