const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  if (req.headers && req.headers.authorization) {
    let parts = req.headers.authorization.split(" ");
    if (parts.length === 2) {
      let scheme = parts[0];
      let credentials = parts[1];
      if (/^Bearer$/i.test(scheme)) {
        jwt.verify(credentials, "probono", (error, decoded) => {
          if (error) {
            return res.status(401).json(error);
          }
          req.user = decoded;
          next();
        });
      } else {
        return res
          .status(401)
          .json({ error: "Formato de credenciais incorreto" });
      }
    }
  } else {
    return res.status(401).json({ error: "Header não encontrado" });
  }
};
