import React, { useState } from "react";
import "../styles/Home.css";

const places = [
  "Konak Meydanı",
  "Kordon Boyu",
  "Alaçatı",
  "Efes Antik Kenti",
  "Şirince Köyü",
];

function RoutePlanner() {
  const [selectedPlaces, setSelectedPlaces] = useState([]);

  const handleSelect = (place) => {
    setSelectedPlaces((prev) =>
      prev.includes(place) ? prev.filter((p) => p !== place) : [...prev, place]
    );
  };

  return (
    <div className="route-planner-container">
      <h2>Rota Oluşturucu</h2>
      <div className="places-list">
        {places.map((place, index) => (
          <div
            key={index}
            className={`place-item ${
              selectedPlaces.includes(place) ? "selected" : ""
            }`}
            onClick={() => handleSelect(place)}
          >
            {place}
          </div>
        ))}
      </div>
      <div className="selected-places">
        <h3>Seçilen Yerler:</h3>
        <ul>
          {selectedPlaces.map((place, index) => (
            <li key={index}>{place}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RoutePlanner;
