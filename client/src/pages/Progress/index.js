import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import BackIcon from "../../assets/backIcon";
import { Link, useParams } from "react-router-dom";
import progressService from "../../services/Progress";
import "./style.scss";

import { translate, findExpressions } from "../../utils/translation";
import { parsedate, parseHour, parseDate } from "../../utils/parseTime";

const rules = [
  {
    from: "Audiência conciliação designada - ${date} ${hour}",
    to:
      "A audiência de conciliação, forma amigável de resolver um processo, foi marcada. Ela será realizada no dia ${date} às ${hour}, no local indicado",
    regex:
      "Audiência conciliação designada - ((?:0?[1-9]|[12][0-9]|3[0-1])[/-](?:0?[1-9]|1[012])[/-](?:[0-2][0-9][0-9][0-9])) ((?:[0-1]?[0-9]|2[0-3]):[0-5][0-9])",
  },
  {
    from: "Audiência instrução e julgamento designada - ${date} ${hour}",
    to:
      "Foi marcada uma audiência para as partes e testemunhas oferecerem seu depoimento pessoal sobre o caso. Nessa etapa do processo, o juiz também tenta conciliar as partes.",
    regex:
      "Audiência instrução e julgamento designada - ((?:0?[1-9]|[12][0-9]|3[0-1])[/-](?:0?[1-9]|1[012])[/-](?:[0-2][0-9][0-9][0-9])) ((?:[0-1]?[0-9]|2[0-3]):[0-5][0-9])",
  },
];

// const description =
//   "Audiência conciliação designada - 01/02/2020 08:30 Audiência instrução e julgamento designada - 10/12/2012 16:30 Audiência conciliação designada - 02/02/2020 08:00 Audiência instrução e julgamento designada - 11/12/2012 16:00";

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
