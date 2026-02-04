import React from "react";
import { NavLink } from "react-router-dom";
import Icon from "./Icon";

export default function HeaderComponent({ title = "App" }) {
  return (
    <header className="app-header">
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <Icon name="logo" className="logo" />
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
