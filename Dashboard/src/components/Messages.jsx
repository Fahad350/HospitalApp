import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context/AuthContext";
import axios from "axios";
import { Navigate } from "react-router-dom";

function Messages() {
  const { isAuthenticated } = useContext(Context);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/message/all/messages",
          { withCredentials: true }
        );

        console.log("API response:", data);

        setMessages(Array.isArray(data?.message) ? data.message : []);
      } catch (error) {
        console.log("error fetching all messages", error);
        setMessages([]);
      }
    };
    fetchMessage();
  }, []);

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  return (
    <div
      className="w-full h-full bg-cover bg-center rounded-xl p-6"
      style={{ backgroundImage: "url('/msg4.jpg')" }}
    >
      <h1 className="text-3xl font-bold mb-6 text-cyan-300 text-center">
        Messages
      </h1>

      {messages.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {messages.map((msg) => (
            <div
              key={msg._id}
              className="bg-white shadow-md rounded-2xl p-5 border border-gray-200 hover:shadow-lg transition"
            >
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {msg.firstName} {msg.lastName}
              </h2>
              <p className="text-sm text-gray-600 mb-1">
                <span className="font-medium">Email:</span> {msg.email}
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <span className="font-medium">Phone:</span> {msg.phone}
              </p>
              <p className="text-gray-700">{msg.message}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-200 text-center">No messages found.</p>
      )}
    </div>
  );
}

export default Messages;
