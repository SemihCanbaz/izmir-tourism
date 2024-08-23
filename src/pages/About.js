// src/pages/About.js
import React from "react";
import linkedinIcon from "../assets/linkedin.png";
import githubIcon from "../assets/github.png";
import mailIcon from "../assets/gmail.png";
import "../styles/About.css"; // About için stil dosyasını içe aktarın

function About() {
  return (
    <div className="about-container">
      <div className="about-card">
        <h2>Hakkında</h2>
        <p>
          Bu proje İzmir'in tarihi ve turistik yerlerini tanıtmak amacıyla
          yapılmıştır. Projemiz, İzmir'in gezilecek yerleri hakkında bilgi
          vermeyi, haritalar ve görseller ile bu yerleri tanıtmayı
          hedeflemektedir.
        </p>
        <div className="contact-info">
          <a
            href="https://www.linkedin.com/in/semih-canbaz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
          <a
            href="https://github.com/semihcanbaz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubIcon} alt="GitHub" />
          </a>
          <a href="mailto:semihcanbaz@example.com">
            <img src={mailIcon} alt="Mail" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
