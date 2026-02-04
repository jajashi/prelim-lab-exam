import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchUsers } from "../services/api";
import StudentComponent from "../components/StudentComponent";

export default function Students() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    setError(null);

    fetchUsers()
      .then((data) => {
        if (!mounted) return;
        // map users to student-like shape
        setUsers(
          data.map((u) => ({ id: u.id, name: u.name, course: u.company?.bs || "General", year: 1 }))
        );
      })
      .catch((err) => {
        if (!mounted) return;
        setError(err.message || "Failed to fetch");
      })
      .finally(() => mounted && setLoading(false));

    return () => (mounted = false);
  }, []);

  if (loading) return <div className="loading">Loading students...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div>
      <h2>Students from API</h2>
      {users.length === 0 && <div>No students found.</div>}

      {users.map((u) => (
        <div key={u.id}>
          <Link to={`/students/${u.id}`} style={{ textDecoration: "none" }}>
            <StudentComponent name={u.name} course={u.course} year={u.year} />
          </Link>
        </div>
      ))}
    </div>
  );
}
