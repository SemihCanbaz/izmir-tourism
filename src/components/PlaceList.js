import React from "react";
import { Link } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "../styles/PlaceList.css";
import markerIcon from "../assets/marker-icon.png"; // Düzgün yol kullanın

const locationIcon = new L.Icon({
  iconUrl: markerIcon,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

function PlaceList({ places }) {
  return (
    <div className="place-list">
      {places.map((place) => (
        <div key={place.id} className="place-item">
          <div className="map-container">
            <MapContainer
              center={place.position}
              zoom={13}
              style={{ height: "200px", width: "100%" }}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={place.position} icon={locationIcon}>
                <Popup>
                  <Link to={`/place/${place.id}`}>{place.name}</Link>
                </Popup>
              </Marker>
            </MapContainer>
          </div>
          <div className="place-info">
            <h3>{place.name}</h3>
            <p>{place.description}</p>
            <Link to={`/place/${place.id}`}>Detaylar</Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PlaceList; // Bu dosyada sadece bir `export default` olmalı
