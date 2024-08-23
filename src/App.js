// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Place from "./pages/Place";
import About from "./pages/About";
import PlaceDetail from "./pages/PlaceDetail"; // PlaceDetail bileşenini içe aktarın
import Header from "./components/Header"; // Header bileşenini içe aktarın

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/place" element={<Place />} />
        <Route path="/about" element={<About />} />
        <Route path="/place/:id" element={<PlaceDetail />} />{" "}
        {/* PlaceDetail sayfası için rota */}
      </Routes>
    </Router>
  );
}

export default App;
