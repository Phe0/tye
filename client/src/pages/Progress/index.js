import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import BackIcon from "../../assets/backIcon";
import { Link, useParams } from "react-router-dom";
import progressService from "../../services/Progress";
import rulesService from "../../services/Rules";
import procedureService from "../../services/Procedures";
import "./style.scss";

import { translate, findExpressions } from "../../utils/translation";
import { parseHour, parseDate } from "../../utils/parseTime";

export default function Progress() {
  const [progress, setProgress] = useState();
  const [translation, setTranslation] = useState(null);
  const [translatedSelected, setTranslatedSelected] = useState(true);
  const { number, procedureId, id } = useParams();

  useEffect(() => {
    setPage();
  }, []);

  async function setPage() {
    const progress = await progressService.getById(id);
    setProgress(progress);
    const { lawyer } = await procedureService.getLawyer(procedureId);
    const rules = await rulesService.getByLawyer(lawyer);
    const expressions = findExpressions(progress.description, rules);
    let translatedText = progress.description;
    const translations = [];
    expressions.forEach((expression) => {
      if (expression.expressions) {
        expression.expressions.forEach((foundText) => {
          translations.push({
            original: foundText,
            translated: translate(foundText, expression.rule),
          });
        });
      }
    });
    translations.forEach((translation) => {
      translatedText = translatedText.replace(
        translation.original,
        translation.translated
      );
    });
    setTranslation(translatedText);
  }

  return (
    <div className="container">
      <Header />
      <main>
        <article className="intro">
          <Link
            to={`/procedure/${number}/${procedureId}`}
            style={{ textDecoration: "none" }}
          >
            <div className="back">
              <BackIcon color="#DAF5E7" />
              <h1>Andamento</h1>
            </div>
          </Link>
        </article>
        <div>
          <button
            className={`btn bold ${translatedSelected ? "selected" : "bigger"}`}
            onClick={() => setTranslatedSelected(true)}
          >
            Traduzido
          </button>
          <button
            className={`btn bold ${translatedSelected ? "bigger" : "selected"}`}
            onClick={() => setTranslatedSelected(false)}
          >
            Original
          </button>
        </div>
        {progress && (
          <section className="show-text">
            <div className="date-hour">
              <p className="bold">{parseDate(progress.createdAt)}</p>
              <p className="bold">{parseHour(progress.createdAt)}</p>
            </div>
            <p className="description">
              {translatedSelected ? translation : progress.description}
            </p>
          </section>
        )}
      </main>
    </div>
  );
}
