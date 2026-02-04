import React from "react";
import { NavLink } from "react-router-dom";

export default function HeaderComponent({ title = "App" }) {
  return (
    <header className="app-header">
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <svg className="logo" viewBox="0 0 24 24" role="img" aria-hidden="true">
          <path d="M12 2C7.58 2 4 5.58 4 10c0 5 8 12 8 12s8-7 8-12c0-4.42-3.58-8-8-8zM12 12a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
        </svg>
        <h1 className="app-title">{title}</h1>
      </div>
      <nav className="app-nav">
        <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "") }>
          Home
        </NavLink>
        <NavLink to="/students" className={({ isActive }) => (isActive ? "active" : "") }>
          Students
        </NavLink>
      </nav>
    </header>
  );
}
