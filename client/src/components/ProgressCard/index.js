import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

export default function ProgressCard({ date, hour, description, id, number }) {
  return (
    <Link to={`/progress/${number}/${id}`} style={{ textDecoration: "none" }}>
      <article className="progress-card bigger">
        <div className="time-section">
          <p className="bold">{date}</p>
          <p className="bold">{hour}</p>
        </div>
        <p className="progress-card__description">{description}</p>
      </article>
    </Link>
  );
}
