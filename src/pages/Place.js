// src/pages/Place.js
import React, { useEffect, useState } from "react";
import PlaceList from "../components/PlaceList"; // PlaceList bileşenini içe aktarın
import "../styles/Place.css"; // Bu sayfa için özel stil dosyanızı oluşturabilirsiniz

function Place() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    fetch("/data/places.json")
      .then((response) => response.json())
      .then((data) => setPlaces(data))
      .catch((error) =>
        console.error("Veri yüklenirken bir hata oluştu:", error)
      );
  }, []);

  return (
    <div className="place-container">
      <header className="place-header">
        <h1>İzmir'deki Turistik Yerler</h1>
        <p>
          Burada İzmir'deki çeşitli turistik yerleri harita üzerinde
          görebilirsiniz. Her bir yer hakkında detaylı bilgi almak için harita
          işaretçilerine tıklayın.
        </p>
      </header>
      <PlaceList places={places} />
    </div>
  );
}

export default Place;
