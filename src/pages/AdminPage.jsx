import { useState } from "react";
import axios from "axios";
import AdminLogin from "./AdminLogin";
import { Link } from "react-router-dom";

const AdminPage = () => {
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("accessToken") || ""
  );
  const [shareLink, setShareLink] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (username, password) => {
    try {
      const res = await axios.post(
        "https://tnp-recruitment-challenge.manitvig.live/login",
        {
          username,
          password,
        }
      );

      localStorage.setItem("accessToken", res.data.accessToken);
      setAccessToken(res.data.accessToken);
      setMessage("✅ Login successful");
    } catch (err) {
      setMessage("❌ Username or Password is incorrect");
    }
  };

  const generateToken = async () => {
    try {
      const res = await axios.post(
        "https://tnp-recruitment-challenge.manitvig.live/share",
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      const token = res.data.shareToken;
      const link = `${window.location.origin}/share/${token}`;
      setShareLink(link);
      setMessage("✅ Share token generated!");
    } catch (err) {
      console.error(err);
      setMessage("❌ Failed to generate token");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    setAccessToken("");
    setShareLink("");
    setMessage("");
  };

  return (
    <div className="container mt-5 d-flex justify-content-center align-items-center flex-column">
      {message && (
        <div
          className={`alert text-center ${
            message.startsWith("✅")
              ? "alert-success"
              : message.startsWith("❌")
              ? "alert-danger"
              : "alert-warning"
          }`}
        >
          {message}
        </div>
      )}

      {!accessToken ? (
        <>
          <AdminLogin onLogin={handleLogin} />
          <div className="text-center mt-3">
            <Link to="/" className="text-decoration-none">
              ⬅️ Back to Home
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="d-flex flex-wrap gap-3 align-items-center mb-4">
            <button onClick={generateToken} className="btn btn-success">
              Generate Share Link
            </button>
            <button onClick={handleLogout} className="btn btn-outline-danger">
              Logout
            </button>
            <Link to="/" className="btn btn-outline-secondary">
              Home
            </Link>
          </div>

          {shareLink && (
            <div className="alert alert-info text-center">
              <strong>Share this link:</strong>
              <br />
              <a href={shareLink} target="_blank" rel="noopener noreferrer">
                {shareLink}
              </a>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default AdminPage;
