import React, { useState } from "react";
import { EyeIcon, EyeSlashIcon, ArrowUpIcon, TrashIcon } from "@heroicons/react/24/outline";

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
              <EyeSlashIcon className="icon" />
              Hide
            </>
          ) : (
            <>
              <EyeIcon className="icon" />
              Show
            </>
          )}
        </button>

        <button className="btn primary" onClick={promote} aria-label="Promote student">
          <ArrowUpIcon className="icon" />
          Promote
        </button>

        {onRemove && (
          <button className="btn danger" onClick={handleRemove} title="Remove student" aria-label="Remove student">
            <TrashIcon className="icon" />
            Remove
          </button>
        )}
      </div>
    </div>
  );
}
