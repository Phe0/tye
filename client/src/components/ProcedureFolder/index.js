import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

export default function ProcedureFolder({ number, cpf, id }) {
  return (
    <Link to="#" style={{ textDecoration: "none" }}>
      <article className="folder bigger">
        <div className="folder__tag"></div>
        <div className="folder__content">
          <p className="bold">{number}</p>
          <p className="bold">{cpf}</p>
        </div>
      </article>
    </Link>
  );
}
