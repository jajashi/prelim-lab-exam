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
        <button
          className="btn ghost"
          onClick={toggleDetails}
          aria-pressed={!showDetails}
          aria-label={showDetails ? "Hide details" : "Show details"}
        >
          {showDetails ? (
            <>
              <svg className="icon" viewBox="0 0 24 24" role="img" aria-hidden="true"><path d="M12 5c-7 0-10 6.5-10 7s3 7 10 7 10-6.5 10-7-3-7-10-7zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/></svg>
              Hide
            </>
          ) : (
            <>
              <svg className="icon" viewBox="0 0 24 24" role="img" aria-hidden="true"><path d="M12 5c7 0 10 6.5 10 7s-3 7-10 7S2 13.5 2 13s3-7 10-8zm0 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/></svg>
              Show
            </>
          )}
        </button>

        <button className="btn primary" onClick={promote} aria-label="Promote student">
          <svg className="icon" viewBox="0 0 24 24" role="img" aria-hidden="true"><path d="M12 2l4 7h-3v9h-2v-9H8l4-7z"/></svg>
          Promote
        </button>

        {onRemove && (
          <button className="btn danger" onClick={handleRemove} title="Remove student" aria-label="Remove student">
            <svg className="icon" viewBox="0 0 24 24" role="img" aria-hidden="true"><path d="M6 7h12v13a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V7zm3-4h6l1 1h4v2H2V4h4l1-1z"/></svg>
            Remove
          </button>
        )}
      </div>
    </div>
  );
}
