import React from "react";
import Header from "../../components/Header";
import SearchInput from "../../components/SearchInput";
import NewButton from "../../components/NewButton";
import BackIcon from "../../assets/backIcon";
import { Link } from "react-router-dom";
import ProgressCard from "../../components/ProgressCard";

const progresses = [
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
  const number = "1234567890123456789";
  return (
    <div className="container">
      <Header />
      <main>
        <article className="intro">
          <Link to="/procedures" style={{ textDecoration: "none" }}>
            <div class="back">
              <BackIcon color="#DAF5E7" />
              <h1>Andamentos</h1>
            </div>
          </Link>
          <div className="intro__actions">
            <SearchInput placeholder="Procure um andamento" />
            <NewButton />
          </div>
        </article>
        <p className="explanation bold">{number}</p>
        <section className="folders">
          {progresses.map((progress, index) => (
            <ProgressCard
              key={index}
              date={progress.date}
              hour={progress.hour}
              description={progress.description}
              id={progress.id}
            />
          ))}
        </section>
      </main>
    </div>
  );
}
