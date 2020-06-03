import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

export default function ProgressCard({ date, hour, description }) {
  return (
    <Link to="#" style={{ textDecoration: "none" }}>
      <article className="progress-card bigger">
        <div className="time-section">
          <p>{date}</p>
          <p>{hour}</p>
        </div>
        <p className="progress-card__description">{description}</p>
      </article>
    </Link>
  );
}
