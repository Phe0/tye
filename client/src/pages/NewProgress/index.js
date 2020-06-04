import React, { useState } from "react";
import Header from "../../components/Header";
import BackIcon from "../../assets/backIcon";
import { Link, useParams } from "react-router-dom";

export default function NewProgress() {
  const { number } = useParams();
  const [description, setDescription] = useState("");

  function handleChange(event) {
    setDescription(event.target.value);
  }

  function saveProgress() {
    const progress = {
      procedure: number,
      description,
    };
  }

  return (
    <div className="container">
      <Header />
      <main>
        <article className="intro">
          <Link to={`/procedure/${number}`} style={{ textDecoration: "none" }}>
            <div className="back">
              <BackIcon color="#DAF5E7" />
              <h1>Novo Andamento</h1>
            </div>
          </Link>
          <div className="intro__actions">
            <button onClick={handleChange} className="save-btn bold bigger">
              Salvar
            </button>
          </div>
        </article>
        <article className="rule__input-area">
          <h3 className="bold">Descrição</h3>
          <textarea value={description} onChange={handleChange} />
        </article>
      </main>
    </div>
  );
}
