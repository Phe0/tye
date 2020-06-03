import React from "react";
import Header from "../../components/Header";
import BackIcon from "../../assets/backIcon";
import { Link, useParams } from "react-router-dom";
import "./style.scss";

export default function Progress() {
  const { number } = useParams();
  const date = "01/02/2020";
  const hour = "16:30";
  const description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a ornare leo. Praesent aliquet dignissim laoreet. Sed finibus lobortis vulputate. Duis vehicula ipsum at egestas rutr";
  return (
    <div className="container">
      <Header />
      <main>
        <article className="intro">
          <Link to={`/procedure/${number}`} style={{ textDecoration: "none" }}>
            <div className="back">
              <BackIcon color="#DAF5E7" />
              <h1>Andamento</h1>
            </div>
          </Link>
        </article>
        <section className="show-text">
          <div className="date-hour">
            <p className="bold">{date}</p>
            <p className="bold">{hour}</p>
          </div>
          <p className="description">{description}</p>
        </section>
      </main>
    </div>
  );
}
