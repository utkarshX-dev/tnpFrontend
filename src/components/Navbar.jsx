import { Link } from "react-router-dom";

export default function Navbar() {
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
                  <i className="fa-solid fa-user-shield me-2"></i>
                  Admin
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link fw-medium text-dark"
                  href="/share/demoToken123"
                  rel="noopener noreferrer"
                >
                  <i className="fa-solid fa-users me-2"></i>
                  Students
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-medium text-dark" href="#footer">
                  <i className="fa-solid fa-envelope me-2"></i>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}