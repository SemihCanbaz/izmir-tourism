// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Place from "./pages/Place";
import Header from "./components/Header"; // Header bileşenini içe aktarın

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/place" element={<Place />} />
      </Routes>
    </Router>
  );
}

export default App;
