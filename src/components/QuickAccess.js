import React from "react";
import "../styles/Home.css";

const quickAccessPlaces = [
  { name: "Konak Meydanı", link: "#konak" },
  { name: "Kordon Boyu", link: "#kordon" },
  { name: "Alaçatı", link: "#alacati" },
  { name: "Efes Antik Kenti", link: "#efes" },
];

function QuickAccess() {
  return (
    <div className="quick-access-container">
      <h2>Hızlı Erişim</h2>
      <div className="quick-access-buttons">
        {quickAccessPlaces.map((place, index) => (
          <a key={index} href={place.link} className="quick-access-button">
            {place.name}
          </a>
        ))}
      </div>
    </div>
  );
}

export default QuickAccess;
