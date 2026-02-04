import React from "react";
import { NavLink } from "react-router-dom";

export default function HeaderComponent({ title = "App" }) {
  return (
    <header className="app-header">
      <h1 className="app-title">{title}</h1>
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
