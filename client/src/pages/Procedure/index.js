import React, { useState } from "react";
import Header from "../../components/Header";
import SearchInput from "../../components/SearchInput";
import NewButton from "../../components/NewButton";
import BackIcon from "../../assets/backIcon";
import { Link, useParams } from "react-router-dom";
import searchFunction from "../../utils/search";
import ProgressCard from "../../components/ProgressCard";

const progressesTest = [
  {
    id: 1,
    date: "01/02/2020",
    hour: "16:30",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a ornare leo. Praesent aliquet dignissim laoreet. Sed finibus lobortis vulputate. Duis vehicula ipsum at egestas rutr",
  },
  {
    id: 1,
    date: "01/02/2020",
    hour: "16:30",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a ornare leo. Praesent aliquet dignissim laoreet. Sed finibus lobortis vulputate. Duis vehicula ipsum at egestas rutr",
  },
  {
    id: 1,
    date: "01/02/2020",
    hour: "16:30",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a ornare leo. Praesent aliquet dignissim laoreet. Sed finibus lobortis vulputate. Duis vehicula ipsum at egestas rutr",
  },
  {
    id: 1,
    date: "01/02/2020",
    hour: "16:30",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a ornare leo. Praesent aliquet dignissim laoreet. Sed finibus lobortis vulputate. Duis vehicula ipsum at egestas rutr",
  },
  {
    id: 1,
    date: "01/02/2020",
    hour: "16:30",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a ornare leo. Praesent aliquet dignissim laoreet. Sed finibus lobortis vulputate. Duis vehicula ipsum at egestas rutr",
  },
  {
    id: 1,
    date: "01/02/2020",
    hour: "16:30",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a ornare leo. Praesent aliquet dignissim laoreet. Sed finibus lobortis vulputate. Duis vehicula ipsum at egestas rutr",
  },
];

export default function Procedure() {
  const { number } = useParams();
  const [search, setSearch] = useState("");
  const [progresses, setProgresses] = useState(progressesTest);
  const [filtered, setFiltered] = useState(progressesTest);

  function handleChange(event) {
    setSearch(event.target.value);
    const filteredProcedures = searchFunction(
      progresses,
      ["date", "hour", "description"],
      event.target.value
    );
    setFiltered(filteredProcedures);
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
            <NewButton to={`/new-progress/${number}`} />
          </div>
        </article>
        <p className="explanation bold">{number}</p>
        <section className="folders">
          {filtered.map((progress, index) => (
            <ProgressCard
              key={index}
              date={progress.date}
              hour={progress.hour}
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
