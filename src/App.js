// src/App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PlaceDetail from "./pages/PlaceDetail";

function App() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    fetch("/data/places.json")
      .then((response) => response.json())
      .then((data) => setPlaces(data))
      .catch((error) => console.error("Error loading places data:", error));
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home places={places} />} />
        <Route path="/place/:id" element={<PlaceDetail places={places} />} />
      </Routes>
    </Router>
  );
}

export default App;
