import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

export default function ProgressCard({ from, to, id }) {
  return (
    <Link to={`/rule/${id}`} style={{ textDecoration: "none" }}>
      <article className="rule-card bigger">
        <section>
          <p className="bold">De:</p>
          <p>{from}</p>
        </section>
        <section>
          <p className="bold">Para:</p>
          <p>{to}</p>
        </section>
      </article>
    </Link>
  );
}
