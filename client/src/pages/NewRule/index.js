import React, { useState, useRef, useEffect } from "react";
import Header from "../../components/Header";
import { Link, useHistory } from "react-router-dom";
import BackIcon from "../../assets/backIcon";
import { toRegex } from "../../utils/translation";
import rulesService from "../../services/Rules";
import decodeJWT from "../../utils/decodeJWT";
import "./style.scss";

export default function NewRule() {
  const history = useHistory();
  const fromInput = useRef(null);
  const toInput = useRef(null);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [selected, setSelected] = useState("from");
  const [lawyer, setLawyer] = useState();

  function handleChangeFrom(event) {
    setFrom(event.target.value);
  }

  function handleChangeTo(event) {
    setTo(event.target.value);
  }

  function insertVariable(variable) {
    if (selected === "from") {
      setFrom(from + "${" + variable + "}");
      fromInput.current.focus();
    } else if (selected === "to") {
      setTo(to + "${" + variable + "}");
      toInput.current.focus();
    }
  }

  async function saveRule() {
    if (!from.length || !to.length) {
      alert(
        "Os campos devem ser preenchidos para que você possa salvar uma nova regra."
      );
    } else {
      const token = localStorage.getItem("accessToken");
      const { id } = decodeJWT(token);
      const rule = {
        from: from,
        regex: toRegex(from),
        to: to,
        lawyer: id,
      };
      const response = await rulesService.newRule(rule);
      if (response.status === 200) {
        alert("Regra criada com sucesso");
        history.push("/rules");
      } else {
        alert("Houve um erro ao criar essa regra");
      }
    }
  }

  return (
    <div className="container">
      <Header />
      <main>
        <article className="intro">
          <Link to={`/rules`} style={{ textDecoration: "none" }}>
            <div className="back">
              <BackIcon color="#DAF5E7" />
              <h1>Nova Regra</h1>
            </div>
          </Link>
          <div className="intro__actions">
            <button onClick={() => saveRule()} className="save-btn bold bigger">
              Salvar
            </button>
          </div>
        </article>
        <section className="rule__form">
          <article className="rule__input-area">
            <h3 className="bold">Variáveis</h3>
            <p>Escolha uma variável para inserir no texto.</p>
            <div className="variables__area">
              <button
                onClick={() => insertVariable("date")}
                className="variables__selector bold bigger"
              >
                DATA
              </button>
              <button
                onClick={() => insertVariable("hour")}
                className="variables__selector bold bigger"
              >
                HORA
              </button>
              <button
                onClick={() => insertVariable("cpf")}
                className="variables__selector bold bigger"
              >
                CPF
              </button>
              <button
                onClick={() => insertVariable("cnpj")}
                className="variables__selector bold bigger"
              >
                CNPJ
              </button>
            </div>
          </article>
          <article className="rule__input-area">
            <h3 className="bold">De</h3>
            <p>Os trechos de texto no formato abaixo serão alterados.</p>
            <textarea
              type="text"
              value={from}
              onChange={handleChangeFrom}
              onFocus={() => setSelected("from")}
              ref={fromInput}
            />
          </article>
          <article className="rule__input-area">
            <h3 className="bold">Para</h3>
            <p>
              Os trechos de texto acima serão alterados para o formato abaixo.
            </p>
            <textarea
              type="text"
              value={to}
              onChange={handleChangeTo}
              onFocus={() => setSelected("to")}
              ref={toInput}
            />
          </article>
        </section>
      </main>
    </div>
  );
}
