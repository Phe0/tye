import React from "react";
import Header from "../../components/Header";
import SearchInput from "../../components/SearchInput";
import NewButton from "../../components/NewButton";
import ProcedureFolder from "../../components/ProcedureFolder";
import "./style.scss";

const procedures = [
  {
    id: 1,
    number: 12345678901234567890,
    cpf: "123.123.123-12",
  },
  {
    id: 1,
    number: 12345678901234567890,
    cpf: "123.123.123-12",
  },
  {
    id: 1,
    number: 12345678901234567890,
    cpf: "123.123.123-12",
  },
  {
    id: 1,
    number: 12345678901234567890,
    cpf: "123.123.123-12",
  },
  {
    id: 1,
    number: 12345678901234567890,
    cpf: "123.123.123-12",
  },
  {
    id: 1,
    number: 12345678901234567890,
    cpf: "123.123.123-12",
  },
  {
    id: 1,
    number: 12345678901234567890,
    cpf: "123.123.123-12",
  },
  {
    id: 1,
    number: 12345678901234567890,
    cpf: "123.123.123-12",
  },
  {
    id: 1,
    number: 12345678901234567890,
    cpf: "123.123.123-12",
  },
  {
    id: 1,
    number: 12345678901234567890,
    cpf: "123.123.123-12",
  },
  {
    id: 1,
    number: 12345678901234567890,
    cpf: "123.123.123-12",
  },
  {
    id: 1,
    number: 12345678901234567890,
    cpf: "123.123.123-12",
  },
  {
    id: 1,
    number: 12345678901234567890,
    cpf: "123.123.123-12",
  },
  {
    id: 1,
    number: 12345678901234567890,
    cpf: "123.123.123-12",
  },
  {
    id: 1,
    number: 12345678901234567890,
    cpf: "123.123.123-12",
  },
  {
    id: 1,
    number: 12345678901234567890,
    cpf: "123.123.123-12",
  },
  {
    id: 1,
    number: 12345678901234567890,
    cpf: "123.123.123-12",
  },
  {
    id: 1,
    number: 12345678901234567890,
    cpf: "123.123.123-12",
  },
  {
    id: 1,
    number: 12345678901234567890,
    cpf: "123.123.123-12",
  },
  {
    id: 1,
    number: 12345678901234567890,
    cpf: "123.123.123-12",
  },
  {
    id: 1,
    number: 12345678901234567890,
    cpf: "123.123.123-12",
  },
  {
    id: 1,
    number: 12345678901234567890,
    cpf: "123.123.123-12",
  },
  {
    id: 1,
    number: 12345678901234567890,
    cpf: "123.123.123-12",
  },
  {
    id: 1,
    number: 12345678901234567890,
    cpf: "123.123.123-12",
  },
  {
    id: 1,
    number: 12345678901234567890,
    cpf: "123.123.123-12",
  },
  {
    id: 1,
    number: 12345678901234567890,
    cpf: "123.123.123-12",
  },
  {
    id: 1,
    number: 12345678901234567890,
    cpf: "123.123.123-12",
  },
];

export default function Procedures() {
  return (
    <div className="container">
      <Header />
      <main>
        <article className="intro">
          <h1>Processos</h1>
          <div className="intro__actions">
            <SearchInput placeholder="Procure um processo..." />
            <NewButton />
          </div>
        </article>
        <section className="folders">
          {procedures.map((procedure, index) => (
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
