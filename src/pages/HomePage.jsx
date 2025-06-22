import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg shadow-sm py-3">
        <div className="container">
          <Link className="navbar-brand fw-bold fs-4 text-dark" to="/">
            🛠️ TnP Dashboard
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto text-center text-lg-start">
              <li className="nav-item">
                <Link className="nav-link fw-medium text-dark" to="/admin">
                  Admin
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link fw-medium text-dark"
                  href="/share/demoToken123"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Students
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="hero-section d-flex align-items-center justify-content-center text-center">
        <div className="overlay"></div>
       <div className="content text-white px-3 text-center">
          <h1 className="fw-bold mb-3">Shaping Futures with Opportunities<br/>
Training and Placement Cell, Delhi Technological University</h1>
          <p className="lead mb-4">
            Use the admin panel to generate shareable student data links securely.
          </p>
          <Link to="/admin" className="btn btn-primary btn-lg shadow-sm">
            Go to Admin Panel
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomePage;
