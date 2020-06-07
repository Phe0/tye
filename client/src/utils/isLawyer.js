import decodeJWT from "./decodeJWT";

export default function isLawyer() {
  const token = localStorage.getItem("accessToken");
  if (token) {
    const user = decodeJWT(token);
    return user.cpf ? false : true;
  }
  return false;
}
