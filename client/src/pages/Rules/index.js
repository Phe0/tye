import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import SearchInput from "../../components/SearchInput";
import NewButton from "../../components/NewButton";
import RuleCard from "../../components/RuleCard";
import searchFunction from "../../utils/search";
import rulesService from "../../services/Rules";
import "./style.scss";
import Empty from "../../components/Empty";

export default function Procedures() {
  const [search, setSearch] = useState("");
  const [rules, setRules] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    async function getRules() {
      const response = await rulesService.getRules();
      setRules(response);
      setFiltered(response);
    }
    getRules();
  }, []);

  function handleChange(event) {
    setSearch(event.target.value);
    const filteredProcedures = searchFunction(
      rules,
      ["from", "to"],
      event.target.value
    );
    setFiltered(filteredProcedures);
  }

  return (
    <div className="container">
      <Header />
      <main>
        <article className="intro">
          <h1>Regras</h1>
          <div className="intro__actions">
            <SearchInput
              value={search}
              onChange={handleChange}
              placeholder="Procure uma regra"
            />
            <NewButton to="/new-rule" />
          </div>
        </article>
        <p className="explanation secondary">
          Regras permitem que pedaços de texto nos seus andamentos sejam
          substituídos, facilitando o entendimento dos seus clientes
        </p>
        {rules.length &&
          (filtered.length ? (
            <section className="folders">
              {filtered.map((rule, index) => (
                <RuleCard
                  key={index}
                  from={rule.from}
                  to={rule.to}
                  id={rule.id}
                />
              ))}
            </section>
          ) : (
            <Empty label="Nenhuma Regra encontrrada" />
          ))}
      </main>
    </div>
  );
}
