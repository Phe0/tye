/**
 * LawyerController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const jwt = require("jsonwebtoken");

module.exports = {
  login: async function (req, res) {
    Lawyer.findOne({ email: req.body.email })
      .then((lawyer) => {
        sails.helpers
          .comparePasswords(req.body.password, lawyer.password)
          .then((match) => {
            if (match) {
              return res.status(200).json({
                token: jwt.sign(lawyer.toJSON(), "probono"),
              });
            }
            return res.status(400).json({ error: "Senha Inválida" });
          });
      })
      .catch(() => {
        return res.status(400).json({ error: "Usuário não encontrado" });
      });
  },
  signin: function (req, res) {
    Lawyer.create(req.body)
      .fetch()
      .then((lawyer) => {
        const token = jwt.sign(lawyer.toJSON(), "probono");
        return res.status(200).json({
          token,
        });
      })
      .catch((error) => res.status(400).json(error));
  },
};
