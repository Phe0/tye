import React from "react";
import PlusIcon from "../../assets/plusIcon";
import { Link } from "react-router-dom";
import "./style.scss";

export default function SearchInput({ to }) {
  return (
    <Link to={to} style={{ textDecoration: "none" }}>
      <button className="new-button bigger">
        <PlusIcon color="#1C2420" />
      </button>
    </Link>
  );
}
