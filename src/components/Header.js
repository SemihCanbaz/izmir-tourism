import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css"; // Header için stil dosyasını içe aktarın
import logoImg from "../assets/logo.jpg.webp"; // Logo resmini içe aktarın

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/">
          <img src={logoImg} alt="İzmir Turizm Logo" className="logo" />
        </Link>
        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/">Ana Sayfa</Link>
            </li>
            <li>
              <Link to="/place">Turistik Yerler</Link>
            </li>
            <li>
              <Link to="/about">Hakkında</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
