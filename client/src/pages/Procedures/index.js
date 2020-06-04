import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import SearchInput from "../../components/SearchInput";
import NewButton from "../../components/NewButton";
import ProcedureFolder from "../../components/ProcedureFolder";
import searchFunction from "../../utils/search";
import "./style.scss";

const proceduresTest = [
  {
    id: 1,
    number: "11111111111111111111",
    cpf: "123.123.123-12",
  },
  {
    id: 1,
    number: "12345678901234567890",
    cpf: "123.123.123-12",
  },
  {
    id: 1,
    number: "12345678901234567890",
    cpf: "123.123.123-12",
  },
  {
    id: 1,
    number: "12345678901234567890",
    cpf: "123.123.123-12",
  },
  {
    id: 1,
    number: "12345678901234567890",
    cpf: "123.123.123-12",
  },
];

export default function Procedures() {
  const [search, setSearch] = useState("");
  const [procedures, setProcedures] = useState(proceduresTest);
  const [filtered, setFiltered] = useState(proceduresTest);

  function handleChange(event) {
    setSearch(event.target.value);
    const filteredProcedures = searchFunction(
      procedures,
      ["number", "cpf"],
      event.target.value
    );
    setFiltered(filteredProcedures);
  }

  return (
    <div className="container">
      <Header />
      <main>
        <article className="intro">
          <h1>Processos</h1>
          <div className="intro__actions">
            <SearchInput
              value={search}
              onChange={handleChange}
              placeholder="Procure um processo"
            />
            <NewButton to="/new-procedure" />
          </div>
        </article>
        <section className="folders">
          {filtered.map((procedure, index) => (
            <ProcedureFolder
              key={index}
              id={procedure.id}
              number={procedure.number}
              cpf={procedure.cpf}
            />
          ))}
        </section>
      </main>
    </div>
  );
}
