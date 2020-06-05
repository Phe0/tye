const jwt = require("jsonwebtoken");

export default function decodeJWT(token) {
  const decoded = jwt.verify(token, "probono");
  return decoded;
}
