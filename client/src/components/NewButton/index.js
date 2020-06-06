import React from "react";
import PlusIcon from "../../assets/plusIcon";
import { Link } from "react-router-dom";
import "./style.scss";
import isLawyer from "../../utils/isLawyer";

export default function SearchInput({ to }) {
  if (isLawyer()) {
    return (
      <Link to={to} style={{ textDecoration: "none" }}>
        <button className="new-button bigger">
          <PlusIcon />
        </button>
      </Link>
    );
  } else {
    return null;
  }
}
