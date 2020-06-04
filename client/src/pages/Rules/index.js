import React, { useState } from "react";
import Header from "../../components/Header";
import SearchInput from "../../components/SearchInput";
import NewButton from "../../components/NewButton";
import RuleCard from "../../components/RuleCard";
import searchFunction from "../../utils/search";
import "./style.scss";

const rulesTest = [
  {
    id: 1,
    from: "Audiência conciliação designada - 01/02/2019 08:30",
    to:
      "A audiência de conciliação,forma amigável de resolver um processo, foi marcada. Ela será realizada no dia 01/02/19 às 08:30, no local indicado.",
  },
  {
    id: 1,
    from: "Audiência conciliação designada - 01/02/2019 08:30",
    to:
      "A audiência de conciliação,forma amigável de resolver um processo, foi marcada. Ela será realizada no dia 01/02/19 às 08:30, no local indicado.",
  },
  {
    id: 1,
    from: "Audiência conciliação designada - 01/02/2019 08:30",
    to:
      "A audiência de conciliação,forma amigável de resolver um processo, foi marcada. Ela será realizada no dia 01/02/19 às 08:30, no local indicado.",
  },
  {
    id: 1,
    from: "Audiência conciliação designada - 01/02/2019 08:30",
    to:
      "A audiência de conciliação,forma amigável de resolver um processo, foi marcada. Ela será realizada no dia 01/02/19 às 08:30, no local indicado.",
  },
  {
    id: 1,
    from: "Audiência conciliação designada - 01/02/2019 08:30",
    to:
      "A audiência de conciliação,forma amigável de resolver um processo, foi marcada. Ela será realizada no dia 01/02/19 às 08:30, no local indicado.",
  },
  {
    id: 1,
    from: "Audiência conciliação designada - 01/02/2019 08:30",
    to:
      "A audiência de conciliação,forma amigável de resolver um processo, foi marcada. Ela será realizada no dia 01/02/19 às 08:30, no local indicado.",
  },
  {
    id: 1,
    from: "Audiência conciliação designada - 01/02/2019 08:30",
    to:
      "A audiência de conciliação,forma amigável de resolver um processo, foi marcada. Ela será realizada no dia 01/02/19 às 08:30, no local indicado.",
  },
  {
    id: 1,
    from: "Audiência conciliação designada - 01/02/2019 08:30",
    to:
      "A audiência de conciliação,forma amigável de resolver um processo, foi marcada. Ela será realizada no dia 01/02/19 às 08:30, no local indicado.",
  },
  {
    id: 1,
    from: "Audiência conciliação designada - 01/02/2019 08:30",
    to:
      "A audiência de conciliação,forma amigável de resolver um processo, foi marcada. Ela será realizada no dia 01/02/19 às 08:30, no local indicado.",
  },
  {
    id: 1,
    from: "Audiência conciliação designada - 01/02/2019 08:30",
    to:
      "A audiência de conciliação,forma amigável de resolver um processo, foi marcada. Ela será realizada no dia 01/02/19 às 08:30, no local indicado.",
  },
  {
    id: 1,
    from: "Audiência conciliação designada - 01/02/2019 08:30",
    to:
      "A audiência de conciliação,forma amigável de resolver um processo, foi marcada. Ela será realizada no dia 01/02/19 às 08:30, no local indicado.",
  },
  {
    id: 1,
    from: "Audiência conciliação designada - 01/02/2019 08:30",
    to:
      "A audiência de conciliação,forma amigável de resolver um processo, foi marcada. Ela será realizada no dia 01/02/19 às 08:30, no local indicado.",
  },
  {
    id: 1,
    from: "Audiência conciliação designada - 01/02/2019 08:30",
    to:
      "A audiência de conciliação,forma amigável de resolver um processo, foi marcada. Ela será realizada no dia 01/02/19 às 08:30, no local indicado.",
  },
  {
    id: 1,
    from: "Audiência conciliação designada - 01/02/2019 08:30",
    to:
      "A audiência de conciliação,forma amigável de resolver um processo, foi marcada. Ela será realizada no dia 01/02/19 às 08:30, no local indicado.",
  },
  {
    id: 1,
    from: "Audiência conciliação designada - 01/02/2019 08:30",
    to:
      "A audiência de conciliação,forma amigável de resolver um processo, foi marcada. Ela será realizada no dia 01/02/19 às 08:30, no local indicado.",
  },
  {
    id: 1,
    from: "Audiência conciliação designada - 01/02/2019 08:30",
    to:
      "A audiência de conciliação,forma amigável de resolver um processo, foi marcada. Ela será realizada no dia 01/02/19 às 08:30, no local indicado.",
  },
  {
    id: 1,
    from: "Audiência conciliação designada - 01/02/2019 08:30",
    to:
      "A audiência de conciliação,forma amigável de resolver um processo, foi marcada. Ela será realizada no dia 01/02/19 às 08:30, no local indicado.",
  },
  {
    id: 1,
    from: "Audiência conciliação designada - 01/02/2019 08:30",
    to:
      "A audiência de conciliação,forma amigável de resolver um processo, foi marcada. Ela será realizada no dia 01/02/19 às 08:30, no local indicado.",
  },
];

export default function Procedures() {
  const [search, setSearch] = useState("");
  const [rules, setRules] = useState(rulesTest);
  const [filtered, setFiltered] = useState(rulesTest);

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
        <p className="explanation">
          Regras permitem que pedaços de texto nos seus andamentos sejam
          substituídos, facilitando o entendimento dos seus clientes
        </p>
        <section className="folders">
          {filtered.map((rule, index) => (
            <RuleCard key={index} from={rule.from} to={rule.to} id={rule.id} />
          ))}
        </section>
      </main>
    </div>
  );
}
