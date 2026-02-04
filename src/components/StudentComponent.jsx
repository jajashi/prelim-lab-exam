import React, { useState } from "react";

// Displays a student's basic info and allows promoting them (increment year)
export default function StudentComponent({ name, course, year, onRemove }) {
  const [studentYear, setStudentYear] = useState(year || 1);
  const [showDetails, setShowDetails] = useState(true);

  const promote = (e) => {
    e.stopPropagation();
    setStudentYear((y) => y + 1);
  };

  const toggleDetails = (e) => {
    e.stopPropagation();
    setShowDetails((s) => !s);
  };

  const handleRemove = (e) => {
    e.stopPropagation();
    onRemove && onRemove();
  };

  return (
    <div className="student-card">
      <div className="student-info">
        <div className="student-name">{name}</div>
        {showDetails && (
          <div className="student-meta">
            <div>Course: {course}</div>
            <div>Year: {studentYear}</div>
          </div>
        )}
      </div>

      <div className="student-actions">
        <button className="btn ghost" onClick={toggleDetails} aria-pressed={!showDetails}>
          {showDetails ? "Hide" : "Show"}
        </button>
        <button className="btn primary" onClick={promote}>
          Promote
        </button>
        {onRemove && (
          <button className="btn danger" onClick={handleRemove} title="Remove student">
            Remove
          </button>
        )}
      </div>
    </div>
  );
}
