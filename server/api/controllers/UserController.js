/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const jwt = require("jsonwebtoken");

module.exports = {
  login: async function (req, res) {
    User.findOne({ cpf: req.body.cpf })
      .then((user) => {
        sails.helpers
          .comparePasswords(req.body.password, user.password)
          .then((match) => {
            if (match) {
              return res.status(200).json({
                token: jwt.sign(user.toJSON(), "probono"),
              });
            }
            return res.status(400).json({ error: "Senha Inválida" });
          });
      })
      .catch(() => {
        return res.status(401).json({ error: "Usuário não encontrado" });
      });
  },
};
