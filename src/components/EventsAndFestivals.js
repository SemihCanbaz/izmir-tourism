import React from "react";
import "../styles/Home.css";

const events = [
  { month: "Ocak", name: "İzmir Kısa Film Festivali" },
  { month: "Şubat", name: "Uluslararası İzmir Tiyatro Festivali" },
  { month: "Mayıs", name: "İzmir Gençlik Festivali" },
  { month: "Haziran", name: "İzmir Uluslararası Müzik Festivali" },
  { month: "Eylül", name: "İzmir Enternasyonal Fuarı" },
  { month: "Ekim", name: "İzmir Kordon Boyu Festivali" },
];

function EventsAndFestivals() {
  return (
    <div className="events-container">
      <h2>İzmir'deki Yıllık Etkinlikler ve Festivaller</h2>
      <div className="events-grid">
        {events.map((event, index) => (
          <div key={index} className="event-card">
            <h3>{event.month}</h3>
            <p>{event.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventsAndFestivals;
