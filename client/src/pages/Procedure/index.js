import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import SearchInput from "../../components/SearchInput";
import NewButton from "../../components/NewButton";
import BackIcon from "../../assets/backIcon";
import { Link, useParams } from "react-router-dom";
import searchFunction from "../../utils/search";
import ProgressCard from "../../components/ProgressCard";
import progressService from "../../services/Progress";

export default function Procedure() {
  const { number, id } = useParams();
  const [search, setSearch] = useState("");
  const [progresses, setProgresses] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    getProgress();
  }, []);

  async function getProgress() {
    const progressArray = await progressService.getByProcedure(id);
    progressArray.sort((a, b) => {
      if (a.createdAt > b.createdAt) return -1;
      if (a.createdAt < b.createdAt) return 1;
      return 0;
    });
    setProgresses(progressArray);
    setFiltered(progressArray);
  }

  function handleChange(event) {
    setSearch(event.target.value);
    const filteredProcedures = searchFunction(
      progresses,
      ["date", "hour", "description"],
      event.target.value
    );
    setFiltered(filteredProcedures);
  }

  function parseDate(date) {
    date = new Date(date);
    return `${("0" + date.getDate()).slice(-2)}/${(
      "0" +
      (date.getMonth() + 1)
    ).slice(-2)}/${date.getFullYear()}`;
  }

  function parseHour(date) {
    date = new Date(date);
    return `${date.getHours()}:${date.getMinutes()}`;
  }

  return (
    <div className="container">
      <Header />
      <main>
        <article className="intro">
          <Link to="/procedures" style={{ textDecoration: "none" }}>
            <div className="back">
              <BackIcon color="#DAF5E7" />
              <h1>Andamentos</h1>
            </div>
          </Link>
          <div className="intro__actions">
            <SearchInput
              value={search}
              onChange={handleChange}
              placeholder="Procure um andamento"
            />
            <NewButton to={`/new-progress/${number}/${id}`} />
          </div>
        </article>
        <p className="explanation bold">{number}</p>
        <section className="folders">
          {filtered.map((progress, index) => (
            <ProgressCard
              key={index}
              date={parseDate(progress.createdAt)}
              hour={parseHour(progress.createdAt)}
              description={progress.description}
              id={progress.id}
              number={number}
            />
          ))}
        </section>
      </main>
    </div>
  );
}
