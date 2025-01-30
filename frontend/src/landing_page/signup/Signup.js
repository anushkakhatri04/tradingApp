import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", data);
    try {
      const url = "http://localhost:3002/api/users";
      const { data: res } = await axios.post(url, data);
      toast.success("Signup successful! Redirecting to login...", { position: "bottom-right" });
      setTimeout(() => navigate("/login"), 1500);
      console.log(res.message);
    } catch (err) {
      if (err.response && err.response.status >= 400 && err.response.status <= 500) {
        setError(err.response.data.message);
        toast.error(err.response.data.message, { position: "bottom-right" });
      }
    }
  };

  return (
    <div className="container p-5 all-frontend-hero-con">
      <div className="row d-flex justify-content-center ">
        <div className="col-4 form-box">
          <h1 className="text-center">Signup</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                value={data.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                value={data.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={data.email}
                onChange={handleChange}
                required
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mt-4 d-flex justify-content-evenly">
              <Link to="/login" className="btn-link">
                Already a user
              </Link>
            </div>
            <div className="d-flex justify-content-center mt-3">
              {error && <div className="error-msg text-danger">{error}</div>}
              <button type="submit" className="btn btn-primary">
                Signup
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Signup;
