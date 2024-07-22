// src/pages/Home.js
import React from "react";
import PlaceList from "../components/PlaceList";
import "../styles/Home.css";

function Home({ places }) {
  return (
    <div className="container">
      <header className="hero">
        <h1>İzmir'in Tarihi ve Turistik Yerleri</h1>
        <p>
          Bu proje, İzmir'in önemli tarihî ve turistik yerlerini keşfetmenizi
          sağlar. Harita üzerinde gezilecek yerleri görüntüleyebilir ve her bir
          yer hakkında detaylı bilgi alabilirsiniz.
        </p>
      </header>
      <section className="places">
        <h2>Öne Çıkan Yerler</h2>
        <PlaceList places={places} />
      </section>
    </div>
  );
}

export default Home;
