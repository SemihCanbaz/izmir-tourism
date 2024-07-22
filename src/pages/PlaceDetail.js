// src/pages/PlaceDetail.js
import React from "react";
import { useParams } from "react-router-dom";

function PlaceDetail({ places }) {
  const { id } = useParams();
  const place = places.find((p) => p.id === parseInt(id));

  if (!place) {
    return <p>Yer bulunamadı.</p>;
  }

  return (
    <div>
      <h2>{place.name}</h2>
      <p>{place.description}</p>
      <p>Koordinatlar: {place.position.join(", ")}</p>
    </div>
  );
}

export default PlaceDetail;
