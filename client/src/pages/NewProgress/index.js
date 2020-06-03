import React from "react";
import Header from "../../components/Header";
import BackIcon from "../../assets/backIcon";
import { Link, useParams } from "react-router-dom";

export default function NewProgress() {
  const { number } = useParams();
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
          <div className="intro__actions">
            <button className="save-btn bold bigger">Salvar</button>
          </div>
        </article>
        <textarea />
      </main>
    </div>
  );
}
