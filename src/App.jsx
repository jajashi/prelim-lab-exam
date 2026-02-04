import React from "react";
import { Routes, Route } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import Home from "./pages/Home";
import Students from "./pages/Students";
import StudentDetail from "./pages/StudentDetail";

export default function App() {
  return (
    <div className="app">
      <HeaderComponent title="Student Info App" />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Students />} />
          <Route path="/students/:id" element={<StudentDetail />} />
        </Routes>
      </main>
    </div>
  );
}
