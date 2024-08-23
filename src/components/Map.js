import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";
import "../styles/Map.css";

function Map({ places }) {
  return (
    <div className="map-container">
      <MapContainer
        center={[38.4237, 27.1428]}
        zoom={10}
        style={{ height: "300px", width: "100%" }} // Harita boyutlarını ayarladık
        className="map"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {places.map((place) => (
          <Marker key={place.id} position={place.position}>
            <Popup>
              <Link to={`/place/${place.id}`}>{place.name}</Link>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Map;
