import React, { useState } from "react";
import axios from "axios";
import { Link,  useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



function Login() {
  const [data, setData] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });

  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:3002/api/auth";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);

      handleSuccess("Login successful! Redirecting to Dashboard...");
      
      setTimeout(() => {
        window.location.href = "http://localhost:3001/";
      }, 1500);
    } catch (err) {
      if (err.response && err.response.status >= 400 && err.response.status <= 500) {
        const errorMessage = err.response.data.message || "An error occurred";
        handleError(errorMessage);
      }
    }
  };

  return (
    <div className="container p-5 all-frontend-hero-con">
      <div className="row d-flex justify-content-center">
        <div className="col-4 form-box">
          <h1 className="text-center">Login</h1>
          <form onSubmit={handleSubmit}>
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
              <Link to="/signup" className="btn-link">
                Don't have an account? Create an Account
              </Link>
            </div>
            <div className="d-flex justify-content-center mt-3">
              {error && <div className="text-danger">{error}</div>}
              <button type="submit" className="btn btn-primary">
                Log in
              </button>
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}

export default Login;
