import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getSharedStudentData } from "../../services/studentService";
import { Spinner } from "react-bootstrap";

const SharePage = () => {
  const { token } = useParams();
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchSharedData = async () => {
      try {
        const data = await getSharedStudentData(token);
        setStudents(data);
      } catch (err) {
        setError("❌ Invalid or expired share token.");
      } finally {
        setLoading(false);
      }
    };

    fetchSharedData();
  }, [token]);

  const filteredStudents = students.filter(
    (s) =>
      s.email && s.email.toLowerCase().includes(search.trim().toLowerCase())
  );

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">📋Students Data</h2>

      {loading && (
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
        </div>
      )}

      {error && <div className="alert alert-danger text-center">{error}</div>}

      {!loading && !error && (
        <>
          <div className="mb-4 d-flex justify-content-center">
            <input
              type="text"
              className="form-control"
              style={{ maxWidth: 320 }}
              placeholder="Search by email"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="table-responsive">
            <table className="table table-striped table-bordered">
              <thead className="table-dark">
                <tr>
                  <th>Roll No</th>
                  <th>Name</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.length > 0 ? (
                  filteredStudents.map((s, idx) => (
                    <tr key={idx}>
                      <td>{s.roll_no}</td>
                      <td>
                        {s.first_name} {s.last_name}
                      </td>
                      <td>{s.email}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={3} className="text-center">
                      No students found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </>
      )}
      <div className="d-flex justify-content-center gap-3 mt-4 mb-5">
        <Link to="/" className="btn btn-outline-primary">
          🏠 Home
        </Link>
        <Link to="/admin" className="btn btn-outline-secondary">
          🔐 Admin Panel
        </Link>
      </div>
    </div>
  );
};

export default SharePage;
