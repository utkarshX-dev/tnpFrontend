import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <>
      <div className="hero-section d-flex align-items-center justify-content-center text-center">
        <div className="overlay"></div>
        <div className="content text-white px-3 text-center">
          <h1 className="fw-bold mb-3">
            Shaping Futures with Opportunities
            <br />
            Training and Placement Cell, Delhi Technological University
          </h1>
          <p className="lead mb-4">
            Use the admin panel to securely generate shareable tokens for
            student data links.
          </p>
          <Link to="/admin" className="btn btn-primary btn-lg shadow-sm">
            Go to Admin Panel
          </Link>
        </div>
      </div>
    </>
  );
}
