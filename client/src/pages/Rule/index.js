import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import BackIcon from "../../assets/backIcon";
import { Link, useParams, useHistory } from "react-router-dom";
import ruleService from "../../services/Rules";
import "./style.scss";

export default function Rule() {
  const history = useHistory();
  const { id } = useParams();
  const [rule, setRule] = useState();

  useEffect(() => {
    getRule();
  }, []);

  async function deleteRule() {
    const response = await ruleService.deleteRule(id);
    if (response.status === 200) {
      alert("Regra deletada com sucesso");
      history.push("/rules");
    } else {
      alert("Houve um erro ao criar essa regra");
    }
  }

  async function getRule() {
    const response = await ruleService.getRuleById(id);
    setRule(response);
  }

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
            <button
              onClick={() => deleteRule()}
              className="delete-btn bold bigger"
            >
              Deletar
            </button>
          </div>
        </article>
        {rule && (
          <div>
            <article className="rule__show">
              <h3 className="bold">De</h3>
              <p>{rule.from}</p>
            </article>
            <article className="rule__show">
              <h3 className="bold">Para</h3>
              <p>{rule.to}</p>
            </article>
          </div>
        )}
      </main>
    </div>
  );
}
