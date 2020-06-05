import React from "react";
import "./style.scss";

export default function Empty({ label }) {
  return (
    <div className="empty">
      <img src={require("../../assets/LogoSecondary.png")} alt="Logo" />
      <p>{label}</p>
    </div>
  );
}
