import decodeJWT from "./decodeJWT";

export default function isLawyer() {
  const token = localStorage.getItem("accessToken");
  const user = decodeJWT(token);
  return user.cpf ? false : true;
}
