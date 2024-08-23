import React from "react";
import "../styles/Home.css";
import izmirImage from "../assets/izmir.jpeg";
import EventsAndFestivals from "../components/EventsAndFestivals";
import RoutePlanner from "../components/RoutePlanner";
import QuickAccess from "../components/QuickAccess";

function Home() {
  return (
    <div className="home-container">
      <section className="hero-image-wrapper">
        <div
          className="hero-image"
          style={{ backgroundImage: `url(${izmirImage})` }}
        ></div>
        <div className="hero-message">
          <h1>İzmir'in Tarihi ve Turistik Yerleri</h1>
          <p>
            Bu proje, İzmir'in önemli tarihî ve turistik yerlerini keşfetmenizi
            sağlar. Harita üzerinde gezilecek yerleri görüntüleyebilir ve her
            bir yer hakkında detaylı bilgi alabilirsiniz.
          </p>
        </div>
      </section>

      <section className="additional-sections">
        <div className="events-and-festivals-section">
          <EventsAndFestivals />
        </div>
        <div className="route-planner-section">
          <RoutePlanner />
        </div>
        <div className="quick-access-section">
          <QuickAccess />
        </div>
      </section>
    </div>
  );
}

export default Home;
