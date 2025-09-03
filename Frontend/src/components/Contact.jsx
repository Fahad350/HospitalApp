import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

function MessageForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleMessage = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/v1/message/send",
        { firstName, lastName, email, phone, message },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );

      toast.success(res.data.message);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <>
      <div name="Contact" className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="md:w-1/2 lg:text-left text-justify md:ml-28 ml-0">
            <h1 className="text-5xl font-bold text-cyan-600">Contact US!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <p className="py-6">
              +92303 02872892
              <br />
              <span>Contact@gmail.com</span>
            </p>
          </div>

          <div className="md:w1/2 card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleMessage}>
                <fieldset className="fieldset">
                  <label className="label">First Name</label>
                  <input
                    type="text"
                    value={firstName}
                    className="input"
                    placeholder="First Name"
                    onChange={(e) => setFirstName(e.target.value)}
                  />

                  <label className="label">Last Name</label>
                  <input
                    type="text"
                    value={lastName}
                    className="input"
                    placeholder="Last Name"
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

                  <label className="label">Phone</label>
                  <input
                    type="number"
                    value={phone}
                    className="input"
                    placeholder="Phone Number"
                    onChange={(e) => setPhone(e.target.value)}
                  />

                  <label className="label">Message</label>
                  <textarea
                    value={message}
                    className="h-25 input"
                    onChange={(e) => setMessage(e.target.value)}
                  />

                  <button
                    type="submit"
                    className="btn btn-neutral mt-4 bg-cyan-600 hover:bg-black hover:text-white"
                  >
                    Send Message
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

export default MessageForm;
