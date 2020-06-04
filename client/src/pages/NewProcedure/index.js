import React, { useState } from "react";
import Header from "../../components/Header";
import BackIcon from "../../assets/backIcon";
import { Link, useParams } from "react-router-dom";
import InputMask from "react-input-mask";

export default function NewProcedure() {
  const { number } = useParams();
  const [cpf, setCpf] = useState("");
  const [procedureNumber, setProcedureNumber] = useState("");

  function handleCPF(event) {
    setCpf(event.target.value);
  }

  function handleNumber(event) {
    setProcedureNumber(event.target.value);
  }

  function saveProcedure() {
    const procedure = {
      number: procedureNumber,
      cpf,
    };
  }

  return (
    <div className="container">
      <Header />
      <main>
        <article className="intro">
          <Link to={`/procedures`} style={{ textDecoration: "none" }}>
            <div className="back">
              <BackIcon color="#DAF5E7" />
              <h1>Novo Processo</h1>
            </div>
          </Link>
          <div className="intro__actions">
            <button onClick={saveProcedure} className="save-btn bold bigger">
              Salvar
            </button>
          </div>
        </article>
        <article className="rule__input-area">
          <h3 className="bold">Número do Processo</h3>
          <InputMask
            type="text"
            mask="99999999999999999999"
            value={procedureNumber}
            onChange={handleNumber}
          />
        </article>
        <article className="rule__input-area">
          <h3 className="bold">CPF do Cliente</h3>
          <InputMask
            type="text"
            mask="999.999.999-99"
            value={cpf}
            onChange={handleCPF}
          />
        </article>
      </main>
    </div>
  );
}
