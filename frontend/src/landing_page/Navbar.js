import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Check if user is logged in by looking for token in localStorage
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); 
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login"); 
  };

  return (
    <nav className="navbar navbar-expand-lg border-bottom" style={{ backgroundColor: "#fff" }}>
      <div className="container p-2">
        <Link className="navbar-brand" to="/">
          <img src="media/images/logo.svg" style={{ width: "25%" }} alt="Logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex" role="search">
            <ul className="navbar-nav mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/signup">
                  Signup
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/product">
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/support">
                  Support
                </Link>
              </li>

              <li className="nav-item dropdown">
                <button
                  className="nav-link btn"
                  onClick={toggleMenu}
                  style={{ border: "none", background: "none" }}
                >
                  ☰
                </button>
                {isOpen && (
                  <ul className="dropdown-menu show" style={{ position: "absolute", right: 0 }}>
                    {!isLoggedIn ? (
                      <>
                        <li>
                          <Link className="dropdown-item" to="/login">
                            Login for the Dashboard
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/signup">
                            Signup to go to the Dashboard
                          </Link>
                        </li>
                      </>
                    ) : (
                      <>
                        <li>
                          <Link className="dropdown-item" to="/dashboard">
                            Go to Dashboard
                          </Link>
                        </li>
                        <li>
                          <button className="dropdown-item" onClick={handleLogout}>
                            Logout
                          </button>
                        </li>
                      </>
                    )}
                  </ul>
                )}
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
