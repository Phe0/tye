import React from "react";
import Header from "../../components/Header";
import BackIcon from "../../assets/backIcon";
import { Link, useParams } from "react-router-dom";
import "./style.scss";

const rule = {
  from: "Audiência conciliação designada - ${date} ${hour}",
  to:
    "A audiência de conciliação, forma amigável de resolver um processo, foi marcada. Ela será realizada no dia ${date} às ${hour}, no local indicado A audiência de conciliação, forma amigável de resolver um processo, foi marcada. Ela será realizada no dia ${date} às ${hour}, no local indicado A audiência de conciliação, forma amigável de resolver um processo, foi marcada. Ela será realizada no dia ${date} às ${hour}, no local indicado",
  regex:
    "Audiência conciliação designada - ((?:0?[1-9]|[12][0-9]|3[0-1])[/-](?:0?[1-9]|1[012])[/-](?:[0-2][0-9][0-9][0-9])) ((?:[0-1]?[0-9]|2[0-3]):[0-5][0-9])",
};

export default function Rule() {
  const { id } = useParams();
  return (
    <div className="container">
      <Header />
      <main>
        <article className="intro">
          <Link to={`/rules`} style={{ textDecoration: "none" }}>
            <div className="back">
              <BackIcon color="#DAF5E7" />
              <h1>Regra</h1>
            </div>
          </Link>
          <div className="intro__actions">
            <button className="delete-btn bold bigger">Deletar</button>
          </div>
        </article>
        <article className="rule__show">
          <h3 className="bold">De</h3>
          <p>{rule.from}</p>
        </article>
        <article className="rule__show">
          <h3 className="bold">Para</h3>
          <p>{rule.to}</p>
        </article>
      </main>
    </div>
  );
}
