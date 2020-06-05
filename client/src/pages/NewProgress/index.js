import React, { useState } from "react";
import Header from "../../components/Header";
import BackIcon from "../../assets/backIcon";
import { Link, useParams, useHistory } from "react-router-dom";
import progressService from "../../services/Progress";

export default function NewProgress() {
  const history = useHistory();
  const { number, id } = useParams();
  const [description, setDescription] = useState("");

  function handleChange(event) {
    setDescription(event.target.value);
  }

  async function saveProgress() {
    if (description.length) {
      const progress = {
        procedure: id,
        description,
      };
      const response = await progressService.newProgress(progress);
      if (response.status === 200) {
        alert("Andamento criado com sucesso");
        history.push(`/procedure/${number}/${id}`);
      } else {
        alert("Houve um erro ao criar o andamento.");
      }
    } else {
      alert("Por favor, preencha o andamento.");
    }
  }

  return (
    <div className="container">
      <Header />
      <main>
        <article className="intro">
          <Link
            to={`/procedure/${number}/${id}`}
            style={{ textDecoration: "none" }}
          >
            <div className="back">
              <BackIcon color="#DAF5E7" />
              <h1>Novo Andamento</h1>
            </div>
          </Link>
          <div className="intro__actions">
            <button onClick={saveProgress} className="save-btn bold bigger">
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
