import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <>
      <div className="w3-top">
        <div className="w3-bar w3-theme-d2 w3-left-align w3-large">
          <button
            className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-theme-d2"
            onClick={toggleNav}
          >
            <i className="fa fa-bars"></i>
          </button>

          <Link to="/" className="w3-bar-item w3-button w3-padding-large w3-theme-d4">
            <i className="fa fa-home w3-margin-right"></i>Inicio
          </Link>
          <Link to="/social" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">
            Social
          </Link>
          <Link to="/login" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">
            Login
          </Link>
          <Link to="/register" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">
            Registro
          </Link>

          <div className="w3-dropdown-hover w3-hide-small">
            <button className="w3-button w3-padding-large" title="Notifications">
              <i className="fa fa-bell"></i>
              <span className="w3-badge w3-right w3-small w3-green">3</span>
            </button>
            <div className="w3-dropdown-content w3-card-4 w3-bar-block" style={{ width: "300px" }}>
              <Link to="/social" className="w3-bar-item w3-button">
                One new friend request
              </Link>
              <Link to="/social" className="w3-bar-item w3-button">
                John Doe posted on your wall
              </Link>
              <Link to="/social" className="w3-bar-item w3-button">
                Jane likes your post
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Menú colapsado en pantallas pequeñas */}
      <div
        id="navDemo"
        className={`w3-bar-block w3-theme-d2 w3-hide w3-hide-large w3-hide-medium w3-large ${
          showNav ? "w3-show" : ""
        }`}
      >
        <Link to="/" className="w3-bar-item w3-button w3-padding-large">
          Inicio
        </Link>
        <Link to="/social" className="w3-bar-item w3-button w3-padding-large">
          Social
        </Link>
        <Link to="/login" className="w3-bar-item w3-button w3-padding-large">
          Login
        </Link>
        <Link to="/register" className="w3-bar-item w3-button w3-padding-large">
          Registro
        </Link>
      </div>
    </>
  );
}
