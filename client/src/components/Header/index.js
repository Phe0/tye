import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.scss";

export default function Header() {
  let location = useLocation();
  return (
    <header className="header">
      <img src={require("../../assets/Logo.png")} alt="logo" />
      <nav className="navigation">
        <Link to="/rules" style={{ textDecoration: "none" }}>
          <button
            className={`navigation__button ${
              location.pathname === "/rules" ? "selected" : "bigger"
            }`}
          >
            Regras
          </button>
        </Link>
        <Link to="/procedures" style={{ textDecoration: "none" }}>
          <button
            className={`navigation__button ${
              location.pathname === "/procedures" ? "selected" : "bigger"
            }`}
          >
            Processos
          </button>
        </Link>
      </nav>
    </header>
  );
}
