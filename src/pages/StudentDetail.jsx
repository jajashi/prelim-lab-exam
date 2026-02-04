import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function StudentDetail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [student, setStudent] = useState(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    setError(null);

    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => mounted && setStudent(res.data))
      .catch((err) => mounted && setError(err.message || "Failed to load"))
      .finally(() => mounted && setLoading(false));

    return () => (mounted = false);
  }, [id]);

  if (loading) return <div className="loading">Loading student...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  if (!student) return <div>No student found</div>;

  return (
    <div>
      <h2>{student.name}</h2>
      <div>
        <strong>Email:</strong> {student.email}
      </div>
      <div>
        <strong>Company:</strong> {student.company?.name}
      </div>
      <div>
        <strong>Website:</strong> {student.website}
      </div>
    </div>
  );
}
