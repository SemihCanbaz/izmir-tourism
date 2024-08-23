import React from "react";
import { useParams } from "react-router-dom";
import efesImg from "../assets/Efes.jpeg";
import saatKulesiImg from "../assets/Saatkulesi.jpeg";
import cesmeKalesiImg from "../assets/CesmeKalesi.jpeg";
import kadifeKaleImg from "../assets/KadifeKale.jpeg";
import "../styles/PlaceDetail.css";

function PlaceDetail() {
  const { id } = useParams();

  const places = [
    {
      id: 1,
      title: "Efes Antik Kenti",
      description:
        "Efes, Antik Yunan döneminden kalma bir şehir olup, günümüzde İzmir'in Selçuk ilçesi yakınlarında yer almaktadır. Artemis Tapınağı gibi önemli tarihi yapıları barındırır.",
      imageUrl: efesImg,
      location: "Selçuk, İzmir, Türkiye",
      mapUrl:
        "https://maps.google.com/maps?q=efes%20antik%20kenti&t=&z=13&ie=UTF8&iwloc=&output=embed",
    },
    {
      id: 2,
      title: "Saat Kulesi",
      description: "Konak Meydanı'nda bulunan tarihi bir saat kulesidir.",
      imageUrl: saatKulesiImg,
      location: "Konak Meydanı, İzmir, Türkiye",
      mapUrl:
        "https://maps.google.com/maps?q=saat%20kulesi%20izmir&t=&z=13&ie=UTF8&iwloc=&output=embed",
    },
    {
      id: 3,
      title: "Çeşme Kalesi",
      description: "Çeşme Kalesi, Çeşme'de yer alan tarihi bir kaledir.",
      imageUrl: cesmeKalesiImg,
      location: "Çeşme, İzmir, Türkiye",
      mapUrl:
        "https://maps.google.com/maps?q=cesme%20kalesi&t=&z=13&ie=UTF8&iwloc=&output=embed",
    },
    {
      id: 4,
      title: "Kadifekale",
      description:
        "Kadifekale, İzmir'de yer alan bir antik kale ve tarihi mekandır.",
      imageUrl: kadifeKaleImg,
      location: "İzmir, Türkiye",
      mapUrl:
        "https://maps.google.com/maps?q=kadifekale%20izmir&t=&z=13&ie=UTF8&iwloc=&output=embed",
    },
  ];

  const placeData = places.find((place) => place.id === parseInt(id));

  if (!placeData) {
    return <p>Yer bulunamadı.</p>;
  }

  return (
    <div className="place-detail-container">
      <img
        src={placeData.imageUrl}
        alt={placeData.title}
        className="place-detail-image"
      />
      <div className="place-detail-info">
        <h2>{placeData.title}</h2>
        <p>{placeData.description}</p>
        <p>
          <strong>Konum:</strong> {placeData.location}
        </p>
      </div>
      <div className="map-container">
        <iframe
          src={placeData.mapUrl}
          title="Map"
          width="100%"
          height="300px"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default PlaceDetail;
