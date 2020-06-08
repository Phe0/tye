import React, { useState } from "react";
import Header from "../../components/Header";
import InputMask from "react-input-mask";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import BackIcon from "../../assets/backIcon";
import regex from "../../utils/regex";
import loginService from "../../services/Login";

export default function Signin() {
  const history = useHistory();
  const [role, setRole] = useState("user");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSelect(value) {
    setRole(value);
  }

  function changeCPF(event) {
    setCpf(event.target.value);
  }

  function changeEmail(event) {
    setEmail(event.target.value);
  }

  function changePassword(event) {
    setPassword(event.target.value);
  }

  async function signin() {
    if (role === "user") {
      if (cpf.match(regex.cpfLiteral) && password.length) {
        const user = {
          cpf,
          password,
        };
        try {
          const response = await loginService.userSignin(user);
          if (response.status === 200) {
            localStorage.setItem("accessToken", response.data.token);
            history.push("/procedures");
          } else {
            alert("Já existe um cadastro com esse CPF.");
          }
        } catch {
          alert("Já existe um cadastro com esse CPF.");
        }
      } else {
        alert("Por favor, insira o cpf e a senha corretamente.");
      }
    }
    if (role === "lawyer") {
      if (email.match(regex.email) && password.length) {
        const lawyer = {
          email,
          password,
        };
        try {
          const response = await loginService.lawyerSignin(lawyer);
          if (response.status === 200) {
            localStorage.setItem("accessToken", response.data.token);
            history.push("/procedures");
          } else {
            alert("Já existe um cadastro com esse Email.");
          }
        } catch (e) {
          alert("Já existe um cadastro com esse Email.");
        }
      } else {
        alert("Por favor, insira o email e a senha corretamente.");
      }
    }
  }

  return (
    <div className="container">
      <Header />
      <article className="intro">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="back">
            <BackIcon color="#DAF5E7" />
            <h1>Criar conta de {role === "lawyer" ? "Advogado" : "Cliente"}</h1>
          </div>
        </Link>
        <div className="intro__actions">
          <button className="save-btn bold bigger" onClick={() => signin()}>
            Criar conta
          </button>
        </div>
      </article>
      <section>
        <article className="rule__input-area">
          <h3 className="bold">Função</h3>
          <div className="variables__area">
            <button
              onClick={() => handleSelect("user")}
              className={`variables__selector bold ${
                role === "user" ? "login-selected" : "bigger"
              }`}
              disabled={role === "user" ? true : false}
            >
              CLIENTE
            </button>
            <button
              onClick={() => handleSelect("lawyer")}
              className={`variables__selector bold ${
                role === "lawyer" ? "login-selected" : "bigger"
              }`}
              disabled={role === "lawyer" ? true : false}
            >
              ADVOGADO
            </button>
          </div>
        </article>
        {role === "lawyer" ? (
          <article className="rule__input-area">
            <h3 className="bold">Email</h3>
            <InputMask type="text" value={email} onChange={changeEmail} />
          </article>
        ) : (
          <article className="rule__input-area">
            <h3 className="bold">CPF</h3>
            <InputMask
              type="text"
              mask="999.999.999-99"
              value={cpf}
              onChange={changeCPF}
            />
          </article>
        )}
        <article className="rule__input-area">
          <h3 className="bold">Senha</h3>
          <input type="password" value={password} onChange={changePassword} />
        </article>
      </section>
    </div>
  );
}
