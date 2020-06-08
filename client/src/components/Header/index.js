import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import "./style.scss";
import isLawyer from "../../utils/isLawyer";

export default function Header() {
  const location = useLocation();
  const history = useHistory();

  function logout() {
    localStorage.removeItem("accessToken");
    history.push("/");
  }

  return (
    <header className="header">
      <img src={require("../../assets/Logo.png")} alt="logo" />

      <nav className="navigation">
        {isLawyer() && (
          <Link to="/rules" style={{ textDecoration: "none" }}>
            <button
              className={`navigation__button ${
                location.pathname === "/rules" ? "selected" : "bigger"
              }`}
            >
              Regras
            </button>
          </Link>
        )}
        {isLawyer() && (
          <Link to="/procedures" style={{ textDecoration: "none" }}>
            <button
              className={`navigation__button ${
                location.pathname === "/procedures" ? "selected" : "bigger"
              }`}
            >
              Processos
            </button>
          </Link>
        )}
        {localStorage.getItem("accessToken") && (
          <button
            onClick={() => logout()}
            className="navigation__button bigger"
          >
            Sair
          </button>
        )}
      </nav>
    </header>
  );
}
