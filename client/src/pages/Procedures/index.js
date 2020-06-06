import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import SearchInput from "../../components/SearchInput";
import NewButton from "../../components/NewButton";
import ProcedureFolder from "../../components/ProcedureFolder";
import searchFunction from "../../utils/search";
import proceduresService from "../../services/Procedures";
import "./style.scss";
import Empty from "../../components/Empty";

export default function Procedures() {
  const [search, setSearch] = useState("");
  const [procedures, setProcedures] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    async function getProcedures() {
      const proceduresArray = await proceduresService.getProcedures();
      proceduresArray.sort((a, b) => {
        if (a.createdAt > b.createdAt) return -1;
        if (a.createdAt < b.createdAt) return 1;
        return 0;
      });
      setProcedures(proceduresArray);
      setFiltered(proceduresArray);
    }

    getProcedures();
  }, []);

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
        {filtered.length ? (
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
        ) : (
          <Empty label="Nenhum Processo encontrado" />
        )}
      </main>
    </div>
  );
}
