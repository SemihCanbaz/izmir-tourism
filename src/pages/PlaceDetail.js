// src/pages/PlaceDetail.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/PlaceDetail.css";

function PlaceDetail() {
  const { id } = useParams();
  const [place, setPlace] = useState(null);

  useEffect(() => {
    fetch("/data/places.json")
      .then((response) => response.json())
      .then((data) => {
        const foundPlace = data.find((p) => p.id === id);
        setPlace(foundPlace);
      })
      .catch((error) => console.error("Error fetching place details:", error));
  }, [id]);

  if (!place) return <div>Loading...</div>;

  return (
    <div className="place-detail">
      <h1>{place.name}</h1>
      <p>{place.description}</p>
      {/* Diğer detaylar ve harita gibi içerikler buraya eklenebilir */}
    </div>
  );
}

export default PlaceDetail;
