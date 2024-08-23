import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Place.css";

function Place() {
  const [searchTerm, setSearchTerm] = useState("");

  const places = [
    {
      id: 1,
      name: "Efes Antik Kenti",
      description:
        "Efes, İzmir'in Selçuk ilçesinde bulunan antik bir Yunan kentidir.",
      image: require("../assets/Efes.jpeg"),
    },
    {
      id: 2,
      name: "Saat Kulesi",
      description: "Konak Meydanı'nda bulunan tarihi bir saat kulesidir.",
      image: require("../assets/Saatkulesi.jpeg"),
    },
    {
      id: 3,
      name: "Çeşme Kalesi",
      description: "Çeşme Kalesi, Çeşme'de yer alan tarihi bir kaledir.",
      image: require("../assets/CesmeKalesi.jpeg"),
    },
    {
      id: 4,
      name: "Kadifekale",
      description:
        "Kadifekale, İzmir'de yer alan bir antik kale ve tarihi mekandır.",
      image: require("../assets/KadifeKale.jpeg"),
    },
  ];

  const filteredPlaces = places.filter(
    (place) =>
      place.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      place.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="place-list">
      <input
        type="text"
        placeholder="Arama yap..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {filteredPlaces.map((place) => (
        <div className="place-item" key={place.id}>
          <Link to={`/place/${place.id}`}>
            <div className="map-container">
              <img src={place.image} alt={place.name} className="map" />
            </div>
            <div className="place-info">
              <h3>{place.name}</h3>
              <p className="paragraf">{place.description}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Place;
