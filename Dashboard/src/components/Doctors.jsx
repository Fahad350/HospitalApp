import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context/AuthContext";
import axios from "axios";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";

function Doctors() {
  const [doctors, setDoctors] = useState([]);
  const { isAuthenticated } = useContext(Context);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/user/doctors",
          { withCredentials: true }
        );
        setDoctors(data.doctors);
      } catch (error) {
        toast.error(error.response?.data?.message || "Failed to fetch doctors");
      }
    };
    fetchDoctors();
  }, []);

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  return (
    <div>
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-8">Doctors</h1>

      {doctors && doctors.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {doctors.map((element) => (
            <div
              key={element._id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
            >
              {/* Avatar */}
              <img
                src={element.docAvator?.url || "/default-avatar.png"}
                alt="doctor avatar"
                className="w-full h-48 object-cover"
              />

              {/* Info */}
              <div className="p-4">
                <h4 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                  {`${element.firstName} ${element.lastName}`}
                </h4>

                <div className="text-sm text-gray-600 space-y-1">
                  <p>
                    <span className="font-medium">Email:</span> {element.email}
                  </p>
                  <p>
                    <span className="font-medium">Phone:</span> {element.phone}
                  </p>
                  <p>
                    <span className="font-medium">CNIC:</span> {element.cnic}
                  </p>
                  <p>
                    <span className="font-medium">Department:</span>{" "}
                    {element.doctorDept}
                  </p>
                  <p>
                    <span className="font-medium">Dob:</span>{" "}
                    {element.dob.substring(0, 10)}
                  </p>
                  <p>
                    <span className="font-medium">Gender:</span>{" "}
                    {element.gender}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h2 className="text-center text-xl text-gray-600 font-medium">
          No Doctors Found!
        </h2>
      )}
    </div>
  );
}

export default Doctors;
