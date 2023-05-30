import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login, Register, MainApp } from "../../pages"

export default function Routess() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<MainApp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  )
}
